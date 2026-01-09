import { ReactNode } from 'react'

interface SponsorGroupProps {
  children?: ReactNode
}

const SponsorGroup = ({ children }: SponsorGroupProps) => (
  <div className="flex flex-col items-center text-center">{children}</div>
)

export type { SponsorGroupProps }

export { SponsorGroup }
