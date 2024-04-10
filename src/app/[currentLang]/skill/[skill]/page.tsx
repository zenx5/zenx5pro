export default function Page({ params }: { params: { skill:string, currentLang:string } }){
    const { skill, currentLang } = params
    return <div className="flex flex-col gap-5 items-center justify-center h-screen ">
        <h1 className="text-3xl font-bold">{skill}</h1>
    </div>


}