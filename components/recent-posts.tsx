import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-24'>
      <div>
        <div className='mb-12 flex items-center justify-between'>
          <h2 className='title'>Recent posts</h2>
          <Link
            href='/posts'
            className='group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
          >
            <span>All posts</span>
            <ArrowRightIcon className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
          </Link>
        </div>
        <Posts posts={posts} />
      </div>
    </section>
  )
}
