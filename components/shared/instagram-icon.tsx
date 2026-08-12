import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { type ReactElement } from 'react'

import { Icon } from '../ui/icon'

const InstagramIcon = (): ReactElement => (
  <Icon
    className="transition hover:scale-110"
    href="/instagram"
    icon={faInstagram}
    size="xl"
    target="_blank"
    variant="link"
  />
)

export { InstagramIcon }
