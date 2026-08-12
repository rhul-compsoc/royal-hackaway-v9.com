import { ReactElement, ReactNode } from 'react'

interface ScheduleItemProps {
  key?: string | number
  time?: ReactNode
  title: ReactNode
  description?: ReactNode
}

const ScheduleItem = ({ key, time, title, description }: ScheduleItemProps): ReactElement => {
  return (
    <tr key={key}>
      <td className="px-4 py-2 text-center font-medium whitespace-nowrap text-gray-900">{time}</td>
      <td className="px-4 py-2 text-gray-700">
        <div className="whitespace-normal">
          <span className="font-semibold">{title}</span>
          <br />
          <span className="">{description}</span>
        </div>
      </td>
    </tr>
  )
}

export type { ScheduleItemProps }

export { ScheduleItem }
