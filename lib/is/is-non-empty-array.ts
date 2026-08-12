const isNonEmptyArray = <T>(arr: null | T[] | undefined): arr is T[] => Array.isArray(arr) && arr.length > 0

export { isNonEmptyArray }
