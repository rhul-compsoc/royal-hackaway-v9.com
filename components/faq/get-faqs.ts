import { ComponentType } from 'react'

import { type FAQ, faq } from './types'

const context = require.context('@/content/faq/questions', false, /\.mdx$/)

const getFAQs = (): FAQ[] => {
  const faqs = context.keys().map((key) => {
    const mod = context(key) as unknown as {
      metadata: Omit<FAQ, 'content'>
      default?: ComponentType
    }

    return {
      ...mod.metadata,
      content: mod.default,
    }
  })

  return faqs.map((data) => faq.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getFAQs }
