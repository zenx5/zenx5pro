import { projects } from "@/tools/constants"
import ItemProject from "./ItemProject"


export default function Projects() {
    const actives = [0]


    return <div className="w-full max-w-4xl mx-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 justify-between items-center">
        {projects.map( (item, index) => <ItemProject key={item.id} defaultVisibility={actives.includes(index)} title={item.title} description={item.description} website={item.website} repository={item.repository} privateRepository={item.privateRepository} /> )}
    </div>
}