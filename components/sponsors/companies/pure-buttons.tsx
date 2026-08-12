import { type ReactElement } from 'react'

import pureButtonsLogo from '@/public/sponsors/pure-buttons-logo.svg'

import { Sponsor } from '../sponsor'

const PureButtons = (): ReactElement => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <Sponsor alt="Pure Buttons Logo" href="https://purebuttons.com/" img={pureButtonsLogo} tier="supporter" />
)

export { PureButtons }
