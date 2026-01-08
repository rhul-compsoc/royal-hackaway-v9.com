import { ReactElement } from 'react'

import githubLogo from '@/public/sponsors/github-logo.svg'

import { Sponsor } from '../sponsor'

const GitHub = (): ReactElement => (
  <Sponsor img={githubLogo} tier="supporter" alt="GitHub Logo" href="https://github.com/" />
)

export { GitHub }
