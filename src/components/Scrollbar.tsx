"use client"

import { useEffect, useRef, useState } from "react"

export default function Scrollbar(){
    const [top, setTop] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)

    function scrollController(event:any) {
        setTop( () => event.target.scrollTop )
    }

    useEffect(()=>{
        if( !ref.current ) return
        const parent = ref.current?.parentElement as HTMLElement
        parent.addEventListener('scroll', scrollController)

        return ()=>parent.removeEventListener('scroll', scrollController)

    },[ref])


    return <span ref={ref} style={{ top:`${top-1}px` }} className="absolute h-full w-4 py-5 block border-2 border-blue-500">
        <span style={{ top:`${100*Number(ref?.current?.scrollHeight)/top}px` }} className="w-2 h-2 block bg-red-500 mx-auto"></span>
    </span>
}