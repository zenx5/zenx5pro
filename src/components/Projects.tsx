import Link from "next/link"
import { projects } from "@/tools/constants"
import ItemProject from "./ItemProject"


export default function Projects() {


    return <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 justify-between items-center">
        {projects.map( item => <ItemProject key={item.id} title={item.title} description={item.description} website={item.website} repository={item.repository} privateRepository={item.privateRepository} /> )}
    </div>
}