import { Suspense } from "react";
import Asking from "@/components/Asking";
import Articles from "@/sections/Articles";
import Details from "@/sections/Details";
import MainContent from "@/sections/MainContent";
import ArticleSkeleton from "@/sections/ArticleSkeleton";
import DetailsSkeleton from "@/sections/DetailsSkeleton";



export default async function Page(){

    return <>
            <MainContent />
            <div className="flex flex-col gap-4">
                <Suspense fallback={<ArticleSkeleton />}>
                    <Articles />
                </Suspense>
                <Suspense fallback={<DetailsSkeleton />}>
                    <Details />
                </Suspense>
            </div>
            <Asking />
        </>
}