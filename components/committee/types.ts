import { StaticImageData } from 'next/image'
import z from 'zod'

const committee = z.object({
  text: z.string(),
  subtext: z.string(),
  alt: z.string().optional(),
  image: z.custom<StaticImageData>().optional(),
  order: z.number().optional(),
  content: z.any().optional(),
})

type Committee = z.infer<typeof committee>

export type { Committee }

export { committee }
