import { getDays } from './get-days'
import { getHours } from './get-hours'
import { getMinutes } from './get-minutes'

const getSeconds = (date: number): number => {
  const days = getDays(date) * 1000 * 3600 * 24
  const hours = getHours(date) * 1000 * 3600
  const minutes = getMinutes(date) * 1000 * 60
  return Math.floor((date - days - hours - minutes) / 1000)
}

export { getSeconds }
