import Link from "next/link"
import CardPing from "@/components/CardPing"
import { getArticlesByAuthor, getExtrat } from "@/services/scraping"

export default async function Articles() {
    const articles = await getArticles()

    return <CardPing className="col-span-1 md:col-start-3 col-start-1" isContent>
        {articles.map( (article:any) => <Link key={article.id} target="_blank" href={article.href} className="py-4">
            <h2 className="text-xl opacity-70">{article.title}</h2>
            <p className="text-sm opacity-50">{article.extract}</p>
        </Link>)}
    </CardPing>
}

async function getArticles() {
    let index = 0
    const result = []
    const articles:any[] = await getArticlesByAuthor('zenx5')
    console.log( articles )
    for( const article of articles ) {
        const [link] = article.link.split('?')
        result.push({
            id: index,
            ...article,
            extract: await getExtrat(link)
        })
        index++
    }
    return result
}