import z from 'zod'

const event = z.object({
  content: z.any().optional(),
  endTime: z.string().optional(),
  startTime: z.string(),
})

type Event = z.infer<typeof event>

export type { Event }

export { event }
