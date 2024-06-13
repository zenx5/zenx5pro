"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ItemProject(props:ProjectType){
    const { title, description, website, repository, privateRepository } = props
    const [show, setShow] = useState(false)
    const [enableShow, setEnableShow] = useState(false)

    useEffect(()=>{
        function checkViewport() {
            console.log('checkViewport')
            const width = window.visualViewport?.width
            setShow(false)
            if( width ) {
                setEnableShow( width<639 )
            }
        }
        window.visualViewport?.addEventListener('resize', checkViewport )
        checkViewport()

        return () => window.visualViewport?.removeEventListener('resize', checkViewport )
    },[])

    const handlerShow = () => {
        setShow( prev => !prev )
    }

    const showClass = () => {
        if( enableShow ) return show ? " block " : " hidden "
    }

    return <div className="flex flex-col justify-between gap-0 border border-slate-200 rounded-lg shadow-lg overflow-hidden w-full h-fit group text-black bg-white pt-0 sm:pt-2 sm:h-72 sm:gap-2">
        <div className="flex flex-col h-fit overflow-hidden sm:h-56">
            <h2 className="mx-10 my-2 text-xl font-bold text-center h-fit flex flex-col justify-center sm:h-12">{title}</h2>
            <p className={"px-4 mx-0 overflow-y-scroll" + showClass() } style={{ scrollbarWidth:"thin" }}>{description}</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-around border-t border-slate-200 top-16 h-16 w-full py-1">
            <Link href={website ? website : '#'} target={website ? "_blank" : ""} rel="noreferrer" className={"text-sm border border-slate-200 px-4 py-1 rounded-xl" + (website ? " text-black cursor-pointer": " text-slate-300 cursor-default")}>Website</Link>
            {!privateRepository && <Link href={repository ? repository : '#'} target={repository ? "_blank" : ""} rel="noreferrer" className={"text-sm border border-slate-200 px-4 py-1 rounded-xl" + (repository ? " text-black cursor-pointer": " text-slate-300 cursor-default")}>Repository</Link>}
            {enableShow && <button className="w-4 h-4" onClick={handlerShow}>
                { show ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                }
            </button>}
        </div>
    </div>
}