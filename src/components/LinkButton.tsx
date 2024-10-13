import Link from "next/link"

export default function LinkButton({ href, target, label, children }: { href: string, target?: string, label:string, children?: any }) {

    return <Link
        href={href}
        target={target}
        className="bg-indigo-500 text-white items-center flex flex-row p-1 rounded w-fit h-fit gap-2">
        <span className="text-sm">{label}</span>
        {children}
    </Link>
}