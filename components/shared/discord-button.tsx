import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import  { type ReactElement } from 'react'

import { Button } from '../ui/button'

const DiscordButton = (): ReactElement => (
  <Link href="/discord" target="_blank">
    <Button className="hover:cursor-pointer" size="lg" variant="discord">
      <FontAwesomeIcon className="mr-2" icon={faDiscord} />
      Join our Discord!
    </Button>
  </Link>
)

export { DiscordButton }
