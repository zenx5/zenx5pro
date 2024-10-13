interface SkillContentType {
    key: string
    description: string
    items: {
        title: string
        href: string
        description: string
    }[]
}

interface ProjectType {
    id?:                 string
    title:              string
    description?:       string
    website?:           string
    repository?:        string
    privateRepository?: boolean
    tabs?:              string[]
}
interface TimelineEvent {
    id: number;
    date: string;
    tags: string[];
    title: string;
    steps?: number;
    enddate?: string;
    description: string;
}