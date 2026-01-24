import { ReactElement } from 'react'

import { isNonEmptyArray } from '@/lib/is/is-non-empty-array'

import { TimetableEvent } from './timetable-event'
import { Event } from './types'

interface TimetableTableProps {
  day: string
  events: Event[]
}

const TimetableTable = ({ day, events }: TimetableTableProps): ReactElement => (
  <div className="rounded-lg h-fit border-gray-200 overflow-hidden border">
    <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right font-bold">
        <tr>
          <th colSpan={2} className="whitespace-nowrap px-4 py-2 text-gray-900">
            <strong>
              <u>{day}</u>
            </strong>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {isNonEmptyArray(events)
          ? events.map((event, index) => <TimetableEvent key={index} event={event} />)
          : undefined}
      </tbody>
    </table>
  </div>
)

export type { TimetableTableProps }

export { TimetableTable }
