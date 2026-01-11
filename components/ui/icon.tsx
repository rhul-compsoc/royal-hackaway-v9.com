import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ReactElement } from 'react'

interface IconBaseProps {
  className?: string
  size?: 'sm' | 'lg' | 'xl'
  icon: IconDefinition
}

interface IconVariantIcon extends IconBaseProps {
  variant?: 'icon'
}

interface IconVariantLink extends IconBaseProps {
  variant: 'link'
  href: string
  target?: string
}

type IconProps = IconVariantIcon | IconVariantLink

const Icon = (props: IconProps): ReactElement => {
  const { className, size = 'lg', icon } = props
  const content = <FontAwesomeIcon className={className} size={size} icon={icon} />

  if (props.variant === 'link') {
    return (
      <Link href={props.href} target={props.target} className="transition hover:opacity-75">
        {content}
      </Link>
    )
  }

  return content
}

export type { IconProps }

export { Icon }
