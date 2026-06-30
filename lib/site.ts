// Central SEO / site configuration.
// `url` is the canonical production origin INCLUDING the GitHub Pages basePath.
// All absolute URLs used in metadata, sitemap, robots and JSON-LD are built
// from here, so changing the domain is a one-line edit.

export const siteConfig = {
  // Canonical base URL (no trailing slash). Includes the /cv basePath.
  url: 'https://hafizusama007.github.io/cv',
  // Origin only — used as Next.js `metadataBase`.
  origin: 'https://hafizusama007.github.io',
  basePath: '/cv',

  name: 'Usama Bin Qamar',
  fullName: 'Hafiz Syed Usama Bin Qamar',
  jobTitle: 'Full-Stack & AI Engineer',
  // Keep the meta description ~150–160 chars for full display in SERPs.
  description:
    'Full-Stack & AI Engineer with 5+ years building MERN and Next.js apps and production LLM systems — RAG pipelines, LangChain/LangGraph agents, and vector search.',
  // Default Open Graph / Twitter share image — a branded 1200x630 PNG.
  // To regenerate: re-add a Next `opengraph-image.tsx` route, build, then copy
  // `out/opengraph-image` to `public/images/og.png` (a real .png extension is
  // required so GitHub Pages serves it with the correct image/png content-type).
  ogImage: '/cv/images/og.png',
  locale: 'en_US',

  keywords: [
    'Usama Bin Qamar',
    'Full-Stack Engineer',
    'AI Engineer',
    'MERN Stack Developer',
    'Next.js Developer',
    'LLM Engineer',
    'RAG',
    'LangChain',
    'LangGraph',
    'Vector Search',
    'Node.js',
    'React',
    'TypeScript'
  ],

  // Social profiles — fuel JSON-LD `sameAs` and the footer (off-page authority).
  links: {
    github: 'https://github.com/UsamaBinQamar',
    linkedin: 'https://www.linkedin.com/in/usamabinqamar/',
    // TODO: replace with your real X/Twitter profile, then update `twitterHandle`.
    twitter: 'https://x.com/usamabinqamar'
  },
  // @handle used for Twitter card attribution.
  twitterHandle: '@usamabinqamar'
}

/** Build an absolute, canonical URL for a given path (e.g. '/posts'). */
export function absoluteUrl(path = ''): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalized === '/' ? '' : normalized}`
}
