import { type ComponentType } from 'react'

interface MDXModule<TData> {
  default: ComponentType
  metadata: TData
}

interface MDXContext<TData> {
  keys: () => string[];
  (key: string): MDXModule<TData>
}

export type { MDXContext, MDXModule }
