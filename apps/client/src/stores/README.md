# stores/

Pinia stores for state management.

## Stores

- **auth.ts** - Authentication state (user, tokens, login/logout)
- **user.ts** - User profile data
- **app.ts** - Global app state (loading, errors, notifications)

## Usage Example

```typescript
// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),
  actions: {
    async login(credentials) {
      // Login logic
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    },
  },
})

// In component
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
```

## Guidelines

- Keep stores focused on a single domain
- Use actions for side effects (API calls)
- Use getters for derived state
- Avoid mutations outside of actions
