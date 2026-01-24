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
      className="relative w-full sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-12 flex-col items-center min-h-[50%] justify-between"
      id="schedule"
    >
      <H2 className="text-center mb-12">{metadata.title}</H2>
      {showSchedule === false ? (
        <div className="text-center">
          <H4>Schedule coming soon...</H4>
        </div>
      ) : (
        <div className="overflow-x-auto mb-12 rounded-lg border-gray-200 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto place-content-center">
          <TimetableTable day="January 31st - Day 1" events={dayOne} />
          <TimetableTable day="February 1st - Day 2" events={dayTwo} />
        </div>
      )}
    </div>
  )
}

export { Timetable }
