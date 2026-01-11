import { getDays } from './get-days'
import { getHours } from './get-hours'

const getMinutes = (date: number): number => {
  const days = getDays(date) * 1000 * 3600 * 24
  const hours = getHours(date) * 1000 * 3600
  return Math.floor((date - days - hours) / (1000 * 60))
}

export { getMinutes }
