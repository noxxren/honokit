# React Components

This directory contains reusable React components.

## Structure

```
components/
├── common/         # Common UI components (Button, Input, Modal, etc.)
├── layout/         # Layout components (Header, Footer, Sidebar, etc.)
└── features/       # Feature-specific components
```

## Component Guidelines

### Naming Conventions
- Use PascalCase for component names
- Component file name should match component name
- Example: `Button.tsx` exports `Button` component

### Component Structure

```typescript
// components/common/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  // Component logic
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
```

### Best Practices
1. Use TypeScript interfaces for props
2. Keep components small and focused
3. Use composition over complex props
4. Implement proper error boundaries
5. Add proper accessibility attributes
6. Use React.memo for performance optimization when needed

## TODO

- [ ] Create common Button component
- [ ] Create Input component with validation
- [ ] Create Modal component
- [ ] Create Loading/Spinner component
- [ ] Create Toast/Notification component
- [ ] Create Header layout component
- [ ] Create Footer layout component
