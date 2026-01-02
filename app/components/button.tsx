import { ReactElement, ReactNode } from 'react'

import { cn } from '../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'discord'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  children?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary hover:bg-accent text-white transition-all duration-200',
  secondary:
    'bg-secondary hover:bg-secondary text-primary transition-all duration-200 border-2 border-primary hover:border-accent',
  discord: 'bg-discord hover:bg-discord-accent focus:bg-discord-accent text-white transition-all duration-200',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-12 py-3 text-md',
  md: 'px-16 py-4 text-lg',
  lg: 'px-24 py-6 text-xl',
}

const Button = ({ variant = 'primary', size = 'md', children, className }: ButtonProps): ReactElement => {
  return (
    <button
      className={cn(
        'inline-block rounded-2xl text-sm font-medium focus:outline-none shadow-2xl hover:shadow-4xl mt-2 hover:cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </button>
  )
}

export { Button }
