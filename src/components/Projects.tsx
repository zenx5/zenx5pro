import Link from "next/link"
import { projects } from "@/tools/constants"


export default function Projects({ title }:{ title:string }) {


    return <div className="max-w-4xl mx-4">
        <h1 className="text-2xl font-bold text-center mb-4">{ title }</h1>
        {/** Carousel of projects */}
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 justify-between items-center">
            {projects.map( item => <div key={item.id} className="flex flex-col justify-between gap-2 border border-slate-200 rounded-lg shadow-lg overflow-hidden w-full h-72 group text-black bg-white pt-2">
                <div className="flex flex-col h-56 overflow-hidden">
                    <h2 className="mx-10 my-2 text-xl font-bold text-center h-12 flex flex-col justify-center">{item.title}</h2>
                    <p className="px-4 mx-0 overflow-y-scroll" style={{ scrollbarWidth:"thin" }}>{item.description}</p>
                </div>
                <div className="flex flex-row gap-2 items-center justify-around border-t border-slate-200 top-16 h-16 w-full py-1">
                        <Link href={item.website ? item.website : '#'} target={item.website ? "_blank" : ""} rel="noreferrer" className={"text-sm border border-slate-200 px-4 py-1 rounded-xl" + (item.website ? " text-black cursor-pointer": " text-slate-300 cursor-default")}>Website</Link>
                        {!item.privateRepository && <Link href={item.repository ? item.repository : '#'} target={item.repository ? "_blank" : ""} rel="noreferrer" className={"text-sm border border-slate-200 px-4 py-1 rounded-xl" + (item.repository ? " text-black cursor-pointer": " text-slate-300 cursor-default")}>Repository</Link>}
                    </div>
            </div>)}
        </div>
    </div>
}