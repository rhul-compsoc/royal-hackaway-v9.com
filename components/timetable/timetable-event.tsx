import { ReactElement } from 'react'

import { isDefined } from '@/lib/is/is-defined'

import { Event } from './types'

interface TimetableEventProps {
  key?: string | number
  event: Event
}

const TimetableEvent = ({ event, key }: TimetableEventProps): ReactElement => (
  <div key={key} className="hover:bg-primary/5 flex items-stretch gap-4 px-6 py-4 transition-colors duration-200">
    <span className="text-primary flex min-w-18 items-center justify-center font-bold whitespace-nowrap">
      {event.startTime}
    </span>
    <div className="bg-neutral-light/50 w-px" />
    <div className="text-text flex items-center">{isDefined(event.content) ? <event.content /> : undefined}</div>
  </div>
)

export type { TimetableEventProps }

export { TimetableEvent }
