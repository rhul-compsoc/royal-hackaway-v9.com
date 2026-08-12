import { type ReactElement } from 'react'

import { isNonEmptyArray } from '@/lib/is/is-non-empty-array'

import { type ScheduleItemProps } from './schedule-item'
import { ScheduleItem } from './schedule-item'

interface ScheduleProps {
  day: string
  events: ScheduleItemProps[]
}

const Schedule = ({ day, events }: ScheduleProps): ReactElement => {
  return (
    <div className="h-fit overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="font-bold ltr:text-left rtl:text-right">
          <tr>
            <th className="px-4 py-2 whitespace-nowrap text-gray-900" colSpan={2}>
              <strong>
                <u>{day}</u>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {isNonEmptyArray(events) &&
            events.map((event, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ScheduleItem key={index} description={event.description} time={event.time} title={event.title} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export type { ScheduleProps }

export { Schedule }
