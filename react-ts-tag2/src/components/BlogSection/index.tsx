import BlogItem from "./BlogItem"
import { useFetch } from "../../hooks/useFetch"

const BlogSection = () => {

    const URL = 'https://jsonplaceholder.typicode.com/posts'

    /* const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(false); */


    const { data, isFetchLoading, error} = useFetch(URL);
    console.log("useFetch", data, error, isFetchLoading)

    /* useEffect(() => {
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

    }, []) */

    const ArticleList = data.data?.map((item:{id: string, title:string}) => {
        return <BlogItem
            key={item.id}
            id={item.id}
            title={item.title} />
    })

    return (
        <div>
            <h3>BlogSection</h3>
            {isFetchLoading ? <p>data is Loading...</p> : ArticleList}
            {error && <p>{error?.message}</p>}
        </div>
    )
}

export default BlogSection
