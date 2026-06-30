import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <section className='relative overflow-hidden pb-24 pt-40'>
      {/* Decorative aurora background */}
      <div className='pointer-events-none absolute inset-0 -z-10' aria-hidden>
        <div className='absolute -top-24 left-1/4 h-72 w-72 animate-aurora rounded-full bg-violet-500/20 blur-3xl' />
        <div className='absolute right-1/4 top-10 h-72 w-72 animate-aurora rounded-full bg-sky-500/20 blur-3xl [animation-delay:4s]' />
        <div className='absolute left-1/3 top-40 h-72 w-72 animate-aurora rounded-full bg-fuchsia-500/10 blur-3xl [animation-delay:8s]' />
      </div>

      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
        <RecentProjects />

        {/* <NewsletterForm /> */}
      </div>
    </section>
  )
}
