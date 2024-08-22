import { JSDOM } from 'jsdom'


export const getArticlesByAuthor = async (author:string, max:number) => {
    const response = await fetch(`https://www.linkedin.com/today/author/${author}`)
    const html = await response.text()
    const dom = new JSDOM(html)
    const document = dom.window.document
    const articles = document.querySelectorAll('.article-card')

    const result:any[] = []

    articles.forEach( async (item) =>  {
        if( !item ) return;
        const title = item?.querySelector('.article-card__title')?.textContent
        const [href] = item?.querySelector('.article-card__title--link')?.getAttribute('href')?.split('?') as string[]
        const date = item.querySelector('.article-card__meta-info')?.textContent
        const interactions = item.querySelector('.article-card__meta-info.article-card__meta-info--counts')?.textContent as string
        result.push( {
            title,
            href,
            date,
            interactions: getInteractions(interactions)
        } )
    } )

    return result.slice( 0 , max ?? result.length )
}


const getInteractions = (content:string) => {
    if( !content ) return ""
    const labels = content.replaceAll(/[0-9]{1,}/g, '').split(" ").filter( (element:string) => element!=="" )
    const counts = content.replaceAll(/[a-zA-Z]{1,}/g, '').split(" ").filter( (element:string) => element!=="" )
    return labels.map( (label, index) => `${label} ${counts[index]}` ).join(", ")
}