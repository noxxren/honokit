import { useState, useEffect, useCallback } from 'react'

// TODO: Configure API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const API_BASE_PATH = import.meta.env.VITE_API_BASE_PATH || '/api'

interface UseApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  body?: any
  headers?: Record<string, string>
  authorized?: boolean
}

interface UseApiResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  execute: () => Promise<void>
  reset: () => void
}

// Get auth token from localStorage
function getAuthToken(): string | null {
  return localStorage.getItem('token')
}

export function useApi<T = any>(
  endpoint: string,
  options: UseApiOptions = {}
): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    method = 'GET',
    body,
    headers = {},
    authorized = false,
  } = options

  const execute = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const requestHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
        ...headers,
      }

      // Add authorization header if required
      if (authorized) {
        const token = getAuthToken()
        if (token) {
          requestHeaders['Authorization'] = `Bearer ${token}`
        }
      }

      const response = await fetch(
        `${API_BASE_URL}${API_BASE_PATH}${endpoint}`,
        {
          method,
          headers: requestHeaders,
          body: body ? JSON.stringify(body) : undefined,
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      setData(result)
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'An unknown error occurred'
      setError(message)
      console.error('API error:', err)
    } finally {
      setLoading(false)
    }
  }, [endpoint, method, body, headers, authorized])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  // Auto-execute on mount if method is GET
  useEffect(() => {
    if (method === 'GET') {
      execute()
    }
  }, [execute, method])

  return { data, loading, error, execute, reset }
}

// Hook for mutation operations (POST, PUT, DELETE)
export function useApiMutation<T = any>(
  endpoint: string,
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'POST',
  authorized = false
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const mutate = useCallback(
    async (body?: any) => {
      setLoading(true)
      setError(null)

      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        }

        if (authorized) {
          const token = getAuthToken()
          if (token) {
            headers['Authorization'] = `Bearer ${token}`
          }
        }

        const response = await fetch(
          `${API_BASE_URL}${API_BASE_PATH}${endpoint}`,
          {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        setData(result)
        return { success: true, data: result }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'An unknown error occurred'
        setError(message)
        console.error('API mutation error:', err)
        return { success: false, error: message }
      } finally {
        setLoading(false)
      }
    },
    [endpoint, method, authorized]
  )

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  return { data, loading, error, mutate, reset }
}
