import Image from "next/image"

interface IdentyProps {
    position: string
    userimage: string
    publicRepos: number
}

export default function Identy({ position, userimage, publicRepos}:IdentyProps) {

    const experienceYear = () => {
        const currentYear = new Date().getFullYear()
        const startYear = 2019
        return currentYear - startYear
    }

    return <div className="grid sm:grid-cols-3 grid-cols-1  gap-2 max-w-4xl mx-4">
        <div className="col-span-1 flex items-center sm:items-start flex-col">
            <Image className="" alt={position} src={userimage} width={200} height={200} />
            <h1 className="text-3xl font-bold">{position}</h1>
            <p className="text-xl italic" >Octavio Martínez</p>
            <small className="text-lg text-slate-500" >Zenx5</small>
        </div>
        <div className="col-span-1 sm:col-span-2 text-md">
            <p className="mb-4">Hola, aprendí a programar con 12 años haciendole ingenieria inversa a un <span className="font-bold">Script de Pascal</span>, y desde allí nació mi pasión por el código.</p>
            <p className="mb-4">Ahora mismo tengo <span className="font-bold">{experienceYear()} años</span> desarrollando diferentes soluciones de software para varias agencias, donde he trabajado con <span className="font-bold">landing pages, ecommerce, apps web y movil</span>.</p>
            <span className="flex flex-col-reverse">
                <input type="checkbox" className="peer opacity-0" id="more" />
                <label className="sm:hidden cursor-pointer peer-checked:hidden border border-black rounded py-1 px-4 inline w-fit" htmlFor="more">Mas..</label>
                <label className="!sm:hidden cursor-pointer peer-checked:sm:hidden peer-checked:inline mt-2 border border-black rounded py-1 px-4 hidden w-fit" htmlFor="more">Menos..</label>
                <span className="overflow-hidden block h-fit max-h-0 peer-checked:max-h-max peer-checked:min-h-[100px] sm:max-h-max sm:min-h-[100px]">
                    <p className="mb-4">He desempeñado diferentes roles, no solo entre <span className="font-bold">frontend</span> y <span className="font-bold">backend</span>, sino que también he podido <span className="font-bold">líderar equipos</span> y se me ha confiado la <span className="font-bold">calidad del código y las buenas practicas</span>.</p>
                    <p>También de desarrollado algunas ideas propias que puedes observar a continuación.</p>
                </span>
            </span>
        </div>
    </div>
}