# API Services

This directory contains API client services for communicating with the backend.

## Structure

```
services/
├── api.ts          # Main API client configuration
├── auth.ts         # Authentication API calls (login, logout, register)
└── users.ts        # User management API calls
```

## Usage Example

```typescript
// services/auth.ts
import { useApiMutation } from '@/hooks/useApi'

export function useLogin() {
  return useApiMutation('/auth/login', 'POST', false)
}

// In component
import { useLogin } from '@/services/auth'

function LoginForm() {
  const { mutate, loading, error } = useLogin()

  const handleSubmit = async (credentials: LoginRequest) => {
    const result = await mutate(credentials)
    if (result.success) {
      // Handle success
    }
  }

  // ...
}
```

## TODO

- [ ] Implement `api.ts` with axios or fetch wrapper
- [ ] Implement `auth.ts` with login, logout, register functions
- [ ] Implement `users.ts` with user CRUD operations
- [ ] Add request/response interceptors for token injection
- [ ] Add error handling and retry logic
- [ ] Add token refresh logic
