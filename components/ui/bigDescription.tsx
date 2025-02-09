import { cn } from '@/lib/utils'
import React from 'react'

const BigDescription = ({children,className}:{children:React.ReactNode;className?:string}) => {
  return (
    <div className={cn('text-center font-semibold leading-none text-4xl md:text-5xl lg:text-6xl ',className)}>{children}</div>
  )
}

export default BigDescription