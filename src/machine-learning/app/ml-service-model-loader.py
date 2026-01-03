"""
Model Loader Module
Handles loading, caching, and version management of ML models
"""

import os
import logging
from pathlib import Path
from typing import Optional
import tensorflow as tf
from tensorflow import keras

logger = logging.getLogger(__name__)

class ModelLoader:
    """Singleton class for loading and caching ML models"""
    
    _instance = None
    _model = None
    _model_version = None
    _is_loaded = False
    
    def __new__(cls):
        """Implement singleton pattern"""
        if cls._instance is None:
            cls._instance = super(ModelLoader, cls).__new__(cls)
        return cls._instance
    
    def __init__(self):
        """Initialize model loader"""
        self.model_path = os.getenv('MODEL_PATH', './models/pneumonia_model.h5')
        self.model_version = os.getenv('MODEL_VERSION', '1.0.0')
        self.use_gpu = os.getenv('USE_GPU', 'false').lower() == 'true'
        
        # Configure GPU if available
        if self.use_gpu:
            self._configure_gpu()
    
    def _configure_gpu(self):
        """Configure GPU settings for optimal performance"""
        gpus = tf.config.list_physical_devices('GPU')
        if gpus:
            try:
                # Enable memory growth to avoid allocating all GPU memory
                for gpu in gpus:
                    tf.config.experimental.set_memory_growth(gpu, True)
                logger.info(f"GPU configured: {len(gpus)} GPU(s) available")
            except RuntimeError as e:
                logger.error(f"GPU configuration error: {e}")
        else:
            logger.warning("No GPU available, using CPU")
    
    def load_model(self) -> keras.Model:
        """
        Load the ML model into memory with caching
        
        Returns:
            Loaded Keras model
        """
        if self._is_loaded and self._model is not None:
            logger.info("Using cached model")
            return self._model
        
        try:
            logger.info(f"Loading model from: {self.model_path}")
            
            # Check if model file exists
            if not os.path.exists(self.model_path):
                raise FileNotFoundError(f"Model file not found: {self.model_path}")
            
            # Load model based on file extension
            if self.model_path.endswith('.h5'):
                self._model = keras.models.load_model(self.model_path)
            elif self.model_path.endswith('.keras'):
                self._model = keras.models.load_model(self.model_path)
            elif os.path.isdir(self.model_path):
                # TensorFlow SavedModel format
                self._model = tf.saved_model.load(self.model_path)
            else:
                raise ValueError(f"Unsupported model format: {self.model_path}")
            
            self._is_loaded = True
            self._model_version = self.model_version
            
            # Warm up the model with a dummy prediction
            self._warm_up_model()
            
            logger.info(f"Model loaded successfully (version: {self._model_version})")
            return self._model
            
        except Exception as e:
            logger.error(f"Failed to load model: {e}")
            raise
    
    def _warm_up_model(self):
        """
        Warm up the model with a dummy prediction to initialize weights
        This improves first prediction performance
        """
        try:
            import numpy as np
            dummy_input = np.random.rand(1, 224, 224, 3).astype(np.float32)
            _ = self._model.predict(dummy_input, verbose=0)
            logger.info("Model warm-up completed")
        except Exception as e:
            logger.warning(f"Model warm-up failed: {e}")
    
    def reload_model(self):
        """Reload the model (useful for hot-swapping models)"""
        logger.info("Reloading model...")
        self._model = None
        self._is_loaded = False
        return self.load_model()
    
    def get_model(self) -> keras.Model:
        """Get the loaded model (load if not already loaded)"""
        if not self._is_loaded:
            return self.load_model()
        return self._model
    
    def is_loaded(self) -> bool:
        """Check if model is loaded"""
        return self._is_loaded and self._model is not None
    
    def get_version(self) -> str:
        """Get model version"""
        return self._model_version if self._model_version else "unknown"
    
    def get_model_info(self) -> dict:
        """Get detailed model information"""
        if not self._is_loaded:
            return {"status": "not_loaded"}
        
        try:
            input_shape = self._model.input_shape
            output_shape = self._model.output_shape
            
            return {
                "status": "loaded",
                "version": self._model_version,
                "input_shape": input_shape,
                "output_shape": output_shape,
                "model_path": self.model_path,
                "total_params": self._model.count_params() if hasattr(self._model, 'count_params') else None
            }
        except Exception as e:
            logger.error(f"Error getting model info: {e}")
            return {"status": "error", "error": str(e)}
