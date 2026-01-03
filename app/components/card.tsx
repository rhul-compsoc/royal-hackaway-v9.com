import Image, { StaticImageData } from 'next/image'
import { ReactElement } from 'react'

import placeholder from '@/public/committee/blank.webp'

import { H3, H4 } from './typography'

interface CardProps {
  text: string
  subtext: string
  image?: StaticImageData
  alt: string
}

const Card = ({ text, subtext, image, alt }: CardProps): ReactElement => {
  return (
    <article className="overflow-hidden rounded-4xl shadow-2xl transition-all duration-300 hover:shadow-4xl hover:-translate-y-1 hover:scale-105">
      <Image
        alt={alt}
        src={image ?? placeholder}
        placeholder="blur"
        className="h-56 w-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="bg-primary p-4 sm:p-6 transition-colors duration-300">
        <H3 className="mt-0.5 font-extrabold text-2xl text-white">{text}</H3>
        <H4 className="mt-0.5 text-lg font-light text-white">{subtext}</H4>
      </div>
    </article>
  )
}

export type { CardProps }

export { Card }
