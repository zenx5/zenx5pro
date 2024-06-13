import Projects from "@/components/Projects"
import { Identy } from "@/components/Index"
import SkillMap from "@/components/SkillMap"


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
        <h2 className="text-2xl font-bold text-center hover:underline">{ proyectTitle }</h2>
        <Projects />
        <h2 className="text-2xl font-bold text-center mt-4 hover:underline">Skills</h2>
        <SkillMap />
    </div>
}


