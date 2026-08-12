import { type MDXContext } from '@/lib/mdx/mdx'

import { type Event, event } from './types'

interface Context {
  title: string
}

const context = require.context('@/content/timetable/day-one', false, /\.mdx$/) as MDXContext<Context>

const getDayOne = (): Event[] => {
  const events = context.keys().map((key) => {
    const mod = context(key)

    return {
      ...mod.metadata,
      content: mod.default,
    }
  })

  return events
    .map((data) => event.parse(data))
    .sort((a, b) => a.startTime.replace(/[^\d:]/g, '').localeCompare(b.startTime.replace(/[^\d:]/g, '')))
}

export { getDayOne }
