import { type ComponentProps, type ReactElement, type ReactNode } from 'react'

import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'discord' | 'primary' | 'secondary'

type ButtonSize = 'lg' | 'md' | 'sm'

interface ButtonProps {
  children?: ReactNode
  className?: string
  size?: ButtonSize
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  discord: 'bg-discord hover:bg-discord-accent focus:bg-discord-accent text-white transition-all duration-200',
  primary: 'bg-primary hover:bg-accent text-white transition-all duration-200',
  secondary:
    'bg-secondary hover:bg-secondary text-primary transition-all duration-200 border-2 border-primary hover:border-accent',
}

const sizeClasses: Record<ButtonSize, string> = {
  lg: 'px-24 py-6 text-xl',
  md: 'px-16 py-4 text-lg',
  sm: 'px-12 py-3 text-md',
}

const Button = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
  ...props
}: ButtonProps & ComponentProps<'button'>): ReactElement => {
  return (
    <button
      className={cn(
        'hover:shadow-4xl focus-visible:ring-accent mt-2 inline-block rounded-2xl text-sm font-medium shadow-2xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
