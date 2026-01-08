import Link from 'next/link'
import { ReactElement } from 'react'

import githubLogo from '@/public/sponsors/github-logo.svg'
import hackathonsUkLogo from '@/public/sponsors/hackathons-uk-logo.png'
import keyboardCoLogo from '@/public/sponsors/keyboard-co-logo.png'
import mlhLogo from '@/public/sponsors/mlh-logo.svg'
import pureButtonsLogo from '@/public/sponsors/pure-buttons-logo.svg'
import rhulComputerScienceLogo from '@/public/sponsors/rhul-computer-science-logo.gif'

import { Button } from '../components/button'
import { H2 } from '../components/typography'
import { Sponsor } from './sponsor'
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
            <Sponsor
              img={rhulComputerScienceLogo}
              tier="gold"
              alt="Royal Holloway Computer Science Logo"
              href="https://www.rhul.ac.uk/computer-science/"
            />
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
            <Sponsor img={keyboardCoLogo} tier="supporter" alt="Keyboard Co Logo" href="https://www.keyboardco.com/" />
            <Sponsor img={githubLogo} tier="supporter" alt="GitHub Logo" href="https://github.com/" />
            <Sponsor img={pureButtonsLogo} tier="supporter" alt="Pure Buttons Logo" href="https://purebuttons.com/" />
          </SponsorGroup>
        </div>
        <div className="flex flex-col items-center text-center">
          <SponsorTitle>Partner</SponsorTitle>
          <SponsorGroup>
            <Sponsor
              img={hackathonsUkLogo}
              tier="partner"
              alt="Hackathons UK Logo"
              href="https://www.hackathons.org.uk/"
            />
            <Sponsor img={mlhLogo} tier="partner" alt="MLH Logo" href="https://mlh.io/" />
          </SponsorGroup>
        </div>
      </div>
    </div>
  )
}
