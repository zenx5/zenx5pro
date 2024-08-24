"use client";
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import Input from "./Input"
import MessageItem from "./MessageItem";




export function MainChat() {
    const refChatBox = useRef<HTMLDivElement>(null)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<{content:string, sended:boolean}[]>([])

    useEffect(() => {
        if (refChatBox.current) {
            refChatBox.current.scrollTo(0,refChatBox.current.scrollHeight)
        }
    }, [messages])

    const handlerSend = () => {
        if( message === "" ) return
        setMessages( prev => ([...prev, { content:message, sended:true }]) )
        setMessage("")
    }


    return <div className="flex-grow flex flex-col rounded-lg p-4 gap-2" style={{ height:'-webkit-fill-available' }}>
        <div className="flex flex-row justify-between">
            <span>
                <h2 className="font-bold text-lg">Sobre mí</h2>
                <p>He preparado esta IA con la información sobre mi CV</p>
            </span>
            <Link href="?" className="text-indigo-500 items-center flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </Link>

        </div>
        <div className="flex-grow overflow-auto px-3 border border-indigo-400 h-full will-change-scroll" style={{ scrollbarWidth:"thin", scrollBehavior:"smooth" }} ref={refChatBox}>
            { messages.map( (message:any, index:number) => <MessageItem key={index} content={message.content} sended={message.sended} />) }
        </div>
        <div className="mt-4 flex gap-2">
            <Input
                className="flex-grow"
                placeholder="Type a message..."
                type="text"
                value={message}
                onKeyDown={event => event.key === "Enter" && handlerSend()}
                onChange={event => setMessage(event.target.value)}
            />
            <button onClick={handlerSend} className="text-indigo-500 items-center flex flex-row">
                <svg
                    className=" h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                </svg>
                <span className="sr-only">Send</span>
            </button>
        </div>
    </div>
}