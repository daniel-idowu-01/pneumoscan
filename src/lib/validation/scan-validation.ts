import { z } from 'zod'

export const createScanSchema = z.object({
  patientId: z.string()
    .min(3, 'Patient ID must be at least 3 characters')
    .max(50, 'Patient ID must be less than 50 characters')
    .regex(/^[A-Za-z0-9-_]+$/, 'Patient ID can only contain letters, numbers, hyphens, and underscores'),
  
  patientName: z.string()
    .min(2, 'Patient name must be at least 2 characters')
    .max(100, 'Patient name must be less than 100 characters')
    .trim(),
  
  dateOfBirth: z.string()
    .optional()
    .refine(
      (val) => !val || !isNaN(Date.parse(val)),
      'Invalid date format'
    ),
  
  clinicalNotes: z.string()
    .max(2000, 'Clinical notes must be less than 2000 characters')
    .optional(),
  
  symptoms: z.array(z.string())
    .optional(),
  
  imageData: z.string()
    .min(100, 'Image data is required'),
  
  imageFileName: z.string()
    .min(1, 'Image file name is required')
    .max(255, 'File name too long'),
  
  imageMimeType: z.enum(['image/jpeg', 'image/jpg', 'image/png'], 
    { message: 'Only JPEG and PNG images are supported' }),
})

export type CreateScanInput = z.infer<typeof createScanSchema>