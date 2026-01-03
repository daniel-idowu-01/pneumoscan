"""
Inference Module
Handles prediction logic and model inference
"""

import numpy as np
import logging
import time
from typing import Dict, List, Optional
from model_loader import ModelLoader

logger = logging.getLogger(__name__)

class PneumoniaPredictor:
    """Pneumonia prediction with configurable thresholds"""
    
    def __init__(
        self,
        default_threshold: float = 0.5,
        high_sensitivity_threshold: float = 0.3
    ):
        """
        Initialize predictor
        
        Args:
            default_threshold: Default classification threshold
            high_sensitivity_threshold: Threshold for high sensitivity mode
        """
        self.default_threshold = default_threshold
        self.high_sensitivity_threshold = high_sensitivity_threshold
        self.model_loader = ModelLoader()
        
        # Metrics tracking
        self._prediction_count = 0
        self._total_inference_time = 0.0
        self._start_time = time.time()
    
    def predict(
        self,
        image: np.ndarray,
        high_sensitivity: bool = False
    ) -> Dict:
        """
        Run prediction on preprocessed image
        
        Args:
            image: Preprocessed image array (batch_size, height, width, channels)
            high_sensitivity: Use high sensitivity threshold
            
        Returns:
            Dictionary with prediction results
        """
        start_time = time.time()
        
        try:
            # Get model
            model = self.model_loader.get_model()
            
            # Run inference
            predictions = model.predict(image, verbose=0)
            
            # Extract probability
            if predictions.shape[-1] == 1:
                # Binary classification with sigmoid
                pneumonia_probability = float(predictions[0][0])
            else:
                # Multi-class with softmax
                pneumonia_probability = float(predictions[0][1])  # Assuming class 1 is pneumonia
            
            # Determine threshold
            threshold = (self.high_sensitivity_threshold if high_sensitivity 
                        else self.default_threshold)
            
            # Make prediction
            has_pneumonia = pneumonia_probability >= threshold
            
            # Determine severity if pneumonia detected
            severity = self._determine_severity(pneumonia_probability) if has_pneumonia else None
            
            # Generate findings
            findings = self._generate_findings(pneumonia_probability, has_pneumonia)
            
            # Update metrics
            inference_time = time.time() - start_time
            self._prediction_count += 1
            self._total_inference_time += inference_time
            
            result = {
                'has_pneumonia': has_pneumonia,
                'pneumonia_probability': pneumonia_probability,
                'normal_probability': 1.0 - pneumonia_probability,
                'threshold_used': threshold,
                'severity': severity,
                'findings': findings,
                'inference_time_ms': inference_time * 1000,
                'confidence': pneumonia_probability if has_pneumonia else (1.0 - pneumonia_probability)
            }
            
            logger.info(f"Prediction: {'Pneumonia' if has_pneumonia else 'Normal'} "
                       f"(confidence: {result['confidence']:.3f})")
            
            return result
            
        except Exception as e:
            logger.error(f"Prediction error: {e}")
            raise
    
    def _determine_severity(self, probability: float) -> str:
        """
        Determine pneumonia severity based on probability
        
        Args:
            probability: Pneumonia probability
            
        Returns:
            Severity level: 'mild', 'moderate', or 'severe'
        """
        if probability >= 0.9:
            return 'severe'
        elif probability >= 0.7:
            return 'moderate'
        else:
            return 'mild'
    
    def _generate_findings(self, probability: float, has_pneumonia: bool) -> List[str]:
        """
        Generate clinical findings based on prediction
        
        Args:
            probability: Pneumonia probability
            has_pneumonia: Whether pneumonia was detected
            
        Returns:
            List of findings
        """
        findings = []
        
        if has_pneumonia:
            if probability >= 0.9:
                findings.extend([
                    "High confidence pneumonia detection",
                    "Significant opacity in lung fields",
                    "Recommend immediate clinical correlation"
                ])
            elif probability >= 0.7:
                findings.extend([
                    "Moderate confidence pneumonia detection",
                    "Visible infiltrates in lung fields",
                    "Clinical correlation recommended"
                ])
            else:
                findings.extend([
                    "Low to moderate confidence pneumonia detection",
                    "Subtle opacity patterns observed",
                    "Further clinical assessment recommended"
                ])
        else:
            if probability < 0.1:
                findings.append("Clear lung fields, no evidence of pneumonia")
            else:
                findings.append("Minimal to no evidence of pneumonia")
        
        # Add disclaimer
        findings.append("AI-assisted diagnosis - requires physician verification")
        
        return findings
    
    def predict_batch(
        self,
        images: np.ndarray,
        high_sensitivity: bool = False
    ) -> List[Dict]:
        """
        Run batch prediction
        
        Args:
            images: Batch of preprocessed images
            high_sensitivity: Use high sensitivity threshold
            
        Returns:
            List of prediction results
        """
        results = []
        for i in range(images.shape[0]):
            image = np.expand_dims(images[i], axis=0)
            result = self.predict(image, high_sensitivity)
            results.append(result)
        return results
    
    def predict_with_tta(
        self,
        image: np.ndarray,
        num_augmentations: int = 5
    ) -> Dict:
        """
        Test-Time Augmentation (TTA) for more robust predictions
        
        Args:
            image: Preprocessed image
            num_augmentations: Number of augmented predictions to average
            
        Returns:
            Averaged prediction results
        """
        logger.info(f"Running TTA with {num_augmentations} augmentations")
        
        predictions = []
        
        # Original prediction
        result = self.predict(image)
        predictions.append(result['pneumonia_probability'])
        
        # Augmented predictions
        for _ in range(num_augmentations - 1):
            # Apply random augmentation (flip, rotate, etc.)
            augmented = self._apply_random_augmentation(image)
            aug_result = self.predict(augmented)
            predictions.append(aug_result['pneumonia_probability'])
        
        # Average predictions
        avg_probability = np.mean(predictions)
        std_probability = np.std(predictions)
        
        has_pneumonia = avg_probability >= self.default_threshold
        
        return {
            'has_pneumonia': has_pneumonia,
            'pneumonia_probability': float(avg_probability),
            'normal_probability': float(1.0 - avg_probability),
            'prediction_std': float(std_probability),
            'severity': self._determine_severity(avg_probability) if has_pneumonia else None,
            'findings': self._generate_findings(avg_probability, has_pneumonia),
            'method': 'TTA',
            'num_augmentations': num_augmentations,
            'confidence': float(avg_probability if has_pneumonia else (1.0 - avg_probability))
        }
    
    def _apply_random_augmentation(self, image: np.ndarray) -> np.ndarray:
        """Apply random augmentation to image"""
        import random
        
        # Random horizontal flip
        if random.random() > 0.5:
            image = np.fliplr(image)
        
        # Random brightness adjustment
        if random.random() > 0.5:
            factor = random.uniform(0.9, 1.1)
            image = np.clip(image * factor, 0, 1)
        
        return image
    
    # Metrics methods
    def get_prediction_count(self) -> int:
        """Get total number of predictions made"""
        return self._prediction_count
    
    def get_average_inference_time(self) -> float:
        """Get average inference time in milliseconds"""
        if self._prediction_count == 0:
            return 0.0
        return (self._total_inference_time / self._prediction_count) * 1000
    
    def get_uptime(self) -> float:
        """Get service uptime in seconds"""
        return time.time() - self._start_time
    
    def reset_metrics(self):
        """Reset metrics counters"""
        self._prediction_count = 0
        self._total_inference_time = 0.0
        logger.info("Metrics reset")
