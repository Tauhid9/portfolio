import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Full-Stack Developer building production-ready web applications with Next.js, React, Node.js, Python, and modern backend integrations.',
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  applicationName: siteConfig.name,
  keywords: [
    'Tauhid Hasan Chowdhury',
    'Full-Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'Python Developer',
    'Portfolio',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      'Portfolio of a Full-Stack Developer focused on production web applications, admin systems, dashboards, and modern frontend/backend delivery.',
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
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      'Production-focused Full-Stack Developer working with Next.js, React, Node.js, Python, and modern web platforms.',
    images: [siteConfig.profileImage],
  },
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
