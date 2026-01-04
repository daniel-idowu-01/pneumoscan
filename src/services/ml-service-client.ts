interface PredictionRequest {
    image_base64: string
    scan_id: string
    high_sensitivity?: boolean
  }
  
  interface PredictionResponse {
    scan_id: string
    prediction: 'pneumonia' | 'normal'
    confidence: number
    severity?: 'mild' | 'moderate' | 'severe'
    findings: string[]
    processing_time_ms: number
    model_version: string
  }
  
  interface MLServiceHealth {
    status: string
    model_loaded: boolean
    model_version: string
    gpu_available: boolean
  }
  
  class MLServiceClient {
    private baseUrl: string
    private apiKey: string
    private timeout: number
  
    constructor(
      baseUrl: string = process.env.ML_SERVICE_URL || 'http://localhost:8000',
      apiKey: string = process.env.ML_SERVICE_API_KEY || '',
      timeout: number = 30000
    ) {
      this.baseUrl = baseUrl
      this.apiKey = apiKey
      this.timeout = timeout
    }
  
    async checkHealth(): Promise<MLServiceHealth> {
      try {
        const response = await fetch(`${this.baseUrl}/health`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: AbortSignal.timeout(5000), // 5s timeout for health check
        })
  
        if (!response.ok) {
          throw new Error(`Health check failed: ${response.status}`)
        }
  
        return await response.json()
      } catch (error) {
        console.error('ML service health check failed:', error)
        throw error
      }
    }
  
    async predict(request: PredictionRequest): Promise<PredictionResponse> {
      try {
        const response = await fetch(`${this.baseUrl}/predict`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': this.apiKey,
          },
          body: JSON.stringify(request),
          signal: AbortSignal.timeout(this.timeout),
        })
  
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(
            `Prediction failed: ${response.status} - ${errorData.detail || response.statusText}`
          )
        }
  
        return await response.json()
      } catch (error) {
        console.error('ML prediction error:', error)
        throw error
      }
    }
 
    async predictBatch(
      requests: PredictionRequest[]
    ): Promise<{ results: PredictionResponse[] }> {
      try {
        const response = await fetch(`${this.baseUrl}/predict/batch`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': this.apiKey,
          },
          body: JSON.stringify(requests),
          signal: AbortSignal.timeout(this.timeout * requests.length),
        })
  
        if (!response.ok) {
          throw new Error(`Batch prediction failed: ${response.status}`)
        }
  
        return await response.json()
      } catch (error) {
        console.error('ML batch prediction error:', error)
        throw error
      }
    }
  
    async reloadModel(): Promise<{ status: string; message: string }> {
      try {
        const response = await fetch(`${this.baseUrl}/model/reload`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': this.apiKey,
          },
        })
  
        if (!response.ok) {
          throw new Error(`Model reload failed: ${response.status}`)
        }
  
        return await response.json()
      } catch (error) {
        console.error('ML model reload error:', error)
        throw error
      }
    }
  
    async getMetrics(): Promise<{
      predictions_count: number
      average_inference_time_ms: number
      model_version: string
      uptime_seconds: number
    }> {
      try {
        const response = await fetch(`${this.baseUrl}/metrics`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
  
        if (!response.ok) {
          throw new Error(`Metrics fetch failed: ${response.status}`)
        }
  
        return await response.json()
      } catch (error) {
        console.error('ML metrics fetch error:', error)
        throw error
      }
    }
  
    async isAvailable(): Promise<boolean> {
      try {
        const health = await this.checkHealth()
        return health.status === 'healthy' && health.model_loaded
      } catch {
        return false
      }
    }
  }
  
export const mlServiceClient = new MLServiceClient()

export type {
    PredictionRequest,
    PredictionResponse,
    MLServiceHealth,
}