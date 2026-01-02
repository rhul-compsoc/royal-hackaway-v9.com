import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

interface SponsorProps {
  img: StaticImageData
  alt: string
  href: string
  className?: string
}

const Sponsor = ({ img, alt, href, className }: SponsorProps): ReactElement => {
  return (
    <div className={className}>
      <Link href={href} target="_blank">
        <Image alt={alt} src={img} className="h-32 w-auto object-fit" />
      </Link>
    </div>
  )
}

export { Sponsor }
