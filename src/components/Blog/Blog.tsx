export default async function Blog() {
    const response = await fetch("https://api.linkedin.com/rest/posts?author=urn:li:person:zenx5&q=author&count=10&sortBy=LAST_MODIFIED",{
        headers: {
            'LinkedIn-Version': '202301'
        }
    })

    const data = await response.json()

    console.log( data )


    return <div className="w-full max-w-4xl mx-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 justify-between items-center">

    </div>
}