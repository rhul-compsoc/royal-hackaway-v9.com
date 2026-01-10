import fs from 'fs'
import path from 'path'

import { type FAQ, faq } from './types'

const getFAQs = async (): Promise<FAQ[]> => {
  const faqDirectory = path.join(process.cwd(), 'content/faq')

  const slugs = fs.readdirSync(faqDirectory).filter((file) => file.endsWith('.mdx'))

  const faqs = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/content/faq/${slug}`)

      return {
        ...mod.metadata,
        content: mod.default,
      }
    }),
  )

  return faqs.map((data) => faq.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getFAQs }
