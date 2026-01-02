import { cn } from '../utils/cn'

function H3({ className, ...props }: React.ComponentProps<'h3'>) {
  return <h3 className={cn('mt-0.5 font-extrabold text-2xl text-text-white', className)} {...props} />
}

function H4({ className, ...props }: React.ComponentProps<'h4'>) {
  return <h4 className={cn('mt-0.5 text-lg font-light text-text-white', className)} {...props} />
}

export { H3, H4 }
