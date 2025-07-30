import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ADmyBRAND Insights - Analytics Dashboard',
  description: 'AI-Powered Analytics Dashboard for Digital Marketing Agencies',
  keywords: ['analytics', 'dashboard', 'marketing', 'insights', 'data visualization'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://admybrand-insights.vercel.app',
    title: 'ADmyBRAND Insights',
    description: 'AI-Powered Analytics Dashboard for Digital Marketing Agencies',
    siteName: 'ADmyBRAND Insights',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND Insights',
    description: 'AI-Powered Analytics Dashboard for Digital Marketing Agencies',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}