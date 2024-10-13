import Link from "next/link";
import Image from "next/image";
import CardPing from "@/components/CardPing";

export default async function DetailsSkeleton() {
    

    return <CardPing className="col-span-1 md:col-start-3 col-start-1" isContent h-fit>
        <h2 className="font-bold text-xl mb-2">Contribuciones</h2>
        <ul>
            <li>
                <Link href="https://www.npmjs.com/~zenx5?activeTab=packages" target="_blank" className="flex flex-row items-center justify-between hover:bg-indigo-100 px-4 rounded-full">
                    <span className="flex flex-row justify-center w-16">
                        <Image src="/npm.png" alt="npm" width={50} height={50}/>
                    </span>
                    <span className="text-lg p-1 font-bold opacity-50"> 0 </span>
                </Link>
                <Link href="https://github.com/zenx5?tab=repositories" target="_blank" className="flex flex-row items-center justify-between hover:bg-indigo-100 px-4 rounded-full">
                    <span className="flex flex-row justify-center w-16">
                        <Image src="/github.png" alt="npm" width={30} height={20}/>
                    </span>
                    <span className="text-lg p-1 font-bold opacity-50"> 0 </span>
                </Link>
                <div className="mt-4 flex flex-col gap-2 border-t p-4">
                    <Link href="?" className="text-center text-white font-bold rounded-lg bg-indigo-500 py-1 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-400"> . . . </Link>
                </div>
            </li>
        </ul>
    </CardPing>
}