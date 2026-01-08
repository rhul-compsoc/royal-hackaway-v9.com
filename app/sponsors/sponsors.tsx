import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../components/button'
import { H2 } from '../components/typography'
import { HackathonsUK } from './companies/hackathons-uk'
import { KeyboardCo } from './companies/keyboardco'
import { MLH } from './companies/mlh'
import { PureButtons } from './companies/pure-buttons'
import { RHULComputerScience } from './companies/rhul-computer-science'
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
        <div className="flex flex-col items-center text-center">
          <SponsorTitle>Platinum</SponsorTitle>
          <SponsorGroup />
        </div>
        <div className="flex flex-col items-center text-center">
          <SponsorTitle>Gold</SponsorTitle>
          <SponsorGroup>
            <RHULComputerScience />
          </SponsorGroup>
        </div>
        <div className="flex flex-col items-center text-center">
          <SponsorTitle>Silver</SponsorTitle>
          <SponsorGroup />
        </div>
        <div className="flex flex-col items-center text-center">
          <SponsorTitle>Bronze</SponsorTitle>
          <SponsorGroup />
        </div>
        <div className="flex flex-col items-center text-center">
          <SponsorTitle>Supporter</SponsorTitle>
          <SponsorGroup>
            <KeyboardCo />
            <PureButtons />
          </SponsorGroup>
        </div>
        <div className="flex flex-col items-center text-center">
          <SponsorTitle>Partner</SponsorTitle>
          <SponsorGroup>
            <HackathonsUK />
            <MLH />
          </SponsorGroup>
        </div>
      </div>
    </div>
  )
}
