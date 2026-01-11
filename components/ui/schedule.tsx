import { ReactElement } from 'react'

import { isNonEmptyArray } from '@/lib/is/is-non-empty-array'

import { ScheduleItem, ScheduleItemProps } from './schedule-item'

interface ScheduleProps {
  day: string
  events: ScheduleItemProps[]
}

const Schedule = ({ day, events }: ScheduleProps): ReactElement => {
  return (
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
          {isNonEmptyArray(events) &&
            events.map((event, index) => (
              <ScheduleItem key={index} time={event.time} title={event.title} description={event.description} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export type { ScheduleProps }

export { Schedule }
