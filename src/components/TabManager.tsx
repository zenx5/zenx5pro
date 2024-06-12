"use client"
import React, { ReactElement, useState } from "react"

interface ItemTab {
    title: string,
    content: ReactElement
}

export default function TabManager({ items }:{ items:ItemTab[] }) {
    const [tab, setTab] = useState(0)

    const changeTab = (index:number) => () => {
        setTab(index)
    }

    return <div className="w-full max-w-4xl mx-4">
        <ul className="flex flex-row justify-center items-center gap-5">
            {items.map( (item, index) => <li key={item.title}><button onClick={changeTab(index)} className={"text-2xl font-bold text-center mb-4 hover:underline " + (tab==index?"underline":"")}>{ item.title }</button></li> )}
        </ul>
        <div className="w-full">{items[tab]?.content}</div>

    </div>
}