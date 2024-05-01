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
        <h2 className="text-2xl font-bold">Links</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 md:grid-rows-1 grid-rows-4 gap-4">
            {links.map( (link,index) => <ButtonLink key={index} href={getByLang(link.url)} bgcolor={link.bgcolor} color={link.color} outlined={link?.outlined as boolean}>
                <MdiIcon icon={link.icon} size={1} />
                <span>{ getByLang(link.label) }</span>
            </ButtonLink> )}
        </div>
    </>
}