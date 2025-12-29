interface RequestOptions extends RequestInit {
    requiresAuth?: boolean
  }
  
  class APIClient {
    private baseURL: string
  
    constructor(baseURL: string = '') {
      this.baseURL = baseURL
    }
    private async request<T>(
      endpoint: string,
      options: RequestOptions = {}
    ): Promise<{ data: T; error?: string }> {
      const { requiresAuth = true, ...fetchOptions } = options
  
      const config: RequestInit = {
        ...fetchOptions,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
      }
  
      try {
        let response = await fetch(`${this.baseURL}${endpoint}`, config)
  
        if (response.status === 401 && requiresAuth) {
          const refreshResponse = await fetch('/api/auth/refresh', {
            method: 'POST',
            credentials: 'include',
          })
  
          if (refreshResponse.ok) {
            response = await fetch(`${this.baseURL}${endpoint}`, config)
          } else {
            if (typeof window !== 'undefined') {
              window.location.href = '/login?error=session-expired'
            }
            throw new Error('Session expired')
          }
        }
  
        const data = await response.json()
  
        if (!response.ok) {
          return {
            data: null as T,
            error: data.error || 'Request failed',
          }
        }
  
        return { data: data.data || data }
      } catch (error) {
        console.error('API request error:', error)
        return {
          data: null as T,
          error: error instanceof Error ? error.message : 'Network error',
        }
      }
    }
  
   
    async get<T>(endpoint: string, options?: RequestOptions): Promise<{ data: T; error?: string }> {
      return this.request<T>(endpoint, { ...options, method: 'GET' })
    }
  
    
    async post<T>(
      endpoint: string,
      body?: any,
      options?: RequestOptions
    ): Promise<{ data: T; error?: string }> {
      return this.request<T>(endpoint, {
        ...options,
        method: 'POST',
        body: JSON.stringify(body),
      })
    }
  
    async put<T>(
      endpoint: string,
      body?: any,
      options?: RequestOptions
    ): Promise<{ data: T; error?: string }> {
      return this.request<T>(endpoint, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(body),
      })
    }
  
    async patch<T>(
      endpoint: string,
      body?: any,
      options?: RequestOptions
    ): Promise<{ data: T; error?: string }> {
      return this.request<T>(endpoint, {
        ...options,
        method: 'PATCH',
        body: JSON.stringify(body),
      })
    }

    async delete<T>(endpoint: string, options?: RequestOptions): Promise<{ data: T; error?: string }> {
      return this.request<T>(endpoint, { ...options, method: 'DELETE' })
    }
  
    async upload<T>(
      endpoint: string,
      file: File,
      additionalData?: Record<string, any>
    ): Promise<{ data: T; error?: string }> {
      const formData = new FormData()
      formData.append('file', file)
  
      if (additionalData) {
        Object.entries(additionalData).forEach(([key, value]) => {
          formData.append(key, value)
        })
      }
  
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'POST',
          credentials: 'include',
          body: formData,
        })
  
        const data = await response.json()
  
        if (!response.ok) {
          return {
            data: null as T,
            error: data.error || 'Upload failed',
          }
        }
  
        return { data: data.data || data }
      } catch (error) {
        console.error('Upload error:', error)
        return {
          data: null as T,
          error: error instanceof Error ? error.message : 'Upload failed',
        }
      }
    }
  }
  
  export const apiClient = new APIClient()
  
  export default APIClient