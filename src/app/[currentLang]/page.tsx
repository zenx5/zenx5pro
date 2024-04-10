
import Link from "next/link"
import { ButtonLink, MdiIcon, DropDown, Identy, Skills, ListLinks } from "@/components/Index"
import { labelSkill, langs, links, translate } from "@/tools/constants"


export default function Home({ params }: { params: { currentLang:string } }) {
    const { currentLang } = params
    const username = "zenx5"
    const userimage = "https://avatars.githubusercontent.com/u/26119733?v=4"
    const publicRepos = 10
    const indexLang = langs.indexOf( currentLang )
    const description = translate[indexLang]?.description


    return <div className="flex flex-col gap-5 items-center justify-center h-screen ">
        <Identy username={username} userimage={userimage} publicRepos={publicRepos} />
        <span className="text-center md:w-1/2 w-10/12" >{ description as string }</span>
        <Skills labelSkill={labelSkill} />
        <ListLinks links={links} currentLang={currentLang} />
    </div>
}


