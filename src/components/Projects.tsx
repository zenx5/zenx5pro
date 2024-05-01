"use client"

import Link from "next/link"

const items = [
    {
        id:1,
        title:'Search Dependencies',
        image: '',
        description:'Search Dependencies es una apliacación web, estension de chrome y complemento de firefox que permite buscar dependencias de un proyecto en NPM y Yarn.',
        website:'https://search-dependencies.vercel.app/',
        repository:'https://github.com/zenx5/search-dependencies',
        tags:['NextJS', 'React', 'API']
    },
    {
        id:2,
        title:'Prompt Box',
        image: '',
        description:'Extension para chrome que permite crear, guardar y copiar prompts con facilidad para usar en ChatGPT o algún otro servicio de IA.',
        website:'https://chromewebstore.google.com/detail/prompt-box/odcagcgihohglhnolhimdoeahaaefilm',
        repository:'https://github.com/zenx5/prompt-box',
        tags:['Extension', 'Javascript', 'IA']
    },
    {
        id:3,
        title:'Not {JSON} Placeholder',
        image: '',
        description:'Implementacion de los endpoint del famoso {JSON} Placeholder con un "toque" didactico.',
        website:'',
        repository:'',
        tags:['React', 'HowDoIt', 'API']
    }
]

export default function Projects() {


    return <div className="w-1/2">
        <h1 className="text-2xl font-bold text-center mb-4">Projects</h1>
        {/** Carousel of projects */}
        <div className="w-full flex flex-row gap-4 justify-between items-center">
            {items.map( item => <div key={item.id} className="flex flex-col justify-between gap-2 border border-slate-200 rounded-lg shadow overflow-hidden w-full h-60 group">
                <div className="flex flex-col h-44 overflow-hidden">
                    <h2 className="mx-10 my-2 text-xl font-bold text-center">{item.title}</h2>
                    <p className="px-4 mx-0 overflow-y-scroll" style={{ scrollbarWidth:"thin" }}>{item.description}</p>
                </div>
                <div className="relative h-16 border-t border-slate-200">
                    <div className="flex flex-row gap-2 h-full w-full py-1 px-1 items-center">
                        {item.tags.map( tag => <span key={tag} className="flex items-center justify-center text-[10px] bg-gray-200 px-2 py-1 rounded-lg">{tag}</span> )}
                    </div>
                    <div className="flex flex-row gap-2 absolute group-hover:top-0 items-center justify-around transition-all duration-1000 bg-white top-16 h-full w-full py-1">
                        <Link href={item.website ? item.website : '#'} target={item.website ? "_blank" : ""} rel="noreferrer" className={"text-sm border border-slate-200 px-4 py-1 rounded-xl" + (item.website ? " text-black cursor-pointer": " text-slate-300 cursor-default")}>Website</Link>
                        <Link href={item.repository ? item.repository : '#'} target={item.repository ? "_blank" : ""} rel="noreferrer" className={"text-sm border border-slate-200 px-4 py-1 rounded-xl" + (item.repository ? " text-black cursor-pointer": " text-slate-300 cursor-default")}>Repository</Link>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
}