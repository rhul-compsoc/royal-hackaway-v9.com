// cursed MDX workarounds

import { type MDXContext } from '@/lib/mdx/mdx'

import { type FAQ, faq } from './types'

interface Context {
  title: string
}

const context = require.context('@/content/faq/questions', false, /\.mdx$/) as MDXContext<Context>

const getFAQs = (): FAQ[] => {
  const faqs = context.keys().map((key) => {
    const mod = context(key)

    return {
      ...mod.metadata,
      content: mod.default,
    }
  })

  return faqs.map((data) => faq.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getFAQs }
