# api/

API client and service modules for backend communication.

## Structure

- **client.ts** - Axios/fetch client configuration
- **auth.ts** - Authentication API calls
- **users.ts** - User-related API calls

## Usage Example

```typescript
// api/client.ts
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// api/auth.ts
export const authApi = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  logout: () => apiClient.post('/auth/logout'),
  getCurrentUser: () => apiClient.get('/auth/me'),
}

// In component or store
import { authApi } from '@/api/auth'

const user = await authApi.getCurrentUser()
```

## Guidelines

- Centralize all API calls in this directory
- Use TypeScript types for request/response
- Handle errors consistently
- Add loading states where appropriate
