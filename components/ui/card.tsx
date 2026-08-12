import Image from 'next/image'
import { type StaticImageData } from 'next/image'
import { type ReactElement } from 'react'

import placeholder from '@/public/committee/blank.webp'

import { H3, H4 } from './typography'

interface CardProps {
  alt?: string
  image?: StaticImageData
  subtext: string
  text: string
}

const Card = ({ alt, image = placeholder, subtext, text }: CardProps): ReactElement => (
  <article className="hover:shadow-4xl overflow-hidden rounded-4xl shadow-2xl transition-transform duration-300 hover:scale-110">
    <Image alt={alt ?? text} className="h-56 w-full object-cover" placeholder="blur" src={image} />
    <div className="bg-primary p-4 transition-colors duration-300 sm:p-6">
      <H3 className="mt-0.5 text-2xl font-extrabold text-white">{text}</H3>
      <H4 className="mt-0.5 text-lg font-light text-white">{subtext}</H4>
    </div>
  </article>
)

export type { CardProps }

export { Card }
