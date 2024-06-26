import Link from "next/link"
import CardPing from "@/components/CardPing"
import { getArticlesByAuthor, getExtrat } from "@/services/scraping"

export default async function Articles() {
    const articles = await getArticles()
    const getInteractions = (content:string) => {
        if( !content ) return ""
        const labels = content.replaceAll(/[0-9]{1,}/g, '').split(" ").filter( (element:string) => element!=="" )
        const counts = content.replaceAll(/[a-zA-Z]{1,}/g, '').split(" ").filter( (element:string) => element!=="" )
        return labels.map( (label, index) => `${label} ${counts[index]}` ).join(", ")
    }

    return <CardPing className="col-span-1 md:col-start-3 col-start-1" isContent h-fit>
        {articles.map( (article:any) => <Link key={article.id} target="_blank" href={article.href} className="py-4">
            <h2 className="text-xl opacity-70">{article.title}</h2>
            <p className="text-sm opacity-50">{article.extract}...</p>
            <small className="text-xs opacity-50">{getInteractions(article.interactions)}</small>
        </Link>)}
    </CardPing>
}

async function getArticles() {
    let index = 0
    const result = []
    const articles:any[] = await getArticlesByAuthor('zenx5', 4)
    for( const article of articles ) {
        const link = article.href
        result.push({
            id: index,
            ...article,
            extract: await getExtrat(link)
        })
        index++
    }
    return result
}