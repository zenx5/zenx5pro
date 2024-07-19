import { projects } from "@/tools/constants"
import ItemProject from "./ItemProject"


export default async function Projects() {
    const response = await fetch("https://raw.githubusercontent.com/zenx5/zenx5/feature/cms/cms/projects.json",{ })
    const { classContainer, items } = await response.json()

    return <div className={ classContainer ?? "w-full max-w-4xl mx-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 justify-between items-center" }>
        {/* {(items ?? projects).map( item => <ItemProject key={item.id} defaultVisibility={item.active} title={item.title} description={item.description} website={item.website} repository={item.repository} privateRepository={item.privateRepository} /> )} */}
    </div>
}