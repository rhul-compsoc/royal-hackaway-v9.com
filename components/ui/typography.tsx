import { type ComponentProps, type ReactElement } from 'react'

import { cn } from '@/lib/utils/cn'

const H2 = ({ className, ...props }: ComponentProps<'h2'>): ReactElement => {
  return <h2 className={cn('text-text mt-0.5 text-4xl font-extrabold lg:text-5xl', className)} {...props} />
}

const H3 = ({ className, ...props }: ComponentProps<'h3'>): ReactElement => {
  return <h3 className={cn('text-text mt-0.5 text-2xl font-extrabold lg:text-3xl', className)} {...props} />
}

const H4 = ({ className, ...props }: ComponentProps<'h4'>): ReactElement => {
  return <h4 className={cn('text-neutral mt-0.5 text-lg font-light', className)} {...props} />
}

export { H2, H3, H4 }
