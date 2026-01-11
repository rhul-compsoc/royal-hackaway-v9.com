import { ReactElement } from 'react'

import rhulComputerScienceLogo from '@/public/sponsors/rhul-computer-science-logo.gif'

import { Sponsor } from '../sponsor'

const RHULComputerScience = (): ReactElement => (
  <Sponsor
    img={rhulComputerScienceLogo}
    tier="gold"
    alt="Royal Holloway Computer Science Logo"
    href="https://www.rhul.ac.uk/computer-science/"
    size="lg"
  />
)

export { RHULComputerScience }
