const getDays = (date: number): number => {
  return Math.floor(date / (1000 * 3600 * 24))
}

export { getDays }
