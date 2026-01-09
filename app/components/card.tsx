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

const Card = ({ text, subtext, image = placeholder, alt }: CardProps): ReactElement => (
  <article className="overflow-hidden rounded-4xl shadow-2xl transition-transform duration-300 hover:scale-110 hover:shadow-4xl">
    <Image alt={alt} src={image} placeholder="blur" className="h-56 w-full object-cover" />
    <div className="bg-primary p-4 sm:p-6 transition-colors duration-300">
      <H3 className="mt-0.5 font-extrabold text-2xl text-white">{text}</H3>
      <H4 className="mt-0.5 text-lg font-light text-white">{subtext}</H4>
    </div>
  </article>
)

export type { CardProps }

export { Card }
