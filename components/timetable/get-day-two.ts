// cursed MDX workarounds
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type Event } from './types'
import { event } from './types'

const context = require.context('@/content/timetable/day-two', false, /\.mdx$/)

const getDayTwo = (): Event[] => {
  const events = context.keys().map((key) => {
    const mod = context(key)

    return {
      // @ts-expect-error cursed dynamic content
      ...mod.metadata,
      // @ts-expect-error cursed dynamic content
      content: mod.default,
    }
  })

  return events
    .map((data) => event.parse(data))
    .sort((a, b) => a.startTime.replace(/[^\d:]/g, '').localeCompare(b.startTime.replace(/[^\d:]/g, '')))
}

export { getDayTwo }
