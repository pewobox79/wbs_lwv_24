import { useEffect, useState } from "react"
import BlogItem from "./BlogItem"

const BlogSection = () => {

    const URL = 'https://jsonplaceholder.typicode.com/posts'

    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        //server response delay simulation with setTimeout() of 2sec
        setTimeout(() => {

            fetch(URL)
                .then((res) => res.json())
                .then(data => {
                    setArticle(data)
                    setIsLoading(false)
                })

        }, 2000)

    }, [])

    const ArticleList = article.map((item:{id: string, title:string}) => {
        return <BlogItem
            key={item.id}
            id={item.id}
            title={item.title} />
    })

    return (
        <div>
            <h3>BlogSection</h3>
            {isLoading ? <p>data is Loading...</p> : ArticleList}
        </div>
    )
}

export default BlogSection
