
export default function CardPing({ isContent, className, children }:{ isContent?:boolean, className:string, children:any }) {
    const withoutContent = "relative p-4 border-t border-l border-indigo-50 hover:border-indigo-100 rounded-ee-lg shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.2)] shadow-indigo-400 hover:shadow-indigo-500"
    const withContent = "relative p-4 border-t border-l border-indigo-50 hover:border-indigo-100 rounded-ee-lg shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.2)] shadow-indigo-400 hover:shadow-indigo-500 flex flex-col gap-4 bg-white divide-y"


    return <span className={[(isContent ? withContent : withoutContent), className , "group"].join(" ") }>
        { children }
        <span className="absolute -top-1 -left-1 hidden h-3 w-3 group-hover:flex">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
        </span>
    </span>
}