import Image from "next/image"
import { links } from "@/tools/constants"
import { ListLinks } from "@/components/Index"
import Es from "@/components/descriptions/Es"
import En from "@/components/descriptions/En"
import Pt from "@/components/descriptions/Pt"
import { code_es, code_en, code_pt } from "@/tools/constants"

interface IdentyProps {
    position: string
    userimage: string
    lang: string
}

export default function Identy({ position, userimage, lang}:IdentyProps) {

    const experienceYear = () => {
        const currentYear = new Date().getFullYear()
        const startYear = 2019
        return currentYear - startYear
    }

    return <div className="grid sm:grid-cols-3 grid-cols-1  gap-2 max-w-4xl mx-4">
        <div className="col-span-1 flex items-center sm:items-start flex-col sm:h-screen sm:absolute">
            <Image className="rounded-lg" alt={position} src={userimage} width={200} height={200} />
            <h1 className="text-3xl font-bold">{position}</h1>
            <p className="text-xl italic" >Octavio Martínez</p>
            <small className="text-lg text-slate-500" >Zenx5</small>
            <ListLinks links={links} currentLang={lang} />
        </div>
        <div className="sm:col-start-2 sm:col-span-2 col-start-1 col-span-1 text-md">
            { lang === code_es && <Es year={experienceYear()} /> }
            { lang === code_en && <En year={experienceYear()} /> }
            { lang === code_pt && <Pt year={experienceYear()} /> }
        </div>
    </div>
}