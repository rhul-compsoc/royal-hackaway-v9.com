const isNonEmptyArray = <T>(arr: T[] | null | undefined): arr is T[] => Array.isArray(arr) && arr.length > 0

export { isNonEmptyArray }
