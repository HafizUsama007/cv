import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
  title: 'Usama Bin Qamar',
  description: `🚀 Full-Stack & AI Engineer | MERN, Next.js & LLM Apps | 5+ Years of Experience

I specialize in MERN Stack (MongoDB, Express.js, React.js, Node.js), NestJS, Next.js, Firebase, AWS Lambda, and Google Cloud Functions — delivering seamless, scalable, and secure applications. I build production-grade AI systems on top of LLMs using LangChain, LangGraph, and the OpenAI/Anthropic SDKs.

✅ Services:

Full-stack web app development.
AI SaaS & RAG (Retrieval-Augmented Generation) applications.
LLM agents & agentic workflows with LangChain / LangGraph (tool & function calling).
Vector search & semantic retrieval (Pinecone, pgvector, embeddings).
Streaming chatbots with prompt engineering & guardrails.
Model orchestration, fine-tuning & evaluation pipelines.
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
          plusJakartaSans.variable,
          fraunces.variable
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
