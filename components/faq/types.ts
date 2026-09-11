import z from 'zod'

const faq = z.object({
  content: z.any().optional(),
  order: z.number().optional(),
  title: z.string(),
})

type FAQ = z.infer<typeof faq>

export type { FAQ }

export { faq }
