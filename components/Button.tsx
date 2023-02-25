import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children?: ReactNode
  onClick?: () => void
}

const STYLES = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-white text-blue-500'
}

export default function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-5 px-8 rounded-lg font-semibold hover:brightness-95 active:brightness-90 ${STYLES[variant]}`}
    >
      {children}
    </button>
  )
}
