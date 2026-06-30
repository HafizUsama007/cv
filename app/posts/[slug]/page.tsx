import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import NewsletterForm from '@/components/newsletter-form'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl, siteConfig } from '@/lib/site'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  const { title, summary, image, author, publishedAt, tags } = post.metadata
  const url = absoluteUrl(`/posts/${params.slug}`)
  // Use the post's own image, else fall back to the branded OG card.
  const ogImage = image ?? siteConfig.ogImage

  return {
    title,
    description: summary,
    keywords: tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description: summary,
      url,
      publishedTime: publishedAt,
      authors: author ? [author] : undefined,
      tags,
      images: [{ url: ogImage, alt: title ?? '' }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogImage]
    }
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, summary, image, author, publishedAt, tags } = metadata
  const url = absoluteUrl(`/posts/${slug}`)

  return (
    <section className='pb-24 pt-32'>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description: summary,
            image: image ? absoluteUrl(image.replace(siteConfig.basePath, '')) : undefined,
            keywords: tags?.join(', '),
            datePublished: publishedAt,
            dateModified: publishedAt,
            author: { '@type': 'Person', name: author ?? siteConfig.fullName },
            url,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
              { '@type': 'ListItem', position: 2, name: 'Posts', item: absoluteUrl('/posts') },
              { '@type': 'ListItem', position: 3, name: title, item: url }
            ]
          }
        ]}
      />
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
  )
}
