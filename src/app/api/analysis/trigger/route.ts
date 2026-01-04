import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { AuthenticatedRequest, authMiddleware } from '@/lib/auth-middleware'
import { mlServiceClient } from '@/services/ml-service-client'
import { ObjectId } from 'mongodb'

async function triggerAnalysis(request: AuthenticatedRequest) {
  try {
    const userId = request.user?.userId

    const body = await request.json()
    const { scanId } = body

    if (!scanId) {
      return NextResponse.json(
        { error: 'Scan ID is required' },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const scansCollection = db.collection('scans')

    const scan = await scansCollection.findOne({
      scanId,
      doctorId: new ObjectId(userId),
    })

    if (!scan) {
      return NextResponse.json(
        { error: 'Scan not found or unauthorized' },
        { status: 404 }
      )
    }

    if (scan.analysisStatus === 'completed') {
      return NextResponse.json(
        { 
          message: 'Scan already analyzed',
          scan_id: scanId,
          status: 'completed',
          results: scan.aiPrediction
        },
        { status: 200 }
      )
    }

    const isMLServiceAvailable = await mlServiceClient.isAvailable()
    if (!isMLServiceAvailable) {
      return NextResponse.json(
        { error: 'ML service is currently unavailable' },
        { status: 503 }
      )
    }

    await scansCollection.updateOne(
      { scanId },
      { 
        $set: { 
          analysisStatus: 'processing',
          updatedAt: new Date()
        } 
      }
    )

    try {
      const predictionRequest = {
        image_base64: scan.imageUrl,
        scan_id: scanId,
        high_sensitivity: scan.highSensitivityMode || false,
      }

      const predictionResponse = await mlServiceClient.predict(predictionRequest)

      const aiPrediction = {
        hasPneumonia: predictionResponse.prediction === 'pneumonia',
        confidence: predictionResponse.confidence,
        severity: predictionResponse.severity,
        findings: predictionResponse.findings,
        timestamp: new Date(),
        modelVersion: predictionResponse.model_version,
        processingTimeMs: predictionResponse.processing_time_ms,
      }

      await scansCollection.updateOne(
        { scanId },
        {
          $set: {
            analysisStatus: 'completed',
            aiPrediction,
            analyzedAt: new Date(),
            updatedAt: new Date(),
          },
        }
      )

      return NextResponse.json(
        {
          message: 'Analysis completed successfully',
          scan_id: scanId,
          status: 'completed',
          results: aiPrediction,
        },
        { status: 200 }
      )
    } catch (mlError) {
      console.error('ML prediction error:', mlError)

      await scansCollection.updateOne(
        { scanId },
        {
          $set: {
            analysisStatus: 'failed',
            updatedAt: new Date(),
            errorMessage: mlError instanceof Error ? mlError.message : 'Unknown error',
          },
        }
      )

      return NextResponse.json(
        { 
          error: 'ML analysis failed',
          details: mlError instanceof Error ? mlError.message : 'Unknown error'
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Analysis trigger error:', error)
    return NextResponse.json(
      { error: 'Failed to trigger analysis' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
    return authMiddleware(request as AuthenticatedRequest, triggerAnalysis)
}