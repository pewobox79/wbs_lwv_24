import UserItem from '@/components/Users/UserItem'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const UsersOverview = () => {

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

        return <UserItem key={item.id} name={item.name} id={item.id}email={item.email} />

    })
    return <>
            {isLoading ? <p>Users Loading...</p> : ListOfUsers}
    </>
}

export default UsersOverview
