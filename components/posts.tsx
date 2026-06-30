import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-2'>
      {posts.map(post => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className='group flex flex-col justify-between gap-x-4 gap-y-1 rounded-xl border border-transparent p-4 transition-colors hover:border-border hover:bg-muted/40 sm:flex-row'
          >
            <div className='max-w-lg'>
              <p className='text-lg font-semibold transition-colors group-hover:text-foreground'>
                {post.title}
              </p>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {post.summary}
              </p>
            </div>

            {post.publishedAt && (
              <p className='mt-1 shrink-0 text-sm font-light text-muted-foreground'>
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
