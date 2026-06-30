import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import authorImage from '@/public/images/authors/usamaweb.jpeg'

const stack = [
  'Next.js',
  'React',
  'Node.js',
  'TypeScript',
  'LangChain',
  'LangGraph',
  'RAG',
  'Vector Search'
]

export default function Intro() {
  return (
    <section className='relative flex flex-col-reverse items-start gap-x-12 gap-y-8 pb-24 md:flex-row md:items-center'>
      <div className='flex-1 animate-fade-up'>
        <span className='inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
          </span>
          Available for new projects
        </span>

        <h1 className='mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl'>
          Hey, I&#39;m Usama.
        </h1>

        <p className='mt-4 max-w-xl text-base font-light leading-relaxed text-muted-foreground'>
          A software &amp; AI engineer building full-stack MERN apps and
          production LLM systems &mdash; RAG pipelines, agentic workflows with
          LangChain &amp; LangGraph, vector search, and tool-calling. I love
          turning frontier AI into reliable products.
        </p>

        <div className='mt-7 flex flex-wrap items-center gap-3'>
          <Link
            href='/projects'
            className='group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5'
          >
            View my work
            <ArrowRightIcon className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
          </Link>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted'
          >
            Get in touch
          </Link>
        </div>

        <div className='mt-8 flex flex-wrap gap-2'>
          {stack.map(item => (
            <span
              key={item}
              className='rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground'
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className='relative animate-fade-up [animation-delay:150ms]'>
        <Image
          className='rounded-2xl border border-border object-cover grayscale transition-all duration-500 hover:grayscale-0'
          src={authorImage}
          alt='Hafiz Syed Usama Bin Qamar'
          width={180}
          height={180}
          priority
        />
      </div>
    </section>
  )
}
