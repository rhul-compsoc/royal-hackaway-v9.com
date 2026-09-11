import { type StaticImageData } from 'next/image'
import z from 'zod'

const committee = z.object({
  alt: z.string().optional(),
  content: z.any().optional(),
  image: z.custom<StaticImageData>().optional(),
  order: z.number().optional(),
  subtext: z.string(),
  text: z.string(),
})

type Committee = z.infer<typeof committee>

export type { Committee }

export { committee }
