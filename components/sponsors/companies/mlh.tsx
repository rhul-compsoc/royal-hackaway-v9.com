import { type ReactElement } from 'react'

import mlhLogo from '@/public/sponsors/mlh-logo.svg'

import { Sponsor } from '../sponsor'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const MLH = (): ReactElement => <Sponsor alt="MLH Logo" href="https://mlh.io/" img={mlhLogo} tier="partner" />

export { MLH }
