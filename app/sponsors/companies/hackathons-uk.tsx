import { ReactElement } from 'react'

import hackathonsUkLogo from '@/public/sponsors/hackathons-uk-logo.png'

import { Sponsor } from '../sponsor'

const HackathonsUK = (): ReactElement => (
  <Sponsor img={hackathonsUkLogo} tier="partner" alt="Hackathons UK Logo" href="https://www.hackathons.org.uk/" />
)

export { HackathonsUK }
