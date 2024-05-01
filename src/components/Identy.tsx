import Image from "next/image"

interface IdentyProps {
    position: string
    userimage: string
    publicRepos: number
}

export default function Identy({ position, userimage, publicRepos}:IdentyProps) {

    return <>
        <Image className="rounded-full" alt={position} src={userimage} width={200} height={200} />
        <h1 className="text-3xl font-bold">{position}</h1>
        <span className="flex flex-col items-center">
            <small className="text-xl italic" >Octavio Martínez (Zenx5)</small>
        </span>
    </>
}