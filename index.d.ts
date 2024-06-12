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