import MdiIcon from "./MdiIcon"
import ButtonLink from "./ButtonLink"

interface ListLinksProps {
    links: {
        label: string | { es:string, en:string }
        url: string | { es:string, en:string }
        icon: string
        bgcolor: string
        color: string
        outlined?: boolean
    }[],
    currentLang: string
}

export default function ListLinks({ links, currentLang }:ListLinksProps) {
    const getByLang = (label:any) => ( typeof label === 'string' ) ? label : label[currentLang]

    return <>
        <div className="grid grid-cols-4 grid-rows-1 gap-2 mt-4">
            {links.map( (link,index) => <ButtonLink key={index} href={getByLang(link.url)} outlined={link?.outlined as boolean}>
                <MdiIcon icon={link.icon} size={1.5} />
                {link.icon==='mdi-file' && <span className="text-white font-bold text-xs absolute bottom-3">CV</span>}
            </ButtonLink> )}
        </div>
    </>
}