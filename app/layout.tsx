import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/lib/store-context'
import { getServerProducts, getServerCategories } from '@/lib/server-data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'lilmessart — Crafted for Every Corner',
  description:
    'Bring warmth and charm to your space. Our curated collection of homeware and lifestyle goods. Unique pieces with exceptional quality.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Fetch data server-side for instant initial render (SSR)
  // Client-side Firestore listeners will keep data live for real-time updates
  const [initialProducts, initialCategories] = await Promise.all([
    getServerProducts(),
    getServerCategories(),
  ])

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-white`}>
      <body className="font-sans antialiased">
        <StoreProvider
          initialProducts={initialProducts}
          initialCategories={initialCategories}
        >
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
