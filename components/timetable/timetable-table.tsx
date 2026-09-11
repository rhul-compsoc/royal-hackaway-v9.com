import { type ReactElement } from 'react'

import { isNonEmptyArray } from '@/lib/is/is-non-empty-array'

import { H4 } from '../ui/typography'
import { TimetableEvent } from './timetable-event'
import { type Event } from './types'

interface TimetableTableProps {
  day: string
  events: Event[]
}

const TimetableTable = ({ day, events }: TimetableTableProps): ReactElement => (
  <div className="h-fit overflow-hidden rounded-2xl transition-shadow duration-300">
    <div className="bg-primary px-6 py-4">
      <H4 className="text-center font-bold text-white">{day}</H4>
    </div>
    <div className="divide-neutral-light/50 border-neutral-light/50 divide-y rounded-b-2xl border border-t-0">
      {isNonEmptyArray(events)
        ? // eslint-disable-next-line react/no-array-index-key
          events.map((event, index) => <TimetableEvent key={index} event={event} />)
        : undefined}
    </div>
  </div>
)

export type { TimetableTableProps }

export { TimetableTable }
