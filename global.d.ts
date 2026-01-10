declare module '*.css' {
  const content: Record<string, string>

  export default content
}

declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const metadata

  const MDXComponent: ComponentType
  export default MDXComponent
}

interface RequireContext {
  keys(): string[]
  <T = unknown>(id: string): T
}

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): RequireContext
}
