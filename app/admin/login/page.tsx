'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FiLock, FiMail, FiEye, FiEyeOff } from 'react-icons/fi'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const router = useRouter()

  // Reset error when inputs change
  useEffect(() => {
    if (error) setError('')
  }, [email, password])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simple rate limiting
    if (attempts >= 3) {
      setError('Too many attempts. Please wait before trying again.')
      setIsLoading(false)
      return
    }

    // Hardcoded credentials check (in production, use proper authentication)
    if (email === 'ridaaabdi@gmail.com' && password === '9457') {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))
      router.push('/admin/dashboard')
    } else {
      setAttempts(prev => prev + 1)
      setError('Invalid credentials')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-900 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-800 rounded-full filter blur-3xl"></div>
      </div>

      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-pink-500/20 shadow-lg">
        {/* Header with gradient text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            Admin Portal
          </h1>
          <p className="text-gray-400 mt-2">Enter your credentials to continue</p>
        </div>
        
        {/* Error message */}
        {error && (
          <div className="mb-6 p-3 bg-red-900/50 text-red-400 rounded-lg border border-red-500/30 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email field */}
          <div className="space-y-2">
            <label className="block text-pink-400/90 font-medium">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-500" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-pink-500/50 focus:border-transparent placeholder-gray-500"
                placeholder="admin@example.com"
                required
                disabled={isLoading || attempts >= 3}
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <label className="block text-pink-400/90 font-medium">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-500" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg pl-10 pr-12 py-3 text-white focus:ring-2 focus:ring-pink-500/50 focus:border-transparent placeholder-gray-500"
                placeholder="••••••••"
                required
                disabled={isLoading || attempts >= 3}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading || attempts >= 3}
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-400 hover:text-pink-400" />
                ) : (
                  <FiEye className="text-gray-400 hover:text-pink-400" />
                )}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading || attempts >= 3}
            className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${
              isLoading || attempts >= 3
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg hover:shadow-pink-500/20'
            } flex items-center justify-center`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        {/* Security notice - remove in production */}
        <div className="mt-8 p-3 bg-gray-800/50 rounded-lg border border-gray-700 text-xs text-gray-400">
          <p className="font-medium text-pink-400 mb-1">Development Notice:</p>
          <p>This is a demo login. In production, implement proper authentication with hashed passwords and database storage.</p>
        </div>
      </div>
    </div>
  )
}