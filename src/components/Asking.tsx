"use client"
import { useEffect } from "react"
import { MainChat } from "./chat/MainChat"
import { useSearchParams } from "next/navigation"

export default function Asking(){
    const searchParams = useSearchParams()

    useEffect(()=>{
        function toggleBlur(){
            if( searchParams.get("ask") ) {
                document.querySelectorAll(".group").forEach( (element) => element.classList.toggle("blur-sm") )
            }
        }
        toggleBlur()
        return ()=>toggleBlur()
    },[searchParams])

    return searchParams.get("ask") && <div className="w-screen h-screen absolute bg-indigo-400 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg h-2/3 w-1/2 py-6 px-10 ">
            <MainChat />
        </div>
    </div>
}