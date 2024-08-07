import Articles from "@/sections/Articles";
import Header from "@/sections/Header";
import MainContent from "@/sections/MainContent";



export default async function Page(){

    return <div className="flex flex-col gap-5 items-center justify-center h-auto py-20 ">
        <Header />
        <div className="w-full max-w-4xl grid md:grid-cols-3 grid-cols-1 gap-5 md:mx-auto mx-5">
            <MainContent />
            <Articles />
        </div>
    </div>
}