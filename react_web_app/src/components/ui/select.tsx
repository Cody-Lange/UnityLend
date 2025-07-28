import React from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          'flex h-10 w-full rounded-lg border border-yellow-500/30 bg-black/50 px-3 py-2 text-sm text-white focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  }
)
Select.displayName = 'Select'

const SelectContent = ({ children }: { children: React.ReactNode }) => children
const SelectItem = ({ children, value }: { children: React.ReactNode; value: string }) => (
  <option value={value}>{children}</option>
)
const SelectTrigger = ({ children }: { children: React.ReactNode }) => children
const SelectValue = ({ placeholder }: { placeholder?: string }) => (
  <option disabled selected>{placeholder}</option>
)

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }
