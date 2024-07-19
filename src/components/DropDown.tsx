import Link from "next/link"

export default function DropDown({ label, items }:{ label:string, items:string[] }) {

    return <label className="flex flex-col cursor-pointer text-white rounded">
        <span className="uppercase px-6 py-2 bg-[#6200ee] rounded-md text-sm">{ label }</span>
        <input type="checkbox" className="peer sr-only"/>
        <ul className="peer-checked:block hidden top-0 bg-white text-black border border-slate-300 shadow-lg rounded-md text-center">
            { items.map( item => <li key={item} className="hover:bg-slate-100">
                <Link href={`/${item}`} className="capitalize block p-2">{ item }</Link>
            </li>) }
        </ul>
    </label>
}