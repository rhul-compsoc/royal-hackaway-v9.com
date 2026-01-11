import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../ui/button'

const TicketsButton = (): ReactElement => (
  <Link href="/tickets" target="_blank">
    <Button className="hover:cursor-pointer ">Get tickets now!</Button>
  </Link>
)

export { TicketsButton }
