import Image, { StaticImageData } from 'next/image'
import { ReactElement } from 'react'

import { H3, H4 } from './typography'

interface CardProps {
  name: string
  position: string
  img: StaticImageData
  alt: string
}

const Card = ({ name, position, img, alt }: CardProps): ReactElement => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
      <Image
        alt={alt}
        src={img}
        placeholder="blur"
        className="h-56 w-full object-cover transition-transform duration-300 hover:scale-110"
      />

      <div className="bg-primary p-4 sm:p-6 transition-colors duration-300">
        <H3 className="mt-0.5 font-extrabold text-2xl text-white">{name}</H3>
        <H4 className="mt-0.5 text-lg font-light text-white">{position}</H4>
      </div>
    </article>
  )
}

export type { CardProps }

export { Card }
