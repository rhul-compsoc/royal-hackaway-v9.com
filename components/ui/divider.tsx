import  { type ComponentProps, type ReactElement } from 'react'

import { cn } from '@/lib/utils/cn'

const Divider = ({ className, ...props }: ComponentProps<'hr'>): ReactElement => (
  <hr
    className={cn(
      'mx-auto h-1 w-1/2 border-t-0 bg-transparent bg-linear-to-r from-transparent via-neutral-500 to-transparent opacity-50',
      className,
    )}
    {...props}
  />
)

export { Divider }
