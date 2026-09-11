import { type MDXContext } from '@/lib/mdx/mdx'

import { type Committee, committee } from './types'

interface Context {
  title: string
}

const context = require.context('@/content/committee/members', false, /\.mdx$/) as MDXContext<Context>

const getCommittee = (): Committee[] => {
  const committeeData = context.keys().map((key) => {
    const mod = context(key)

    return {
      ...mod.metadata,
      content: mod.default,
    }
  })

  return committeeData.map((data) => committee.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getCommittee }
