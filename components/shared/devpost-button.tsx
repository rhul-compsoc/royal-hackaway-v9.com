import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../ui/button'

const DevpostButton = (): ReactElement => (
  <Link href="https://royalhackaway-v8.devpost.com/project-gallery" target="_blank">
    <Button className="hover:cursor-pointer ">Check out last years projects on Devpost!</Button>
  </Link>
)

export { DevpostButton }
