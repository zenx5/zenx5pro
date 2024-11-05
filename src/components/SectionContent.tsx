export default function SectionContent({ title, children }: { title: string, children: any }) {

    return <p className="relative py-4 group/section pt-4">
        <span className="absolute top-0 group-hover/section:text-indigo-600 group-hover/section:opacity-80 opacity-10 text-xs right-1 uppercase">{title}</span>
        {children}
    </p>
}