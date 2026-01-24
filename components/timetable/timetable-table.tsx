import { ReactElement } from 'react'

import { isNonEmptyArray } from '@/lib/is/is-non-empty-array'

import { H4 } from '../ui/typography'
import { TimetableEvent } from './timetable-event'
import { Event } from './types'

interface TimetableTableProps {
  day: string
  events: Event[]
}

const TimetableTable = ({ day, events }: TimetableTableProps): ReactElement => (
  <div className="rounded-2xl h-fit overflow-hidden transition-shadow duration-300">
    <div className="bg-primary px-6 py-4">
      <H4 className="text-white font-bold text-center">{day}</H4>
    </div>
    <div className="divide-y divide-neutral-light/50 border border-t-0 border-neutral-light/50 rounded-b-2xl">
      {isNonEmptyArray(events) ? events.map((event, index) => <TimetableEvent key={index} event={event} />) : undefined}
    </div>
  </div>
)

export type { TimetableTableProps }

export { TimetableTable }
