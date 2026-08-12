import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { siteConfig, contact } from '@/lib/site'

/** Body copy. Variable font — no explicit weights needed. */
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

/** Serif accent used for the highlighted phrase inside headings. */
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

/** Eyebrow labels and index numerals. */
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const description =
  "Full-stack product developer building production web applications, SaaS platforms, dashboards and internal tools with Next.js, React, Node.js and Python. From first product flow to production deployment."

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: { canonical: siteConfig.siteUrl },
  applicationName: siteConfig.name,
  keywords: [
    'Tauhid Hasan Chowdhury',
    'Full-Stack Product Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'Python Developer',
    'MVP Development',
    'SaaS Development',
    'Dashboard Development',
    'Internal Tools',
    'Dhaka Bangladesh Developer',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: 'en_US',
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
    description,
    images: [siteConfig.profileImage],
  },
  icons: {
    icon: [
      { url: siteConfig.icon32, sizes: '32x32', type: 'image/png' },
      { url: siteConfig.icon64, sizes: '64x64', type: 'image/png' },
    ],
    shortcut: siteConfig.icon32,
    apple: siteConfig.icon180,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf8' },
    { media: '(prefers-color-scheme: dark)', color: '#07070a' },
  ],
  colorScheme: 'light dark',
}

/**
 * Light is the designed default, so we only opt into dark when the visitor has
 * explicitly chosen it — system preference alone does not flip the theme.
 */
const themeScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.profileImage}`,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  sameAs: [contact.github, contact.linkedin],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'FastAPI',
    'Microsoft SQL Server',
    'Firebase',
    'Full-Stack Product Development',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${geistMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main"
          data-scroll="instant"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
