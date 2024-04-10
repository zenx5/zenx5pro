"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ButtonLink({ children, href, color, bgcolor, outlined, ...props }:{ children:any, href:string, color:string, bgcolor:string, outlined:boolean }) {
    const [style, setStyle] = useState({})

    useEffect(()=>{
        setStyle( (prev:any) => {
            const $ = {} as any
            if( outlined ) $.border = `1px solid ${color}`
            if( color ) $.color = color
            if( bgcolor ) $.backgroundColor = bgcolor
            return $
        })
    },[color, bgcolor, outlined])

    return <Link
      {...props}
      href={href}
      target='_blank'
      style={style}
      className="rounded-md font-normal px-5 py-2 flex flex-row items-center justify-between gap-1">
        { children }
    </Link>
  }