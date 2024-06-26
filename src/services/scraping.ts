import puppeteer, { Page } from "puppeteer"

export const loadPage = async (link:string, selector:string) => {
    try {
        const browser = await puppeteer.launch({ headless:true })
        const page = await browser.newPage()
        await page.goto(link)
        return [page, await page.$$(selector)]
    } catch( error:any ) {
        return [null, null]
    }
}

export const getArticlesByAuthor = async (author:string) => {
    const result = []
    const [page, articles] = await loadPage(`https://www.linkedin.com/today/author/${author}`, '.article-card') as [Page, HTMLElement[]]

    if( !articles || !page ) return []

    for( const element of articles ) {
        const article = await page.evaluate( item => {
            const title = item.querySelector('.article-card__title')?.textContent
            const href = item.querySelector('.article-card__title--link')?.getAttribute('href')
            const date = item.querySelector('.article-card__meta-info')?.textContent
            const interactions = item.querySelector('.article-card__meta-info.article-card__meta-info--counts')?.textContent
            return {
                title,
                href,
                date,
                interactions
            }
        }, element)
        result.push( article )
    }
    return result
}

export const getExtrat = async (link:string) => {
    const result = []
    const [page, contents] = await loadPage(link, '.article-main__content') as [Page, HTMLElement[]]

    if( !contents || !page ) return []

    let index = 0
    for(const element of contents) {
        if( index < 2 ) {
            const content = await page.evaluate( item => item.textContent, element )
            result.push( content )
        }
        index++        
    }
    return result.join(" ").slice(0,60)
}

