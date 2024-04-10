import Link from "next/link"

export default function Skills({ labelSkill }:{ labelSkill: string[] }) {

    return <span>
        <h2 className="text-2xl font-bold text-center">Skills</h2>
        <div className="flex flex-col gap-1 mx-4 group">
            <span className="text-sm text-center italic group-hover:opacity-100 opacity-20 transition-all duration-500">Has click y mira como he usado mis skills</span>
            <div className="flex flex-row border gap-2 !border-black rounded-md py-4 px-10 flex-wrap justify-center">
                { labelSkill.map( (label, index) => <Link key={label}
                    className={"hover:underline cursor-pointer italic px-2" + (labelSkill.length!==index+1 ? " border-black border-r" : "") }
                    href={`?modal=skill&params=name&name=${label.toLowerCase().replace(" ", "-")}`}
                >{label}</Link>)}
            </div>
        </div>
    </span>
}