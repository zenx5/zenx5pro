import Link from "next/link"
import CardPing from "@/components/CardPing"

export default function MainContent() {

    return <CardPing className="md:col-span-2 col-span-1" isContent>
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
}