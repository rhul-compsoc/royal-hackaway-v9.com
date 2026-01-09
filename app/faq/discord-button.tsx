import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../components/button'

const DiscordButton = (): ReactElement => (
  <Link href="https://discord.gg/XptvsDZwXc" target="_blank">
    <Button className="hover:cursor-pointer" variant="discord" size="lg">
      <FontAwesomeIcon icon={faDiscord} className="mr-2" />
      Join our Discord!
    </Button>
  </Link>
)

export { DiscordButton }
