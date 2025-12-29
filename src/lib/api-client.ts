/**
 * API Client for making authenticated requests
 */

interface RequestOptions extends RequestInit {
    requiresAuth?: boolean
  }
  
  class APIClient {
    private baseURL: string
  
    constructor(baseURL: string = '') {
      this.baseURL = baseURL
    }
  
    /**
     * Make an authenticated request
     */
    private async request<T>(
      endpoint: string,
      options: RequestOptions = {}
    ): Promise<{ data: T; error?: string }> {
      const { requiresAuth = true, ...fetchOptions } = options
  
      const config: RequestInit = {
        ...fetchOptions,
        credentials: 'include', // Include cookies
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
      }
  
      try {
        let response = await fetch(`${this.baseURL}${endpoint}`, config)
  
        // If unauthorized and requires auth, try to refresh token
        if (response.status === 401 && requiresAuth) {
          const refreshResponse = await fetch('/api/auth/refresh', {
            method: 'POST',
            credentials: 'include',
          })
  
          if (refreshResponse.ok) {
            // Retry original request
            response = await fetch(`${this.baseURL}${endpoint}`, config)
          } else {
            // Refresh failed, redirect to login
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
  
    /**
     * GET request
     */
    async get<T>(endpoint: string, options?: RequestOptions): Promise<{ data: T; error?: string }> {
      return this.request<T>(endpoint, { ...options, method: 'GET' })
    }
  
    /**
     * POST request
     */
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
  
    /**
     * PUT request
     */
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
  
    /**
     * PATCH request
     */
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
  
    /**
     * DELETE request
     */
    async delete<T>(endpoint: string, options?: RequestOptions): Promise<{ data: T; error?: string }> {
      return this.request<T>(endpoint, { ...options, method: 'DELETE' })
    }
  
    /**
     * Upload file
     */
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
          // Don't set Content-Type header, browser will set it with boundary
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
  
  // Export singleton instance
  export const apiClient = new APIClient()
  
  // Export class for custom instances
  export default APIClient