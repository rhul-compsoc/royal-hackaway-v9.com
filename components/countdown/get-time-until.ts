const getTimeUntil = (date: Date): number => {
  return Math.max(date.getTime() - Date.now(), 0)
}

export { getTimeUntil }
