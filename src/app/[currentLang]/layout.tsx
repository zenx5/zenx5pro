import { DropDown } from "@/components/Index"
import { langs } from "@/tools/constants"

export default function Layout({ children, params }: { children: React.ReactNode, params:any }) {
    const { currentLang } = params

    return <>
        { children }
        <div className="absolute top-[20px] right-[20px]">
            <DropDown label={currentLang} items={langs} />
        </div>
    </>
}