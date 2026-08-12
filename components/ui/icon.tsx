import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { type ReactElement } from 'react'

interface IconBaseProps {
  className?: string
  icon: IconDefinition
  size?: 'lg' | 'sm' | 'xl'
}

interface IconVariantIcon extends IconBaseProps {
  variant?: 'icon'
}

interface IconVariantLink extends IconBaseProps {
  href: string
  target?: string
  variant: 'link'
}

type IconProps = IconVariantIcon | IconVariantLink

const Icon = (props: IconProps): ReactElement => {
  const { className, icon, size = 'lg', variant } = props

  const content = <FontAwesomeIcon className={className} icon={icon} size={size} />

  if (variant === 'link') {
    const { href, target } = props

    return (
      <Link className="transition hover:opacity-75" href={href} target={target}>
        {content}
      </Link>
    )
  }

  return content
}

export type { IconProps }

export { Icon }
