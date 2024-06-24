import { links } from "@/tools/constants"
import ListLinks from "@/components/ListLinks";
import Image from "next/image";
import Link from "next/link";
import CardPing from "@/components/CardPing";

interface ItemResponseLink {
    url: string,
    icon: string
}

export default async function Page(){
    const userimage = "https://avatars.githubusercontent.com/u/26119733?v=4"
    const articles:any = [
        {
            id: 1,
            href: 'https://www.linkedin.com/pulse/angular-rip-octavio-martinez-k18rc',
            title:'Angular Rip',
            extract: 'Angular en su versión mas antigua (AngularJS) dejó de recibir soporte...'
        },
        {
            id: 2,
            href: 'https://www.linkedin.com/pulse/las-skill-que-te-hacen-senior-octavio-martinez-nhrbc',
            title:'La skill que te hace "Senior"',
            extract: 'Hace unos días me encontré con un articulo del crack de Andrés Calviño...'
        },
        {
            id: 3,
            href: 'https://www.linkedin.com/pulse/desde-latam-octavio-mart%25C3%25ADnez-cede%25C3%25B1o-rcvve',
            title:'Desde Latam',
            extract: 'Ser desarrollador en Latinoamérica es, como mínimo, una experiencia...'
        },
        {
            id: 4,
            href: 'https://www.linkedin.com/pulse/venezuela-talento-resiliente-octavio-mart%25C3%25ADnez-cede%25C3%25B1o-vv0ee',
            title:'Venezuela, Talento resiliten',
            extract: 'Venezuela es singular por ponerlo simple; el venezolano por su parte es...'
        },
    ]

    return <div className="flex flex-col gap-5 items-center justify-center h-auto py-20 ">
        <CardPing className="w-full max-w-4xl grid grid-cols-3 mb-10 md:mx-auto mx-5">
            <div className="py-2 px-4 rounded-lg text-black col-span-1">
                <div className="flex flex-row gap-5 items-center">
                    <Image className="rounded-full" alt="me" src={userimage} width={50} height={50} />
                    <span>
                        <h1 className="text-xl opacity-70">Octavio Martinez</h1>
                        <small className="text-lg opacity-50">Zenx5</small>
                    </span>
                </div>
            </div>
            <div className="col-span-1 col-start-3 flex justify-center items-center">
                <ListLinks links={links} currentLang={'es'} />
            </div>
        </CardPing>
        <div className="w-full max-w-4xl grid md:grid-cols-3 grid-cols-1 gap-5 md:mx-auto mx-5">
            <CardPing className="md:col-span-2 col-span-1" isContent>
                <p className="py-4">
                    <span  className="opacity-70">Con 12 años, sin acceso a internet y en MS-DOS hice <span className="font-bold">ingeniería inversa de código en Pascal</span>, así comencé mis primeros pasos en este maravilloso mundo del desarrollo</span>
                </p>
                <p className="py-4">
                    <span  className="opacity-70">Antes de la pandemia sólo trabajé como freelance en proyectos pequeños y algunos un poco más grande como la app que hice para <span className="font-bold">IRAM-CHILE</span> la cual puedes conseguir en este <Link href="https://github.com/zenx5/iram-chile-certificados" className="hover:underline font-bold text-indigo-800">repositorio</Link></span>
                </p>
                <p className="py-4">
                    <span  className="opacity-70">En 2020 decidí comenzar a trabajar con agencias, lo cual me abrió las puertas a un nuevo mundo que me ha traído grandes beneficios, entre ellos conocer gente genial de la cual he aprendido mucho</span>
                </p>
                <p className="py-4">
                    <span  className="opacity-70">Actualmente lidero un equipo de amigos con los que he desarrollado varios productos geniales como <Link href="https://chromewebstore.google.com/detail/prompt-box/odcagcgihohglhnolhimdoeahaaefilm?hl=es" className="hover:underline font-bold text-indigo-800"  >Prompt Box</Link> una extensión con aprox 150 usuarios; <Link href="https://not-json-placeholder.vercel.app/" className="hover:underline font-bold text-indigo-800">Not JSONPlaceholder</Link> un homenaje para la famosa web, que hicimos con nuestros estudiantes; y mi favorita <Link href="https://search-dependencies.vercel.app/" className="hover:underline font-bold text-indigo-800">Search Dependencies</Link> una app para búsquedas dentro de Github que seguimos desarrollando pero que ha sido una experiencia como mínimo super</span>
                </p>
            </CardPing>
            <CardPing className="col-span-1 md:col-start-3 col-start-1" isContent>
                {articles.map( (article:any) => <Link key={article.id} target="_blank" href={article.href} className="py-4">
                    <h2 className="text-xl opacity-70">{article.title}</h2>
                    <p className="text-sm opacity-50">{article.extract}</p>
                </Link>)}
            </CardPing>
        </div>
    </div>
}