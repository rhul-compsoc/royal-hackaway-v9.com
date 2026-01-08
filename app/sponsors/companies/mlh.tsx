import { ReactElement } from 'react'

import mlhLogo from '@/public/sponsors/mlh-logo.svg'

import { Sponsor } from '../sponsor'

const MLH = (): ReactElement => <Sponsor img={mlhLogo} tier="partner" alt="MLH Logo" href="https://mlh.io/" />

export { MLH }
