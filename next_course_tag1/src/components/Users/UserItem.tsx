import React from 'react'
import Link from 'next/link'

const UserItem = ({ name, email, id }: { name: string, email: string, id: string }) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>Email: {email}</p>
            <Link href={`/users/${id}`}>More Details</Link>
        </div>
    )
}

export default UserItem
