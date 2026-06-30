import type { Metadata } from 'next'

import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected full-stack and AI engineering projects — real-world web apps, SaaS platforms, and LLM-powered products built with Next.js, React, and Node.js.',
  alternates: { canonical: absoluteUrl('/projects') },
  openGraph: {
    title: 'Projects',
    description:
      'Selected full-stack and AI engineering projects — real-world web apps, SaaS platforms, and LLM-powered products built with Next.js, React, and Node.js.',
    url: absoluteUrl('/projects'),
    type: 'website',
    images: [siteConfig.ogImage]
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}
