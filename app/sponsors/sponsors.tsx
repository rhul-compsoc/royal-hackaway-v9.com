import Link from 'next/link'
import { ReactElement } from 'react'

import hackathonsUkLogo from '@/public/sponsors/hackathons-uk-logo.png'
import keyboardCoLogo from '@/public/sponsors/keyboard-co-logo.png'
import rhulComputerScienceLogo from '@/public/sponsors/rhul-computer-science-logo.gif'

import { Button } from '../components/button'
import { H2, H3, H4 } from '../components/typography'
import { Sponsor } from './sponsor'

export const Sponsors = (): ReactElement => {
  return (
    <div className="mb-10" id="sponsors">
      <H2 className="text-center mb-4">Meet our Sponsors!</H2>
      <div className="w-full mb-4">
        <div className="mx-auto w-fit">
          <Button>
            <Link href="mailto:computing@royalholloway.su" target="_blank">
              Want to sponsor us?
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col items-center text-center">
          <H3>Platinum</H3>
          <H4>Nothing yet, could you be the first?</H4>
        </div>
        <div className="flex flex-col items-center text-center">
          <H3>Gold</H3>
          <Sponsor
            img={rhulComputerScienceLogo}
            alt="Royal Holloway Computer Science Logo"
            href="https://www.rhul.ac.uk/computer-science/"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <H3>Silver</H3>
          <H4>Nothing yet, could you be the first?</H4>
        </div>
        <div className="flex flex-col items-center text-center">
          <H3>Bronze</H3>
          <H4>Nothing yet, could you be the first?</H4>
        </div>
        <div className="flex flex-col items-center text-center">
          <H3>Supporter</H3>
          <Sponsor img={keyboardCoLogo} alt="Keyboard Co Logo" href="https://www.keyboardco.com/" />
        </div>
        <div className="flex flex-col items-center text-center">
          <H3>Partner</H3>
          <Sponsor img={hackathonsUkLogo} alt="Hackathons UK Logo" href="https://www.hackathons.org.uk/" />
        </div>
      </div>
    </div>
  )
}
