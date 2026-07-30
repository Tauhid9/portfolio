import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Tauhid Hasan Chowdhury | Full-Stack Software Engineer',
  description: 'Full-Stack Developer specializing in Next.js, React, Node.js & Python. Available for hire. Building scalable web applications and APIs.',
  metadataBase: new URL('https://tauhid-portfolio.vercel.app'),
  alternates: {
    canonical: 'https://tauhid-portfolio.vercel.app',
  },
  openGraph: {
    title: 'Tauhid Hasan Chowdhury | Full-Stack Software Engineer',
    description: 'Full-Stack Developer specializing in Next.js, React, Node.js & Python. Available for hire.',
    url: 'https://tauhid-portfolio.vercel.app',
    siteName: 'Tauhid Hasan Chowdhury',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tauhid-VHHD493h1OfKcG0Gx2B7VzyvmOjBAa.jpg',
        width: 1200,
        height: 630,
        alt: 'Tauhid Hasan Chowdhury',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tauhid Hasan Chowdhury | Full-Stack Software Engineer',
    description: 'Full-Stack Developer specializing in Next.js, React, Node.js & Python.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tauhid-VHHD493h1OfKcG0Gx2B7VzyvmOjBAa.jpg'],
    creator: '@tauhid_hasan',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
