import Link from "next/link"

export default function ButtonLink({ children, href, outlined, ...props }:{ children:any, href:string, outlined:boolean }) {

    return <Link
      {...props}
      href={href}
      target='_blank'
      className="text-indigo-500 hover:text-indigo-700 text-xl p-1 flex flex-row items-center justify-center gap-1 relative">
        { children }
    </Link>
  }