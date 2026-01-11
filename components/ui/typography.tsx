import { ComponentProps, ReactElement } from 'react'

import { cn } from '@/lib/utils/cn'

const H2 = ({ className, ...props }: ComponentProps<'h2'>): ReactElement => {
  return <h2 className={cn('mt-0.5 font-extrabold text-4xl lg:text-5xl text-text', className)} {...props} />
}

const H3 = ({ className, ...props }: ComponentProps<'h3'>): ReactElement => {
  return <h3 className={cn('mt-0.5 font-extrabold text-2xl lg:text-3xl text-text', className)} {...props} />
}

const H4 = ({ className, ...props }: ComponentProps<'h4'>): ReactElement => {
  return <h4 className={cn('mt-0.5 text-lg font-light text-neutral', className)} {...props} />
}

export { H2, H3, H4 }
