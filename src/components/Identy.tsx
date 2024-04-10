import Image from "next/image"

interface IdentyProps {
    username: string
    userimage: string
    publicRepos: number
}

export default function Identy({ username, userimage, publicRepos}:IdentyProps) {

    return <>
        <Image className="rounded-full" alt={username} src={userimage} width={200} height={200} />
        <h1 className="text-3xl font-bold">{username}</h1>
        <span className="flex flex-col items-center">
            <small className="text-xl italic" >Octavio Martínez</small>
            <small className="text-xs">Repos: { publicRepos }</small>
        </span>
    </>
}