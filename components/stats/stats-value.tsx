import { type ReactElement } from 'react'

interface StatsValueProps {
  label: string
  value: string
}

const StatsValue = ({ label, value }: StatsValueProps): ReactElement => (
  <div className="mb-5 text-center lg:mb-0">
    <p className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">{value}</p>
    <p className="text-xl text-white sm:text-2xl md:text-4xl">{label}</p>
  </div>
)

export type { StatsValueProps }

export { StatsValue }
