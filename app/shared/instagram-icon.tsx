import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { ReactElement } from 'react'

import { Icon } from '../components/icon'

const InstagramIcon = (): ReactElement => (
  <Icon
    variant="link"
    href="/instagram"
    target="_blank"
    className="transition hover:scale-110"
    size="xl"
    icon={faInstagram}
  />
)

export { InstagramIcon }
