import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const SingleArticle = () => {

    const { id } = useParams();

    const [selectedArticle, setSelectedArticle] = useState({
        title: "",
        body: "",
        id: ""
    });

    const [isLoading, setIsLoading] = useState(true);

    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    useEffect(() => {

        fetch(URL)
            .then(res => {

                if (!res.ok) {
                    throw new Error("error happend")
                }

                return res.json()
            })
            .then(data => {
                setSelectedArticle(data)
                setIsLoading(false)
            })



    }, [URL])


    if (isLoading) return <p>Article is loading...</p>


    return (
        <div>
            <h1>{selectedArticle.title} - Number {selectedArticle.id}</h1>
            <p>{selectedArticle.body}</p>
        </div>
    )
}

export default SingleArticle
