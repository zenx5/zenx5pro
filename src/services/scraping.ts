import { JSDOM } from 'jsdom'


export const getArticlesByAuthor = async (author:string, max:number) => {
    const response = await fetch(`https://www.linkedin.com/today/author/${author}`)
    const html = await response.text()
    const dom = new JSDOM(html)
    const document = dom.window.document
    const articles = document.querySelectorAll('.article-card')

    const result:any[] = []

    for( const item of articles ) {
        const title = item.querySelector('.article-card__title')?.textContent
        const [href] = item.querySelector('.article-card__title--link')?.getAttribute('href').split('?')
        const date = item.querySelector('.article-card__meta-info')?.textContent
        const interactions = item.querySelector('.article-card__meta-info.article-card__meta-info--counts')?.textContent
        result.push( {
            title,
            href,
            date,
            interactions: getInteractions(interactions),
            extract: await getExtrat(href)
        } )
    }

    return result.slice( 0 , max ?? result.length )
}

export const getExtrat = async (link:string) => {
    const result = []
    const response = await fetch(link)
    const html = await response.text()
    const dom = new JSDOM(html)
    const document = dom.window.document
    const contents = document.querySelectorAll('.article-main__content')
    let index = 0
    for(const item of contents) {
        if( index < 2 ) {
            result.push( item.textContent )
        }
        index++
    }
    return result.join(" ").slice(0,60)
}


const getInteractions = (content:string) => {
    if( !content ) return ""
    const labels = content.replaceAll(/[0-9]{1,}/g, '').split(" ").filter( (element:string) => element!=="" )
    const counts = content.replaceAll(/[a-zA-Z]{1,}/g, '').split(" ").filter( (element:string) => element!=="" )
    return labels.map( (label, index) => `${label} ${counts[index]}` ).join(", ")
}