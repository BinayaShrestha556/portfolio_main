"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
interface NavbarActionsProps{
    routes:{
        label:string,
        href:string
    }[]
}
const NavbarActions:React.FC<NavbarActionsProps> = ({routes}) => {
  const [active,setActive]=useState("#home")

    const [mounted,isMounted]=useState(false)
    useEffect(()=>{
      isMounted(true)
    },[])
 if(!mounted) return null
  return (
    <div className="flex flex-col">{routes.map(e=>(<Link className={cn ("hover:text-white hover:font-bold text-muted-foreground",active===e.href&&" text-white font-bold")
    
    } onClick={()=>setActive(e.href)} key={e.label} href={e.href}>{e.label}</Link>))}</div>
  )
}

export default NavbarActions