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
      <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">{time}</td>
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
