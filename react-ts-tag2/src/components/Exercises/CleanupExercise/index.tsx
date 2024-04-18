import { useState, useEffect } from "react"
import UserButton from "./UserButton"
const CleanupExercise = () => {

    // userdetails ausgeben
    // 4 buttons für unterschiedliche user
    // state für das ändern der user id
    // useEffect der api anspricht 
    // um den effekt zu sehen, muss das NETWORK auf SLOW gedrosselt werden....
    // go to DEVTOOLS - NETWORK und ändere den wert zu SLOW

    
    const [userId, setUserId] = useState("0");
    const [selectedUser, setSelectedUser] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const URL = `https://jsonplaceholder.typicode.com/users/${userId}`

    function handleChange(id: string) {
        setUserId(id)
    }

    useEffect(() => {
        setIsLoading(true)
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(URL, { signal: signal })
            .then(res => res.json())
            .then(data => {
                setSelectedUser(data)
                setIsLoading(false)
            })

        return () => {
            console.log("abbruch fetch")
            controller.abort()
        }

    }, [URL])

    return <div>
        <h3>Clean up Exercise</h3>

        <UserButton
            name="User1"
            id="1"
            handler={handleChange}
        />

        <UserButton
            name="User 2"
            id="2"
            handler={handleChange}
        />

        <UserButton
            name="User 5"
            id="5"
            handler={handleChange}
        />

        <UserButton
            name="User 10"
            id="10"
            handler={handleChange}
        />

        {isLoading ? <p>User {userId} is loading...</p> : <div>
            <h4>User Details für USER {userId}</h4>
            <p>{JSON.stringify(selectedUser)}</p>
        </div>}


    </div>
}

export default CleanupExercise