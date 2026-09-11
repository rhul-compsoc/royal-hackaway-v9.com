import { type ReactElement } from 'react'

import hackathonsUkLogo from '@/public/sponsors/hackathons-uk-logo.png'

import { Sponsor } from '../sponsor'

const HackathonsUK = (): ReactElement => (
  <Sponsor alt="Hackathons UK Logo" href="https://www.hackathons.org.uk/" img={hackathonsUkLogo} tier="partner" />
)

export { HackathonsUK }
