"use client"

import TimeLine from "@/components/TimeLine/Index"

const events = [
    {
        id: 1,
        date: '2023-01-15',
        tags: ['Project Start', 'Planning'],
        title: 'Project Kickoff',
        steps: 1,
        level: 1,
        description: 'Initial meeting to discuss project goals and timeline.',
      },
      {
        id: 2,
        date: '2023-03-01',
        tags: ['Development', 'Frontend'],
        steps: 1,
        level: 2,
        title: 'Frontend Development Begins',
        description: 'Start of the frontend development phase.',
      },
      {
        id: 3,
        date: '2023-05-15',
        tags: ['Development', 'Backend'],
        steps: 10,
        level: 1,
        enddate: '2023-04-2',
        title: 'Backend Integration',
        description: 'Integration of frontend with backend services.',
      }
    ]

export default function Page() {


    return <div className="border border-black w-full col-span-3 p-4">
        <h2 className="text-xl font-bold ">Linea del Tiempo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias aut maxime dolorem praesentium. Officia impedit sint delectus neque pariatur animi facere aspernatur obcaecati dolore tempora sapiente, ab in odio?</p>
        <TimeLine events={events} />
    </div>
}