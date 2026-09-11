import { type ReactElement } from 'react'

interface CountdownValueProps {
  label: string
  value: number
}

const CountdownValue = ({ label, value }: CountdownValueProps): ReactElement => (
  <div className="mb-5 text-center lg:mb-0">
    <p className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">{value}</p>
    <p className="text-xl text-white sm:text-2xl md:text-4xl">{label}</p>
  </div>
)

export type { CountdownValueProps }

export { CountdownValue }
