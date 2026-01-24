import { ComponentType } from 'react'

import { Event, event } from './types'

const context = require.context('@/content/timetable/day-two', false, /\.mdx$/)

const getDayTwo = (): Event[] => {
  const events = context.keys().map((key) => {
    const mod = context(key) as unknown as {
      metadata: Omit<Event, 'content'>
      default?: ComponentType
    }

    return {
      ...mod.metadata,
      content: mod.default,
    }
  })

  return events.map((data) => event.parse(data)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export { getDayTwo }
