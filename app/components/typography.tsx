import { ReactElement } from 'react'

import { cn } from '../utils/cn'

const H2 = ({ className, ...props }: React.ComponentProps<'h2'>): ReactElement => {
  return <h2 className={cn('mt-0.5 font-extrabold text-4xl', className)} {...props} />
}

const H3 = ({ className, ...props }: React.ComponentProps<'h3'>): ReactElement => {
  return <h3 className={cn('mt-0.5 font-extrabold text-2xl', className)} {...props} />
}

const H4 = ({ className, ...props }: React.ComponentProps<'h4'>): ReactElement => {
  return <h4 className={cn('mt-0.5 text-lg font-light ', className)} {...props} />
}

export { H2, H3, H4 }
