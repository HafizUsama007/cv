import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'

import { cn } from '@/lib/utils'
import { siteConfig, absoluteUrl } from '@/lib/site'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { JsonLd } from '@/components/json-ld'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})
const fraunces = Fraunces({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: {
    default: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  applicationName: siteConfig.name,
  alternates: {
    canonical: absoluteUrl('/')
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: absoluteUrl('/'),
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.jobTitle}`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/cv/favicon.ico',
    shortcut: '/cv/favicon.ico'
  },
  verification: {
    google: 'hMkjshBM8K7D52gU8SYcW5KCb3mSLyooiHTtAyrwj60'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          plusJakartaSans.variable,
          fraunces.variable
        )}
      >
        <JsonLd
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: siteConfig.fullName,
              alternateName: siteConfig.name,
              url: siteConfig.url,
              image: absoluteUrl('/images/authors/usamaweb.jpeg'),
              jobTitle: siteConfig.jobTitle,
              description: siteConfig.description,
              knowsAbout: siteConfig.keywords,
              sameAs: [
                siteConfig.links.github,
                siteConfig.links.linkedin,
                siteConfig.links.twitter
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteConfig.name,
              url: siteConfig.url,
              inLanguage: 'en'
            }
          ]}
        />
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
