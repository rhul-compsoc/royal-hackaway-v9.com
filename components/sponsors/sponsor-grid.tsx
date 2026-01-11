import { ReactElement, ReactNode } from 'react'

import { isDefined } from '@/lib/is/is-defined'

import { H4 } from '../ui/typography'

interface SponsorGridProps {
  children?: ReactNode
}

const SponsorGrid = ({ children }: SponsorGridProps): ReactElement => (
  <div className="flex flex-row gap-x-8 mt-4">
    {isDefined(children) ? children : <H4>Nothing yet, could you be the first?</H4>}
  </div>
)

export type { SponsorGridProps }

export { SponsorGrid }
