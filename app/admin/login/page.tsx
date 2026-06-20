'use client'

import { useState } from 'react'
import { Zap, Eye, EyeOff } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    // Full navigation so the rewrite proxy to the dashboard app works
    window.location.href = '/admin/dashboard'
  }

  return (
    <div className="flex min-h-screen">
      {/* Left — Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-[#1a1d2e] p-12 relative overflow-hidden">
        {/* Abstract decorative circles */}
        <div className="absolute -top-40 -right-40 size-80 rounded-full bg-[#845adf]/10" />
        <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-[#845adf]/5" />

        <div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center size-8 rounded-md bg-[#845adf]">
              <Zap className="size-5 text-white fill-white" />
            </span>
            <span className="text-lg font-bold tracking-wide text-white">
              <span className="text-[#845adf]">y</span>nex
            </span>
          </div>
        </div>

        <div className="relative">
          <blockquote className="text-white/80 text-lg leading-relaxed italic">
            &ldquo;This dashboard has transformed the way we manage our
            e-commerce operations. Incredibly intuitive and powerful.&rdquo;
          </blockquote>
          <div className="mt-4 flex items-center gap-3">
            <div className="size-10 rounded-full bg-[#845adf]/30 flex items-center justify-center text-white text-sm font-semibold">
              SJ
            </div>
            <div>
              <p className="text-white font-medium text-sm">Sarah Jenkins</p>
              <p className="text-white/50 text-xs">Head of Operations, Fern</p>
            </div>
          </div>
        </div>

        <p className="text-white/30 text-xs relative">
          &copy; {new Date().getFullYear()} Ynex. All rights reserved.
        </p>
      </div>

      {/* Right — Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 bg-white">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <span className="flex items-center justify-center size-8 rounded-md bg-[#845adf]">
              <Zap className="size-5 text-white fill-white" />
            </span>
            <span className="text-lg font-bold tracking-wide text-[#1a1d2e]">
              <span className="text-[#845adf]">y</span>nex
            </span>
          </div>

          <h1 className="text-2xl font-bold text-[#1a1d2e]">Sign in to Admin</h1>
          <p className="mt-1 text-sm text-[#6b6b6b]">
            Enter your credentials to access the dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1a1d2e] mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@fern.com"
                className="w-full rounded-md border border-[#e5e5e0] bg-white px-3 py-2.5 text-sm text-[#1a1d2e] placeholder:text-[#6b6b6b] focus:outline-none focus:ring-2 focus:ring-[#845adf]/30 focus:border-[#845adf] transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#1a1d2e] mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-[#e5e5e0] bg-white px-3 py-2.5 pr-10 text-sm text-[#1a1d2e] placeholder:text-[#6b6b6b] focus:outline-none focus:ring-2 focus:ring-[#845adf]/30 focus:border-[#845adf] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b6b] hover:text-[#1a1d2e] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#845adf] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#7349cc] focus:outline-none focus:ring-2 focus:ring-[#845adf]/30 transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-[#6b6b6b]">
            &copy; {new Date().getFullYear()} Ynex. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
