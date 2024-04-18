import { useEffect, useState } from 'react'
import axios from 'axios'


// daten über API call erhalten
// AXIOS als request handler


export function useFetch(url: string) {

    const [data, setData] = useState({data: []});
    const [isFetchLoading, setIsFetchLoading] = useState(true);
    const [error, setError] = useState({message: "", config: {url: ""}});


    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(()=>{
                //wird immer ausgeführt
                setIsFetchLoading(false)

            })

    }, [url])


    return { data, isFetchLoading, error }
}