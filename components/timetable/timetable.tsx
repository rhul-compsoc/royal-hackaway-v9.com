import { ReactElement } from 'react'

import { metadata } from '@/content/timetable/index.mdx'

import { H2, H4 } from '../ui/typography'
import { getDayOne } from './get-day-one'
import { getDayTwo } from './get-day-two'
import { TimetableTable } from './timetable-table'

interface TimetableProps {
  showSchedule?: boolean
}

const Timetable = ({ showSchedule = false }: TimetableProps): ReactElement => {
  const dayOne = getDayOne()

  const dayTwo = getDayTwo()

  return (
    <div
      className="relative mx-auto mt-20 mb-12 min-h-[50%] w-full flex-col items-center justify-between sm:w-3/4 md:w-2/3"
      id="schedule"
    >
      <H2 className="mb-12 text-center">{metadata.title}</H2>
      {showSchedule === false ? (
        <div className="text-center">
          <H4>Schedule coming soon...</H4>
        </div>
      ) : (
        <div className="mx-auto mb-12 grid grid-cols-1 place-content-center gap-4 overflow-x-auto rounded-lg border-gray-200 lg:grid-cols-2 lg:gap-8">
          <TimetableTable day="January 31st - Day 1" events={dayOne} />
          <TimetableTable day="February 1st - Day 2" events={dayTwo} />
        </div>
      )}
    </div>
  )
}

export { Timetable }
