# Honokit

> Production-ready Google Auth boilerplate for fullstack TypeScript applications

[![CI](https://github.com/yourusername/honokit/workflows/CI/badge.svg)](https://github.com/yourusername/honokit/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Honokit** is a modern, ultra-fast fullstack TypeScript boilerplate built with:
- **[Bun](https://bun.sh/)** - Lightning-fast JavaScript runtime
- **[Hono](https://hono.dev/)** - Lightweight, blazing-fast web framework
- **[React](https://react.dev/)** - Popular JavaScript library for building user interfaces
- **Google OAuth 2.0** - Secure authentication out of the box

Perfect for building production-ready applications with best practices for security, encryption, and type safety.

---

## ✨ Features

### Backend (Bun + Hono)
- ⚡ **Blazing Fast** - Bun runtime is ~3x faster than Node.js
- 🔐 **Data Encryption** - XChaCha20-Poly1305 encryption for PII
- 🔑 **Password Hashing** - Argon2id (best-in-class password hashing)
- 🛡️ **Type-Safe** - Full TypeScript support with strict mode
- 🔒 **Secure by Default** - CORS, rate limiting, input validation
- 📝 **Comprehensive Logging** - Structured JSON logs

### Frontend (React + TypeScript)
- ⚛️ **React 19** - Modern React with hooks and concurrent features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🗂️ **Redux Toolkit** - Efficient state management
- 🧭 **React Router** - Client-side routing
- ⚡ **Vite** - Lightning-fast dev server and build tool
- 🔄 **Hot Module Replacement** - Instant feedback during development

### Shared
- 🔗 **Shared Types** - End-to-end type safety between frontend and backend
- 🎯 **Monorepo** - Single repository for easier development
- 📦 **Bun Workspaces** - Efficient dependency management
- 🧪 **Testing Ready** - Vitest for frontend, Bun test for backend

### Security & Best Practices
- 🔐 **Google OAuth 2.0** - Production-ready authentication
- 🔒 **JWT Tokens** - Secure session management
- 🛡️ **Data Encryption** - Application-level encryption for sensitive data
- 📋 **GDPR Compliant** - Built-in encryption and data handling best practices
- 🔑 **Key Management** - Secure key storage patterns

---

## 📁 Project Structure

```
honokit/
├── apps/
│   ├── server/               # Bun + Hono API server
│   │   ├── src/
│   │   │   ├── routes/       # API route handlers
│   │   │   ├── middleware/   # Request middleware
│   │   │   ├── lib/          # Utilities (encryption, db)
│   │   │   ├── types/        # Backend-specific types
│   │   │   └── index.ts      # Entry point
│   │   ├── tests/            # Backend tests
│   │   └── package.json
│   │
│   ├── client/               # React + TypeScript SPA
│   │   ├── src/
│   │   │   ├── components/   # React components
│   │   │   ├── pages/        # Page components
│   │   │   ├── hooks/        # Custom React hooks
│   │   │   ├── redux/        # Redux store & slices
│   │   │   ├── services/     # API client
│   │   │   └── main.tsx      # Entry point
│   │   └── package.json
│   │
│   └── database/             # Database management
│       ├── migrations/       # Schema migrations
│       ├── seeds/            # Seed data
│       └── schema/           # Schema docs
│
├── packages/
│   └── shared/               # Shared code
│       ├── types/            # Shared TypeScript types
│       ├── utils/            # Shared utilities
│       └── constants/        # Shared constants
│
├── docs/                     # Documentation
│   ├── GETTING_STARTED.md
│   ├── ARCHITECTURE.md
│   └── API.md
│
├── .github/                  # CI/CD workflows
│   └── workflows/
│       └── ci.yml
│
├── package.json              # Root package.json (workspace)
└── tsconfig.json             # Root TypeScript config
```

---

## 🚀 Quick Start

### Prerequisites

- **Bun** >= 1.0.0 - [Install Bun](https://bun.sh/docs/installation)
- **Node.js** >= 18.0.0 (for frontend tools)
- **Database**: PostgreSQL or SQLite

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/honokit.git
cd honokit

# 2. Install dependencies
bun install

# 3. Set up environment variables
cp apps/server/.env.example apps/server/.env
cp apps/client/.env.example apps/client/.env

# 4. Generate encryption keys
bun run -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
# Add to apps/server/.env as ENCRYPTION_KEY

bun run -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
# Add to apps/server/.env as JWT_SECRET

# 5. Set up database
bun run db:migrate

# 6. (Optional) Seed test data
bun run db:seed

# 7. Start development servers
bun run dev
```

This will start:
- **Server**: http://localhost:3000
- **Client**: http://localhost:5173

---

## 📚 Documentation

- **[Getting Started](./docs/GETTING_STARTED.md)** - Detailed setup guide
- **[Architecture](./docs/ARCHITECTURE.md)** - System design and data flow
- **[API Documentation](./docs/API.md)** - API endpoints reference
- **[Encryption Strategy](./docs/ENCRYPTION.md)** - Data security guidelines

---

## 🔐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable **Google+ API**
4. Create **OAuth 2.0 credentials**:
   - Application type: Web application
   - Authorized redirect URIs: `http://localhost:3000/auth/google/callback`
5. Copy **Client ID** and **Client Secret** to `apps/server/.env`:

```env
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback
```

---

## 🧪 Testing

```bash
# Run all tests
bun test

# Server tests
bun run test:server

# Client tests
bun run test:client

# Watch mode
bun test --watch
```

---

## 🏗️ Building for Production

```bash
# Build all apps
bun run build

# Build individually
bun run build:server
bun run build:client

# Start production server
bun run start
```

---

## 🛠️ Available Scripts

```bash
# Development
bun run dev              # Start all apps in dev mode
bun run dev:server       # Start server only
bun run dev:client       # Start client only

# Building
bun run build            # Build all apps
bun run build:server     # Build server
bun run build:client     # Build client

# Testing
bun test                 # Run all tests
bun run test:server      # Server tests
bun run test:client      # Client tests

# Database
bun run db:migrate       # Run migrations
bun run db:seed          # Seed database

# Code Quality
bun run typecheck        # Type check all packages
bun run lint             # Lint code
bun run format           # Format code with Prettier
```

---

## 🌐 Deployment

### Recommended Hosting

#### Backend
- **[Railway](https://railway.app/)** - Easy deployment with PostgreSQL
- **[Fly.io](https://fly.io/)** - Global edge hosting
- **[Render](https://render.com/)** - Free tier available

#### Frontend
- **[Vercel](https://vercel.com/)** - Zero-config deployment
- **[Netlify](https://netlify.com/)** - Great for SPA
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Fast CDN

#### Database
- **[Neon](https://neon.tech/)** - Serverless PostgreSQL (free tier!)
- **[Supabase](https://supabase.com/)** - PostgreSQL + extras
- **[Railway](https://railway.app/)** - PostgreSQL with auto-backups

### Environment Variables

Make sure to set these in your hosting provider:

**Backend:**
```env
PORT=3000
NODE_ENV=production
DATABASE_URL=postgresql://...
ENCRYPTION_KEY=<32-byte-hex>
JWT_SECRET=<64-byte-hex>
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_REDIRECT_URI=https://yourdomain.com/auth/google/callback
FRONTEND_URL=https://yourdomain.com
```

**Frontend:**
```env
VITE_API_URL=https://api.yourdomain.com
VITE_GOOGLE_CLIENT_ID=...
```

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](./CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Bun](https://bun.sh/) - Amazing JavaScript runtime
- [Hono](https://hono.dev/) - Lightweight web framework
- [Vue](https://vuejs.org/) - Progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [@noble/ciphers](https://github.com/paulmillr/noble-ciphers) - Audited crypto library

---

## 📧 Contact

- **Author**: noxren
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Issues**: [GitHub Issues](https://github.com/yourusername/honokit/issues)

---

<div align="center">
  <strong>⭐ If you like Honokit, give it a star on GitHub! ⭐</strong>
</div>
