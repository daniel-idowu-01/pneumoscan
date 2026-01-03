"""
PneumoScan ML Inference Service
FastAPI application for pneumonia detection from chest X-rays
"""

from fastapi import FastAPI, HTTPException, UploadFile, File, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List
import uvicorn
import logging
import base64
import io
from PIL import Image
import numpy as np

# Import custom modules (we'll create these)
from model_loader import ModelLoader
from preprocessing import ImagePreprocessor
from inference import PneumoniaPredictor
from postprocessing import ResultsFormatter

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="PneumoScan ML Service",
    description="AI-powered pneumonia detection from chest X-rays",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure based on your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global model loader (singleton pattern for caching)
model_loader = ModelLoader()
preprocessor = ImagePreprocessor()
predictor = PneumoniaPredictor()
formatter = ResultsFormatter()

# Request/Response Models
class PredictionRequest(BaseModel):
    image_base64: str = Field(..., description="Base64 encoded chest X-ray image")
    scan_id: str = Field(..., description="Unique scan identifier")
    high_sensitivity: bool = Field(default=False, description="Use high sensitivity threshold")

class PredictionResponse(BaseModel):
    scan_id: str
    prediction: str  # 'pneumonia' or 'normal'
    confidence: float
    severity: Optional[str] = None  # 'mild', 'moderate', 'severe'
    findings: List[str] = []
    processing_time_ms: float
    model_version: str

class HealthResponse(BaseModel):
    status: str
    model_loaded: bool
    model_version: str
    gpu_available: bool

# API Key validation (simple auth)
def verify_api_key(x_api_key: str = Header(...)):
    """Validate API key from header"""
    # Replace with your actual API key validation
    valid_key = "your-secret-api-key-here"  # Store in environment variable
    if x_api_key != valid_key:
        raise HTTPException(status_code=403, detail="Invalid API key")
    return x_api_key

@app.on_event("startup")
async def startup_event():
    """Load model on startup"""
    logger.info("Starting ML service...")
    try:
        model_loader.load_model()
        logger.info("Model loaded successfully")
    except Exception as e:
        logger.error(f"Failed to load model: {e}")
        raise

@app.get("/", tags=["Health"])
async def root():
    """Root endpoint"""
    return {
        "message": "PneumoScan ML Service",
        "status": "running",
        "version": "1.0.0"
    }

@app.get("/health", response_model=HealthResponse, tags=["Health"])
async def health_check():
    """Health check endpoint"""
    import tensorflow as tf
    
    return HealthResponse(
        status="healthy",
        model_loaded=model_loader.is_loaded(),
        model_version=model_loader.get_version(),
        gpu_available=len(tf.config.list_physical_devices('GPU')) > 0
    )

@app.post("/predict", response_model=PredictionResponse, tags=["Inference"])
async def predict(
    request: PredictionRequest,
    x_api_key: str = Header(..., alias="X-API-Key")
):
    """
    Predict pneumonia from chest X-ray image
    
    Args:
        request: PredictionRequest containing base64 image and metadata
        x_api_key: API key for authentication
        
    Returns:
        PredictionResponse with prediction results
    """
    import time
    start_time = time.time()
    
    try:
        # Verify API key
        verify_api_key(x_api_key)
        
        logger.info(f"Processing prediction for scan_id: {request.scan_id}")
        
        # Decode base64 image
        image_data = base64.b64decode(request.image_base64)
        image = Image.open(io.BytesIO(image_data))
        
        # Preprocess image
        processed_image = preprocessor.preprocess(image)
        
        # Run inference
        prediction_result = predictor.predict(
            processed_image,
            high_sensitivity=request.high_sensitivity
        )
        
        # Format results
        formatted_result = formatter.format_results(
            prediction_result,
            request.scan_id
        )
        
        # Calculate processing time
        processing_time = (time.time() - start_time) * 1000  # Convert to ms
        
        response = PredictionResponse(
            scan_id=request.scan_id,
            prediction=formatted_result['prediction'],
            confidence=formatted_result['confidence'],
            severity=formatted_result.get('severity'),
            findings=formatted_result.get('findings', []),
            processing_time_ms=processing_time,
            model_version=model_loader.get_version()
        )
        
        logger.info(f"Prediction completed for {request.scan_id}: {response.prediction} ({response.confidence:.2f})")
        return response
        
    except Exception as e:
        logger.error(f"Prediction error for {request.scan_id}: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

@app.post("/predict/batch", tags=["Inference"])
async def predict_batch(
    requests: List[PredictionRequest],
    x_api_key: str = Header(..., alias="X-API-Key")
):
    """Batch prediction endpoint for multiple images"""
    verify_api_key(x_api_key)
    
    results = []
    for req in requests:
        try:
            result = await predict(req, x_api_key)
            results.append(result)
        except Exception as e:
            logger.error(f"Batch prediction error for {req.scan_id}: {str(e)}")
            results.append({
                "scan_id": req.scan_id,
                "error": str(e)
            })
    
    return {"results": results}

@app.post("/model/reload", tags=["Management"])
async def reload_model(x_api_key: str = Header(..., alias="X-API-Key")):
    """Reload the model (for hot swapping)"""
    verify_api_key(x_api_key)
    
    try:
        logger.info("Reloading model...")
        model_loader.reload_model()
        return {"status": "success", "message": "Model reloaded successfully"}
    except Exception as e:
        logger.error(f"Model reload failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Model reload failed: {str(e)}")

@app.get("/metrics", tags=["Monitoring"])
async def get_metrics():
    """Get service metrics"""
    return {
        "predictions_count": predictor.get_prediction_count(),
        "average_inference_time_ms": predictor.get_average_inference_time(),
        "model_version": model_loader.get_version(),
        "uptime_seconds": predictor.get_uptime()
    }

if __name__ == "__main__":
    # Run the service
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=False,  # Set to False in production
        workers=1  # Single worker for model consistency
    )
