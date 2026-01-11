import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../ui/button'
import { H2 } from '../ui/typography'
import { HackathonsUK } from './companies/hackathons-uk'
import { KeyboardCo } from './companies/keyboardco'
import { MLH } from './companies/mlh'
import { PureButtons } from './companies/pure-buttons'
import { RHULComputerScience } from './companies/rhul-computer-science'
import { SponsorGrid } from './sponsor-grid'
import { SponsorGroup } from './sponsor-group'
import { SponsorTitle } from './sponsor-title'

export const Sponsors = (): ReactElement => {
  return (
    <div className="mb-10" id="sponsors">
      <H2 className="text-center mb-4">Meet our Sponsors!</H2>
      <div className="w-full mb-4">
        <div className="mx-auto w-fit">
          <Link href="mailto:computing@royalholloway.su" target="_blank">
            <Button className="hover:cursor-pointer">Want to sponsor us?</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <SponsorGroup>
          <SponsorTitle>Platinum</SponsorTitle>
          <SponsorGrid />
        </SponsorGroup>
        <SponsorGroup>
          <SponsorTitle>Gold</SponsorTitle>
          <SponsorGrid>
            <RHULComputerScience />
          </SponsorGrid>
        </SponsorGroup>
        <SponsorGroup>
          <SponsorTitle>Silver</SponsorTitle>
          <SponsorGrid />
        </SponsorGroup>
        <SponsorGroup>
          <SponsorTitle>Bronze</SponsorTitle>
          <SponsorGrid />
        </SponsorGroup>
        <SponsorGroup>
          <SponsorTitle>Supporter</SponsorTitle>
          <SponsorGrid>
            <KeyboardCo />
            <PureButtons />
          </SponsorGrid>
        </SponsorGroup>
        <SponsorGroup>
          <SponsorTitle>Partner</SponsorTitle>
          <SponsorGrid>
            <HackathonsUK />
            <MLH />
          </SponsorGrid>
        </SponsorGroup>
      </div>
    </div>
  )
}
