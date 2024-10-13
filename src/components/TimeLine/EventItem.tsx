

export default function EventItem({ event, steps, onHover }:{ event: any, steps:number, onHover: (arg0:any|null)=>void }) {


    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        return `${day} ${month}`;
    }

    return <div
        className="flex flex-col items-center mx-4 group/item border border-transparent hover:border-gray-300 rounded-lg hover:shadow-gray-200 shadow-transparent shadow-md py-10 px-4 min-w-32"
        onMouseEnter={() => onHover(event)}
        onMouseLeave={() => onHover(null)}
    >
        <div  className={`mt-2 text-sm font-medium flex flex-row mx-auto w-full ${steps>1 ? 'justify-between': 'justify-center'}`}>
            <div className="transform -rotate-45 origin-top-left text-nowrap" >
                {formatDate(event.date)}
            </div>
            {steps>1 && <div className="transform -rotate-45 origin-top-left text-nowrap">
                {formatDate(event?.enddate)}
            </div>}
        </div>
        <div className={`h-4 rounded-full bg-blue-300 group-hover/item:bg-blue-500 z-10`} style={{ width:`${steps}rem`}}></div>
        <div className="mt-6 flex flex-col flex-wrap justify-center items-center">
        {event.tags.map((tag:string, index:number) => (
            <span
            key={index}
            className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full m-1 w-fit"
            >
            {tag}
            </span>
        ))}
        </div>
    </div>
}