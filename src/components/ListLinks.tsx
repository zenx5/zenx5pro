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
        <div className="grid md:grid-cols-4 grid-cols-2 md:grid-rows-1 grid-rows-4 gap-4 mt-4">
            {links.map( (link,index) => <ButtonLink key={index} href={getByLang(link.url)} bgcolor={link.bgcolor} color={link.color} outlined={link?.outlined as boolean}>
                <MdiIcon icon={link.icon} size={1} />
            </ButtonLink> )}
        </div>
    </>
}