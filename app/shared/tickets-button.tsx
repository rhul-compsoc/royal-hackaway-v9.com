import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../components/button'

const TicketsButton = (): ReactElement => (
  <Link href="/tickets" target="_blank">
    <Button className="hover:cursor-pointer ">Get tickets now!</Button>
  </Link>
)

export { TicketsButton }
