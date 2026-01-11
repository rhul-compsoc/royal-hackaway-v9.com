import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { ReactElement } from 'react'

import { Icon } from '../ui/icon'

const DiscordIcon = (): ReactElement => (
  <Icon
    variant="link"
    href="/discord"
    target="_blank"
    className="transition hover:scale-110"
    size="xl"
    icon={faDiscord}
  />
)

export { DiscordIcon }
