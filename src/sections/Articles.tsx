import Link from "next/link"
import CardPing from "@/components/CardPing"
import { getArticlesByAuthor } from "@/services/scraping"

export default async function Articles() {
    const articles = await getArticlesByAuthor('zenx5', 5)

    return <CardPing className="col-span-1 md:col-start-3 col-start-1" isContent h-fit>
        {articles.slice(0,5).map( (article:any, index:number) => <Link key={index} target="_blank" href={article.href} className="py-2">
            <h2 className="text-xl opacity-70">{article.title}</h2>
            <p className="text-sm opacity-50">{article.extract}...</p>
            <small className="text-xs opacity-50">{article.interactions}</small>
        </Link>)}
    </CardPing>
}

