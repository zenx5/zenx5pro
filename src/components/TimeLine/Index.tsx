import { useState, useRef, useEffect } from 'react';
import EventItem from './EventItem';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function TimeLine ({ events }: TimelineProps) {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const groupBy = (arr: any[], fn: Function) => {
    return arr.reduce((acc, item) => {
      const key = fn(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }

  return (
    <div className="w-full overflow-x-auto pb-32 border border-blue-200" ref={scrollContainerRef}>
      <div className="relative min-w-max ">
        <div className="absolute top-[41%] left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
        <div className="relative flex justify-center items-center p-4 h-80 gap-10 top-[20%]" >
          {
            (Object.values(groupBy(events, ({date}:{ date:string})=> date.split('-')[0] ) ) as TimelineEvent[][])
              .map( (groupEvents:TimelineEvent[]) => <span className="group/year relative flex justify-around p-0 items-center w-fit" key={groupEvents[0].date.split('-')[0]}>
                <h2 className="absolute -top-12 left-1 bg-blue-300 group-hover/year:bg-blue-500 text-white px-2">{groupEvents[0].date.split('-')[0]}</h2>
                {groupEvents.map((event:TimelineEvent) => <EventItem key={event.id} steps={event?.steps ?? 1} event={event} onHover={setActiveEvent} />)}
              </span>
              )
          }
        </div>
      </div>
      {activeEvent && (
          <div className="absolute mx-auto w-full left-0 overflow-hidden">
            <div className="realtive mx-auto transform  mb-6 w-64 h-fit bg-white rounded-lg shadow-lg p-4 z-20">
                <h3 className="font-bold text-lg mb-2">
                <span className="text-gray-600 text-sm mr-1">Titulo:</span>
                {activeEvent?.title}
                </h3>
                <p className="text-sm text-gray-600">{activeEvent?.description}</p>
            </div>
          </div>
          )}
    </div>
  );
};

