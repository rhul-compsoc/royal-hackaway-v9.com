interface CountdownValueProps {
  label: string
  value: number
}

const CountdownValue = ({ label, value }: CountdownValueProps) => (
  <div className="text-center mb-5 lg:mb-0">
    <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold">{value}</p>
    <p className="text-xl sm:text-2xl md:text-4xl text-white">{label}</p>
  </div>
)

export type { CountdownValueProps }

export { CountdownValue }
