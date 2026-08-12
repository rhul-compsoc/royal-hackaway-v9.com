import  { type ReactElement } from 'react'

import rhulComputerScienceLogo from '@/public/sponsors/rhul-computer-science-logo.gif'

import { Sponsor } from '../sponsor'

const RHULComputerScience = (): ReactElement => (
  <Sponsor
    alt="Royal Holloway Computer Science Logo"
    href="https://www.rhul.ac.uk/computer-science/"
    img={rhulComputerScienceLogo}
    size="lg"
    tier="gold"
  />
)

export { RHULComputerScience }
