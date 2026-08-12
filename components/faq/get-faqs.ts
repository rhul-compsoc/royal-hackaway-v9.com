// cursed MDX workarounds
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type FAQ, faq } from './types'

const context = require.context('@/content/faq/questions', false, /\.mdx$/)

const getFAQs = (): FAQ[] => {
  const faqs = context.keys().map((key) => {
    const mod = context(key)

    return {
      // @ts-expect-error cursed dynamic content
      ...mod.metadata,
      // @ts-expect-error cursed dynamic content
      content: mod.default,
    }
  })

  return faqs.map((data) => faq.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getFAQs }
