import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} | Full-Stack Software Engineer`,
  description: 'Full-Stack Developer specializing in Next.js, React, Node.js & Python. Available for hire. Building scalable web applications and APIs.',
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} | Full-Stack Software Engineer`,
    description: 'Full-Stack Developer specializing in Next.js, React, Node.js & Python. Available for hire.',
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: siteConfig.profileImage,
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Full-Stack Software Engineer`,
    description: 'Full-Stack Developer specializing in Next.js, React, Node.js & Python.',
    images: [siteConfig.profileImage],
    creator: '@tauhid_hasan',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: siteConfig.icon32,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: siteConfig.icon64,
        sizes: '64x64',
        type: 'image/png',
      },
    ],
    shortcut: siteConfig.icon32,
    apple: siteConfig.icon180,
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
