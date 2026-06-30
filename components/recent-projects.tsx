import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(4)

  return (
    <section className='pb-24'>
      <div>
        <div className='mb-12 flex items-center justify-between'>
          <h2 className='title'>Recent projects</h2>
          <Link
            href='/projects'
            className='group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
          >
            <span>All projects</span>
            <ArrowRightIcon className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
          </Link>
        </div>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
