import UserItem from '@/components/Users/UserItem'
import UsersOverview from '@/components/Users/UsersOverview'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setUsers(data)
            })

    }, [])

    const ListOfUsers = users.map((item: { name: string, id: string, email: string }) => {

        return <UserItem
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email} />

    })
    
    return <>
        <Head>
            <title>Users Page</title>
            <meta name="description" content='Das ist die Übersichtsseite der user' />
        </Head>
        <div>
            <h1>Users</h1>
            {isLoading ? <p>Users Loading...</p> : ListOfUsers}
        </div>

    </>
}

export default Users
