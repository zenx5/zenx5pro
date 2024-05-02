import Projects from "@/components/Projects"
import { Identy, Skills, ListLinks } from "@/components/Index"
import { labelSkill, langs, links, translate } from "@/tools/constants"


export default function Home({ params }: { params: { currentLang:string } }) {
    const { currentLang } = params
    const position = "Fullstack"
    const userimage = "https://avatars.githubusercontent.com/u/26119733?v=4"
    const publicRepos = 10
    const indexLang = langs.indexOf( currentLang )
    const description = translate[indexLang]?.description


    return <div className="flex flex-col gap-5 items-center justify-center h-auto py-20 ">
        <Identy position={position} userimage={userimage} lang={currentLang} />
        <Projects />
        <ListLinks links={links} currentLang={currentLang} />
    </div>
}


