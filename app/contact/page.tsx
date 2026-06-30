import type { Metadata } from 'next'

import ContactForm from '@/components/contact-form'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Usama Bin Qamar to discuss full-stack web development and AI engineering projects — MERN, Next.js, RAG, and LLM apps.',
  alternates: { canonical: absoluteUrl('/contact') },
  openGraph: {
    title: 'Contact',
    description:
      'Get in touch with Usama Bin Qamar to discuss full-stack web development and AI engineering projects — MERN, Next.js, RAG, and LLM apps.',
    url: absoluteUrl('/contact'),
    type: 'website',
    images: [siteConfig.ogImage]
  }
}

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title'>Let&apos;s talk about your project</h1>

        <ContactForm />
      </div>
    </section>
  )
}
