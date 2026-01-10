import fs from 'fs'
import path from 'path'

import { type Committee, committee } from './types'

const getCommittee = async (): Promise<Committee[]> => {
  const committeeDirectory = path.join(process.cwd(), 'content/committee')

  const slugs = fs.readdirSync(committeeDirectory).filter((file) => file.endsWith('.mdx'))

  const committeeData = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/content/committee/${slug}`)

      return {
        ...mod.metadata,
        content: mod.default,
      }
    }),
  )

  return committeeData.map((data) => committee.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getCommittee }
