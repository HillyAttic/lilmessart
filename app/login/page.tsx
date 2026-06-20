'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [error, setError] = useState('')

  function handleGoogleLogin() {
    // Google OAuth would be handled here via next-auth or similar
    // For now, redirect to a placeholder
    setError('Google authentication is not yet configured. Please check back soon.')
  }

  return (
    <div className="flex min-h-screen">
      {/* Left — Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-[#1a1d2e] p-12 relative overflow-hidden">
        {/* Abstract decorative circles */}
        <div className="absolute -top-40 -right-40 size-80 rounded-full bg-[#845adf]/10" />
        <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-[#845adf]/5" />

        <div>
          <Link href="/" className="flex items-center gap-2">
            <span
              className="font-serif text-2xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              lilmessart
            </span>
          </Link>
        </div>

        <div className="relative">
          <blockquote className="text-white/80 text-lg leading-relaxed italic">
            &ldquo;lilmessart has transformed our home with beautifully crafted pieces.
            Every item feels thoughtful and unique.&rdquo;
          </blockquote>
          <div className="mt-4 flex items-center gap-3">
            <div className="size-10 rounded-full bg-[#845adf]/30 flex items-center justify-center text-white text-sm font-semibold">
              EM
            </div>
            <div>
              <p className="text-white font-medium text-sm">Emma Mitchell</p>
              <p className="text-white/50 text-xs">Loyal Customer</p>
            </div>
          </div>
        </div>

        <p className="text-white/30 text-xs relative">
          &copy; {new Date().getFullYear()} lilmessart. All rights reserved.
        </p>
      </div>

      {/* Right — Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 bg-white">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8">
            <Link href="/">
              <span
                className="font-serif text-2xl font-bold tracking-tight text-[#0f0f0f]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                lilmessart
              </span>
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-[#1a1d2e]">Welcome back</h1>
          <p className="mt-1 text-sm text-[#6b6b6b]">
            Sign in to your account to continue shopping.
          </p>

          <div className="mt-8 space-y-4">
            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Google Auth Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 rounded-md border border-[#e5e5e0] bg-white px-4 py-2.5 text-sm font-medium text-[#1a1d2e] hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#845adf]/30 transition-colors"
            >
              {/* Google SVG Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#e5e5e0]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-[#6b6b6b]">or</span>
              </div>
            </div>

            {/* Admin login link */}
            <Link
              href="/admin/login"
              className="block w-full rounded-md border border-[#e5e5e0] bg-white px-4 py-2.5 text-sm font-medium text-[#1a1d2e] text-center hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#845adf]/30 transition-colors"
            >
              Admin Login
            </Link>
          </div>

          <p className="mt-8 text-center text-xs text-[#6b6b6b]">
            Don&apos;t have an account?{' '}
            <span className="text-[#845adf] font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </p>

          <p className="mt-4 text-center text-xs text-[#6b6b6b] lg:hidden">
            &copy; {new Date().getFullYear()} lilmessart. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
