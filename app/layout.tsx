import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Usama Bin Qamar',
  description: `🚀 MERN Stack & Cloud Solutions Expert | 3+ Years of Experience

I specialize in MERN Stack (MongoDB, Express.js, React.js, Node.js), NestJS, Firebase, AWS Lambda, and Google Cloud Functions, delivering seamless, scalable, and secure applications.

✅ Services:

Full-stack web app development.
AI SaaS applications & intelligent chatbot.
Secure payment integrations (Stripe & Stripe Connect).
Cloud solutions with S3 & presigned URLs.
Stunning UI/UX with MUI, Tailwind, shadcn.`
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
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
