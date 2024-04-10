"use client"
export default function SkillDetails({ name }:{ name:string }){
    

    return <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-center">Skill Details</h2>
        <div className="flex flex-col gap-2 mx-4">
            <span className="text-sm text-center italic">Click on the skill to see more details</span>
            <div className="flex flex-col gap-2">
                <span className="text-center text-lg font-bold first-letter:uppercase">{name}</span>
                <span className="text-center text-lg font-bold">Skill Description</span>
            </div>
        </div>
    </div>
}