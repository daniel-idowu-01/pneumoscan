export function generatePatientId(): string {
    const date = new Date()
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '')
    const random = Math.random().toString(36).substring(2, 7).toUpperCase()
    return `PID-${dateStr}-${random}`
  }
  
export function generateScanId(): string {
    const date = new Date()
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '')
    const timeStr = date.toISOString().slice(11, 19).replace(/:/g, '')
    const random = Math.random().toString(36).substring(2, 7).toUpperCase()
    return `SCAN-${dateStr}-${timeStr}-${random}`
}
  
export function getBase64Size(base64String: string): number {
    const base64 = base64String.replace(/^data:image\/\w+;base64,/, '')

    // Calculate size in bytes
    const padding = (base64.match(/=/g) || []).length
    const size = (base64.length * 3) / 4 - padding

    return Math.round(size)
}
  
export function validateImageSize(sizeInBytes: number): boolean {
    const maxSize = 10 * 1024 * 1024 // 10MB
    return sizeInBytes <= maxSize
}
  
export function sanitizePatientId(patientId: string): string {
    return patientId.trim().replace(/[^A-Za-z0-9-_]/g, '')
}