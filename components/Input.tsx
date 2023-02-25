import type { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  type?: HTMLInputTypeAttribute
  placeholder?: string
  className?: string
}

export default function Input({ type = 'text', placeholder, className }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-[#EFEFEF] border-2 border-[#E8E8E8] rounded-lg font-medium text-sm px-6 py-4 ${className}`}
    />
  )
}
