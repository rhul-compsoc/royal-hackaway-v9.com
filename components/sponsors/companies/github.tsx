import { type ReactElement } from 'react'

import githubLogo from '@/public/sponsors/github-logo.svg'

import { Sponsor } from '../sponsor'

const GitHub = (): ReactElement => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <Sponsor alt="GitHub Logo" href="https://github.com/" img={githubLogo} tier="supporter" />
)

export { GitHub }
