import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from '../redux/slices/authSlice'
import type { LoginRequest, LoginResponse } from '@honokit/shared/types'

// TODO: Replace with actual API call when backend is ready
async function loginUser(credentials: LoginRequest): Promise<LoginResponse> {
  // Placeholder - implement actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          email: credentials.email,
          name: 'Demo User',
          role: 'user',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        token: 'jwt-token-placeholder',
      })
    }, 1000)
  })
}

export function useAuth() {
  const dispatch = useAppDispatch()
  const { user, token, isAuthenticated, isLoading, error } = useAppSelector(
    (state) => state.auth
  )

  const login = useCallback(
    async (credentials: LoginRequest) => {
      try {
        dispatch(loginStart())
        const response = await loginUser(credentials)
        dispatch(loginSuccess(response))
        return { success: true }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Login failed'
        dispatch(loginFailure(message))
        return { success: false, error: message }
      }
    },
    [dispatch]
  )

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  const clearError = useCallback(() => {
    dispatch({ type: 'auth/clearError' })
  }, [dispatch])

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout: handleLogout,
    clearError,
  }
}
