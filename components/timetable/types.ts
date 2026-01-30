import z from 'zod'

const event = z.object({
  startTime: z.string(),
  endTime: z.string().optional(),
  content: z.any().optional(),
})

type Event = z.infer<typeof event>

export type { Event }

export { event }
