import { ReactElement } from 'react'

import { isDefined } from '@/lib/is/is-defined'

import { Event } from './types'

interface TimetableEventProps {
  key?: string | number
  event: Event
}

const TimetableEvent = ({ event, key }: TimetableEventProps): ReactElement => (
  <tr key={key}>
    <td>{event.startTime}</td>
    <td>
      {isDefined(event.content) ? (
        <div>
          <event.content />
        </div>
      ) : undefined}
    </td>
  </tr>
)

export type { TimetableEventProps }

export { TimetableEvent }
