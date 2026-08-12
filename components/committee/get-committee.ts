// cursed MDX workarounds
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type Committee, committee } from './types'

const committeeContext = require.context('@/content/committee/members', false, /\.mdx$/)

const getCommittee = (): Committee[] => {
  const committeeData = committeeContext.keys().map((key) => {
    const mod = committeeContext(key)

    return {
      // @ts-expect-error cursed dynamic content
      ...mod.metadata,
      // @ts-expect-error cursed dynamic content
      content: mod.default,
    }
  })

  return committeeData.map((data) => committee.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getCommittee }
