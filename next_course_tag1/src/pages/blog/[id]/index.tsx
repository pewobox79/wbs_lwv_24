
// 1. Get Static Path für site Generation
export const getStaticPaths = async () => {

    try {

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        const paths = data.map((item: { id: string | number }) => {

            return {
                params: {
                    id: item.id.toString()
                }
            }


        })

        // das ist der eigentliche return für den nächsten Schritt
        return {
            paths: paths,
            fallback: false
        }



    } catch (err) {
        console.log("error paths", err)
    }

}



// 2. Single Article info
export const getStaticProps = async (context) => {
//context ist das object, was durch den return von getStaticPaths an getStaticProps weitergereicht wird. 
/**
 * Beispiel:
 * const context{
 * params:{
 * id:"2"}}
 */

    const id = context.params.id

    try {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()

        return {
            props: {
                article: data
            }
        }

    } catch (err) {
        console.log("fetch error", err)
    }



}



// 3. render single article
const BlogArticle = ({article}:{article: {body: string, title:string}}) => {
    return <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
    </>
}

export default BlogArticle