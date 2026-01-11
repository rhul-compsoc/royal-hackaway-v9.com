import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../ui/button'

const DevpostButton = (): ReactElement => (
  <Link href="/devpost" target="_blank">
    <Button className="hover:cursor-pointer ">Check out the Devpost!</Button>
  </Link>
)

export { DevpostButton }
