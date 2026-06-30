import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/site'
import { getPosts } from '@/lib/posts'
import { getProjects } from '@/lib/projects'

// Statically generated at build time (output: 'export') → out/sitemap.xml,
// served at https://hafizusama007.github.io/cv/sitemap.xml
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects] = await Promise.all([getPosts(), getProjects()])

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/posts'), changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/projects'), changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/contact'), changeFrequency: 'yearly', priority: 0.5 }
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: absoluteUrl(`/posts/${post.slug}`),
    lastModified: post.publishedAt ? new Date(post.publishedAt) : undefined,
    changeFrequency: 'monthly',
    priority: 0.7
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map(project => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: project.publishedAt
      ? new Date(project.publishedAt)
      : undefined,
    changeFrequency: 'monthly',
    priority: 0.7
  }))

  return [...staticRoutes, ...postRoutes, ...projectRoutes]
}
