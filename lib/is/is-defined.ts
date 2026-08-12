const isDefined = <T>(value: null | T | undefined): value is T => value !== undefined && value !== null

export { isDefined }
