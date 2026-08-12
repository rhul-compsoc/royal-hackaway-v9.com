import  { type ReactElement } from 'react'

import { StatsValue } from './stats-value'

const Stats = (): ReactElement => (
  <div className="w-full px-5 lg:grid lg:grid-cols-3 lg:px-0">
    <StatsValue label="Attendees" value="100+" />
    <StatsValue label="Projects" value="30" />
    <StatsValue label="Hours of Coding" value="24" />
  </div>
)

export { Stats }
