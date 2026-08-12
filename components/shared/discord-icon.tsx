import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import  { type ReactElement } from 'react'

import { Icon } from '../ui/icon'

const DiscordIcon = (): ReactElement => (
  <Icon
    className="transition hover:scale-110"
    href="/discord"
    icon={faDiscord}
    size="xl"
    target="_blank"
    variant="link"
  />
)

export { DiscordIcon }
