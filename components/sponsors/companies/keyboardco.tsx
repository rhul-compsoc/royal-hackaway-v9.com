import { type ReactElement } from 'react'

import keyboardCoLogo from '@/public/sponsors/keyboard-co-logo.png'

import { Sponsor } from '../sponsor'

const KeyboardCo = (): ReactElement => (
  <Sponsor alt="Keyboard Co Logo" href="https://www.keyboardco.com/" img={keyboardCoLogo} tier="bronze" />
)

export { KeyboardCo }
