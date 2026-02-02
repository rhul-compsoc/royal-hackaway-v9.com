import { ReactElement } from 'react'

import { StatsValue } from './stats-value'

const Stats = (): ReactElement => (
  <div className="w-full lg:grid lg:grid-cols-3 px-5 lg:px-0">
    <StatsValue label="Attendees" value="100+" />
    <StatsValue label="Projects" value="30" />
    <StatsValue label="Hours of Coding" value="24" />
  </div>
)

export { Stats }
