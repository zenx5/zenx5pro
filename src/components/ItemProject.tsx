"use client"
import Link from "next/link"

interface PropsItemProject {
    item: ProjectType
}

export default function ItemProject(props:ProjectType){
    const { title, description, website, repository, privateRepository } = props

    return <div className="flex flex-col justify-between gap-2 border border-slate-200 rounded-lg shadow-lg overflow-hidden w-full h-72 group text-black bg-white pt-2">
        <div className="flex flex-col h-56 overflow-hidden">
            <h2 className="mx-10 my-2 text-xl font-bold text-center h-12 flex flex-col justify-center">{title}</h2>
            <p className="px-4 mx-0 overflow-y-scroll" style={{ scrollbarWidth:"thin" }}>{description}</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-around border-t border-slate-200 top-16 h-16 w-full py-1">
                <Link href={website ? website : '#'} target={website ? "_blank" : ""} rel="noreferrer" className={"text-sm border border-slate-200 px-4 py-1 rounded-xl" + (website ? " text-black cursor-pointer": " text-slate-300 cursor-default")}>Website</Link>
                {!privateRepository && <Link href={repository ? repository : '#'} target={repository ? "_blank" : ""} rel="noreferrer" className={"text-sm border border-slate-200 px-4 py-1 rounded-xl" + (repository ? " text-black cursor-pointer": " text-slate-300 cursor-default")}>Repository</Link>}
            </div>
    </div>
}