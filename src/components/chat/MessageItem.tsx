import { parse } from "marked"

export default function MessageItem({ content, sended }:{ content:string, sended:boolean }) {
    const mainClass = "flex items-center gap-2 mb-4 text-indigo-400 " + (!sended ? "justify-start" : "justify-end")
    const contentClass = "p-2 rounded-lg text-slate-700 text-wrap break-words w-fit max-w-lg " + (sended ? "bg-indigo-200" : "bg-white border border-indigo-200")
    return <div className={mainClass} >
        {sended ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg> : null}
        <div className={contentClass} dangerouslySetInnerHTML={{ __html:parse(content) }} />
    </div>
}