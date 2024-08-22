import Image from "next/image"
import CardPing from "@/components/CardPing"
import ListLinks from "@/components/ListLinks";

import { links } from "@/tools/constants"

export default function Header() {
    const userimage = "https://avatars.githubusercontent.com/u/26119733?v=4"

    return <CardPing className="w-full max-w-4xl grid grid-cols-3 mb-10 md:mx-auto mx-5">
            <div className="py-2 px-4 rounded-lg text-black col-span-2">
                <div className="flex flex-row gap-5 items-center">
                    <Image className="rounded-full" alt="me" src={userimage} width={50} height={50} />
                    <span>
                        <h1 className="text-xl opacity-70">Octavio Martinez - Fullstack</h1>
                        <small className="text-lg opacity-50">Zenx5</small>
                    </span>
                </div>
            </div>
            <div className="col-span-1 col-start-3 flex justify-center items-center">
                <ListLinks links={links} currentLang={'es'} />
            </div>
        </CardPing>
}