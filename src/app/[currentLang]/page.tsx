import Projects from "@/components/Projects"
import { Identy, ListLinks } from "@/components/Index"
import { links } from "@/tools/constants"


export default function Home({ params }: { params: { currentLang:string } }) {
    const { currentLang } = params
    const position = "Fullstack"
    const userimage = "https://avatars.githubusercontent.com/u/26119733?v=4"
    const proyectTitle = {
        es: "Proyectos",
        en: "Projects",
        pt: "Projetos"
    }[currentLang] as string


    return <div className="flex flex-col gap-5 items-center justify-center h-auto py-20 ">
        <Identy position={position} userimage={userimage} lang={currentLang} />
        <Projects title={proyectTitle} />
        <ListLinks links={links} currentLang={currentLang} />
    </div>
}


