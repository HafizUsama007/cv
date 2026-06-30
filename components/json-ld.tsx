/**
 * Renders one or more JSON-LD structured-data blocks.
 * Search engines read these <script type="application/ld+json"> tags to build
 * rich results (Person knowledge panel, Article rich snippets, breadcrumbs).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const blocks = Array.isArray(data) ? data : [data]

  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type='application/ld+json'
          // Schema content is static and built server-side, so this is safe.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
