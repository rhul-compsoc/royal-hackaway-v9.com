import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import { cn } from '../utils/cn'
import { isDefined } from '../utils/is-defined'

interface SponsorProps {
  img: StaticImageData
  alt: string
  href: string
  className?: string
  tier?: 'partner' | 'supporter' | 'silver' | 'bronze' | 'gold' | 'platinum'
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses: Record<NonNullable<SponsorProps['size']>, string> = {
  sm: 'h-16',
  md: 'h-24',
  lg: 'h-32',
}

const tierGradients: Record<NonNullable<SponsorProps['tier']>, string> = {
  platinum: 'from-teal-300 via-teal-500 to-teal-300',
  gold: 'from-yellow-400 via-yellow-600 to-yellow-400',
  silver: 'from-slate-200 via-slate-400 to-slate-200',
  bronze: 'from-amber-900 via-amber-700 to-amber-500',
  supporter: 'from-purple-400 via-purple-600 to-purple-400',
  partner: 'from-blue-400 via-orange-600 to-orange-400',
}

const Sponsor = ({ img, alt, href, className, tier, size = 'md' }: SponsorProps): ReactElement => {
  const content = (
    <Link href={href} target="_blank" className="block rounded-lg bg-white px-3 py-2">
      <Image alt={alt} src={img} className={cn('w-auto object-contain', sizeClasses[size])} />
    </Link>
  )

  return (
    <div className={cn('inline-block', className)}>
      {isDefined(tier) ? (
        <div className={cn('bg-linear-to-r p-2 rounded-xl shadow-2xl', tierGradients[tier])}>{content}</div>
      ) : (
        content
      )}
    </div>
  )
}

export { Sponsor }
