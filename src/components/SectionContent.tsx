export default function SectionContent({ title, children }: { title: string, children: any }) {

    return <p className="relative py-4 group/section pt-4">
        <span className="absolute top-0 group-hover/section:opacity-40 opacity-10 text-xs right-1 uppercase">{title}</span>
        {children}
    </p>
}