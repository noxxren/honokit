import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Honokit
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A production-ready Google Auth boilerplate built with Bun, Hono,
          React, and TypeScript.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/login"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/your-repo/honokit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
