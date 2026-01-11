import { ReactElement } from 'react'

import keyboardCoLogo from '@/public/sponsors/keyboard-co-logo.png'

import { Sponsor } from '../sponsor'

const KeyboardCo = (): ReactElement => (
  <Sponsor img={keyboardCoLogo} tier="supporter" alt="Keyboard Co Logo" href="https://www.keyboardco.com/" />
)

export { KeyboardCo }
