import { ReactElement } from 'react'

import pureButtonsLogo from '@/public/sponsors/pure-buttons-logo.svg'

import { Sponsor } from '../sponsor'

const PureButtons = (): ReactElement => (
  <Sponsor img={pureButtonsLogo} tier="supporter" alt="Pure Buttons Logo" href="https://purebuttons.com/" />
)

export { PureButtons }
