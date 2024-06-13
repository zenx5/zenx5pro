import Link from "next/link"

export default function ButtonLink({ children, href, outlined, ...props }:{ children:any, href:string, outlined:boolean }) {

    return <Link
      {...props}
      href={href}
      target='_blank'
      className="border border-slate-200 shadow-lg hover:shadow bg-white text-black  hover:bg-slate-200 rounded-lg font-normal p-1 flex flex-row items-center justify-center gap-1">
        { children }
    </Link>
  }