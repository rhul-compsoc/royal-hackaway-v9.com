import z from 'zod'

const faq = z.object({
  title: z.string(),
  order: z.number().optional(),
  content: z.any(),
})

type FAQ = z.infer<typeof faq>

export type { FAQ }

export { faq }
