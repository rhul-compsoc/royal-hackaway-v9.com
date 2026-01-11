import { getDays } from './get-days'

const getHours = (date: number): number => {
  return Math.floor((date - getDays(date) * 1000 * 3600 * 24) / (1000 * 3600))
}

export { getHours }
