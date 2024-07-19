"use client"
import { data } from "./data";



export default function SkillDetails({ name }:{ name:string }){

    const content = data.find( item => item.key === name )

    return <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-col gap-2 bg-white rounded-lg shadow-lg py-5 px-10 w-3/4 h-max-[70vh] justify-between mt-40">
            <h2 className="text-2xl font-bold text-center first-letter:uppercase">{name}</h2>
            <div className="gap-2 mx-4">
                <div className="flex flex-col gap-2">
                    <span className="text-left text-md">{content?.description}</span>
                </div>
                <div className="flex flex-col gap-2 overflow-y-scroll h-1/2 mt-10">
                    {content?.items.map((item:any, index:number) => {
                        return <div key={index} className="flex flex-col gap-2">
                            <span className="text-lg font-bold">{item.title}</span>
                            <span>{item.description}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}