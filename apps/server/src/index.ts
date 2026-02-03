import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

// Middleware
app.use('*', logger())
app.use(
  '*',
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
)

// Health check
app.get('/health', c => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// API routes
app.get('/api', c => {
  return c.json({
    message: 'Honokit API',
    version: '0.1.0',
  })
})

// TODO: Import and mount route modules
// import authRoutes from './routes/auth'
// app.route('/api/auth', authRoutes)

const port = parseInt(process.env.PORT || '3000')

console.log(`🚀 Server starting on http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
