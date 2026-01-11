import { ReactNode } from 'react'

import { H3 } from '../ui/typography'

interface SponsorTitleProps {
  children?: ReactNode
}

const SponsorTitle = ({ children }: SponsorTitleProps) => <H3>{children}</H3>

export type { SponsorTitleProps }

export { SponsorTitle }
