import Image from 'next/image'
import { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { type ReactElement } from 'react'

import { isDefined } from '@/lib/is/is-defined'
import { cn } from '@/lib/utils/cn'

interface SponsorProps {
  alt: string
  className?: string
  href: string
  img: StaticImageData
  size?: 'lg' | 'md' | 'sm'
  tier?: 'bronze' | 'gold' | 'partner' | 'platinum' | 'silver' | 'supporter'
}

const sizeClasses: Record<NonNullable<SponsorProps['size']>, string> = {
  lg: 'h-32',
  md: 'h-24',
  sm: 'h-16',
}

const tierGradients: Record<NonNullable<SponsorProps['tier']>, string> = {
  bronze: 'bg-linear-to-r from-amber-900 via-amber-700 to-amber-500',
  gold: 'bg-linear-to-r from-yellow-400 via-yellow-600 to-yellow-400',
  partner: 'bg-linear-60 from-blue-400 via-orange-600 to-blue-400',
  platinum: 'bg-linear-to-r from-teal-300 via-teal-500 to-teal-300',
  silver: 'bg-linear-to-r from-slate-200 via-slate-400 to-slate-200',
  supporter: 'bg-linear-60 from-orange-400 via-purple-600 to-orange-400',
}

const Sponsor = ({ alt, className, href, img, size = 'md', tier }: SponsorProps): ReactElement => {
  const content = (
    <Link className="block rounded-lg bg-white px-3 py-2" href={href} target="_blank">
      <Image alt={alt} className={cn('w-auto object-contain', sizeClasses[size])} src={img} />
    </Link>
  )

  return (
    <div className={cn('inline-block', className)}>
      {isDefined(tier) ? (
        <div
          className={cn(
            'hover:shadow-4xl rounded-xl p-2 shadow-2xl transition-transform duration-300 hover:scale-105',
            tierGradients[tier],
          )}
        >
          {content}
        </div>
      ) : (
        content
      )}
    </div>
  )
}

export { Sponsor }
