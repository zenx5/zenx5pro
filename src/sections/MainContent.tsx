import Link from "next/link"
import Image from "next/image"
import CardPing from "@/components/CardPing"
import LinkSchedule from "@/components/LinkSchedule"
import SectionContent from "@/components/SectionContent"

export default function MainContent() {

    return <CardPing className="md:col-span-2 col-span-1 " isContent>
        <span className="flex flex-row justify-between items-center pb-4">
            <h2 className="font-bold text-xl mb-2">Sobre mi</h2>
            <LinkSchedule />
        </span>
        <SectionContent title="Origen dramatico">
            <span  className="opacity-70">Con 12 años, sin acceso a internet y en MS-DOS hice <span className="font-bold">ingeniería inversa de código en Pascal</span>, así comencé mis primeros pasos en este maravilloso mundo del desarrollo</span>
        </SectionContent>
        <SectionContent title="Estudios">
            <span  className="opacity-70">Certificado por freeCodeCamp como <Link href="https://www.freecodecamp.org/certification/zenx5/front-end-development-libraries" target="_blank" className="hover:underline text-indigo-800">Frontend Developer</Link> y <Link href="https://www.freecodecamp.org/certification/zenx5/back-end-development-and-apis" target="_blank" className="hover:underline text-indigo-800">Backend Developer</Link>, con amplia experiencia en el desarrollo de Plugins para WordPress, experto en la <Link href="https://es.react.dev/learn/thinking-in-react" className="hover:underline italic text-indigo-800">{'"'}Filosofía de React{'"'}</Link>.</span>
        </SectionContent>
        <SectionContent title="Experiencia">
            <span  className="opacity-70"><span className="font-bold">Me he desempeñado en</span> diferentes contextos dentro de IT: maquetando interfaces, modelando base de datos, integrando modelos de IA, desarrollando API{"'"}s, optimizando y refactorizando aplicaciones, y dirigiendo equipos.</span>
        </SectionContent>
        <SectionContent title="Aportes">
            <span  className="opacity-70">
                <span>He creado soluciones interesantes como <Link href="https://www.npmjs.com/package/kommiter-ia" className="hover:underline font-medium text-indigo-800">Kommiter IA</Link> para generar commits automaticos con Inteligencia Artificial.</span><br/>
                <span>También implementado IA he creado <Link target="_blank" href="https://check-repo-ia.vercel.app/" className="hover:underline text-indigo-800 font-medium">Check Repo</Link>  para validar cuan bien esta hecha una App en función de como fue escrito su código.</span><br/>
                <span>Cada una de estas soluciones las he creado motivado por mejorar la calidad de los desarrollos y la productividad de los equipos en los que he trabajado.</span>
            </span>
        </SectionContent>
    </CardPing>
}