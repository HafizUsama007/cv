import type { Metadata } from 'next'

import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Posts',
  description:
    'Articles on full-stack engineering and applied AI — Next.js, the MERN stack, RAG, LLM agents, and production LLM systems.',
  alternates: { canonical: absoluteUrl('/posts') },
  openGraph: {
    title: 'Posts',
    description:
      'Articles on full-stack engineering and applied AI — Next.js, the MERN stack, RAG, LLM agents, and production LLM systems.',
    url: absoluteUrl('/posts'),
    type: 'website',
    images: [siteConfig.ogImage]
  }
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
