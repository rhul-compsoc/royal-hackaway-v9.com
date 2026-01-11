import { ComponentType } from 'react'

import { type Committee, committee } from './types'

// Webpack's require.context runs at BUILD TIME, not runtime
// This bundles all .mdx files from the directory into the output
const committeeContext = require.context('@/content/committee', false, /\.mdx$/)

const getCommittee = (): Committee[] => {
  const committeeData = committeeContext.keys().map((key) => {
    const mod = committeeContext(key) as unknown as {
      metadata: Omit<Committee, 'content'>
      default?: ComponentType
    }
    return {
      ...mod.metadata,
      content: mod.default,
    }
  })

  return committeeData.map((data) => committee.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getCommittee }
