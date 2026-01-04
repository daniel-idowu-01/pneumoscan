"""
Image Preprocessing Module
Handles image preprocessing for pneumonia detection model
"""

import numpy as np
from PIL import Image
import logging
from typing import Tuple, Optional

logger = logging.getLogger(__name__)

class ImagePreprocessor:
    """Image preprocessing for chest X-ray analysis"""
    
    def __init__(
        self,
        target_size: Tuple[int, int] = (224, 224),
        normalize: bool = True,
        grayscale_to_rgb: bool = True
    ):
        """
        Initialize preprocessor
        
        Args:
            target_size: Target image size (height, width)
            normalize: Whether to normalize pixel values to [0, 1]
            grayscale_to_rgb: Convert grayscale to RGB by duplicating channels
        """
        self.target_size = target_size
        self.normalize = normalize
        self.grayscale_to_rgb = grayscale_to_rgb
    
    def preprocess(self, image: Image.Image) -> np.ndarray:
        """
        Preprocess a single image
        
        Args:
            image: PIL Image object
            
        Returns:
            Preprocessed numpy array ready for model input
        """
        try:
            # Convert to RGB if grayscale
            if image.mode != 'RGB':
                if self.grayscale_to_rgb:
                    image = image.convert('RGB')
                else:
                    image = image.convert('L')
            
            # Resize image
            image = image.resize(self.target_size, Image.LANCZOS)
            
            # Convert to numpy array
            img_array = np.array(image, dtype=np.float32)
            
            # Normalize pixel values
            if self.normalize:
                img_array = img_array / 255.0
            
            # Add batch dimension
            img_array = np.expand_dims(img_array, axis=0)
            
            logger.debug(f"Preprocessed image shape: {img_array.shape}")
            return img_array
            
        except Exception as e:
            logger.error(f"Preprocessing error: {e}")
            raise
    
    def preprocess_batch(self, images: list) -> np.ndarray:
        """
        Preprocess a batch of images
        
        Args:
            images: List of PIL Image objects
            
        Returns:
            Batch of preprocessed images as numpy array
        """
        processed_images = []
        for img in images:
            processed = self.preprocess(img)
            processed_images.append(processed[0])  # Remove batch dimension
        
        # Stack into batch
        batch = np.stack(processed_images, axis=0)
        logger.debug(f"Preprocessed batch shape: {batch.shape}")
        return batch
    
    def validate_image(self, image: Image.Image) -> bool:
        """
        Validate image meets requirements
        
        Args:
            image: PIL Image object
            
        Returns:
            True if valid, raises exception if invalid
        """
        # Check if image is valid
        if image is None:
            raise ValueError("Image is None")
        
        # Check minimum size
        min_size = 64
        if image.size[0] < min_size or image.size[1] < min_size:
            raise ValueError(f"Image too small. Minimum size: {min_size}x{min_size}")
        
        # Check maximum size (to prevent memory issues)
        max_size = 4096
        if image.size[0] > max_size or image.size[1] > max_size:
            raise ValueError(f"Image too large. Maximum size: {max_size}x{max_size}")
        
        return True
    
    def apply_clahe(self, image: np.ndarray, clip_limit: float = 2.0) -> np.ndarray:
        """
        Apply CLAHE (Contrast Limited Adaptive Histogram Equalization)
        Useful for enhancing chest X-ray contrast
        
        Args:
            image: Numpy array image
            clip_limit: CLAHE clip limit
            
        Returns:
            Enhanced image
        """
        try:
            import cv2
            
            # Convert to uint8 if needed
            if image.dtype != np.uint8:
                image = (image * 255).astype(np.uint8)
            
            # Apply CLAHE
            clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=(8, 8))
            
            if len(image.shape) == 3:  # RGB
                # Apply to each channel
                enhanced = np.zeros_like(image)
                for i in range(3):
                    enhanced[:, :, i] = clahe.apply(image[:, :, i])
            else:  # Grayscale
                enhanced = clahe.apply(image)
            
            return enhanced / 255.0  # Normalize back
            
        except ImportError:
            logger.warning("OpenCV not available, skipping CLAHE")
            return image
        except Exception as e:
            logger.error(f"CLAHE enhancement error: {e}")
            return image
    
    def augment_image(self, image: np.ndarray, augmentation_type: str = 'none') -> np.ndarray:
        """
        Apply data augmentation (useful for test-time augmentation)
        
        Args:
            image: Numpy array image
            augmentation_type: Type of augmentation ('none', 'flip', 'rotate', 'brightness')
            
        Returns:
            Augmented image
        """
        if augmentation_type == 'none':
            return image
        
        try:
            if augmentation_type == 'flip':
                return np.fliplr(image)
            elif augmentation_type == 'rotate':
                # Rotate 90 degrees
                return np.rot90(image, k=1)
            elif augmentation_type == 'brightness':
                # Adjust brightness slightly
                factor = np.random.uniform(0.8, 1.2)
                return np.clip(image * factor, 0, 1)
            else:
                return image
        except Exception as e:
            logger.error(f"Augmentation error: {e}")
            return image
