import { ReactElement } from 'react'

import { isDefined } from '@/lib/is/is-defined'

import { Event } from './types'

interface TimetableEventProps {
  key?: string | number
  event: Event
}

const TimetableEvent = ({ event, key }: TimetableEventProps): ReactElement => (
  <div key={key} className="flex items-stretch gap-4 px-6 py-4 transition-colors duration-200 hover:bg-primary/5">
    <span className="font-bold text-primary whitespace-nowrap min-w-18 flex items-center justify-center">{event.startTime}</span>
    <div className="w-px bg-neutral-light/50" />
    <div className="text-text flex items-center">{isDefined(event.content) ? <event.content /> : undefined}</div>
  </div>
)

export type { TimetableEventProps }

export { TimetableEvent }
