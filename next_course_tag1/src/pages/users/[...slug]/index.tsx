import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Head from 'next/head'

const SingleUser = () => {
    const params = useParams()

    const [selectedUser, setSelectedUser] = useState<{ name: string, email: string }>({ email: "", name: "" })


    // wenn [id] als params in "pages/[id]"" existiert, dann ist der useParams Rückgabewert ein object {id: "3"}

    // wenn [...slug] => abfangen ALLER routes, dann wird useParams() ein Array zurück geben ["3", "hallo", "address"]

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${params ? params.slug[0] : "1"}`)
            .then(res => res.json())
            .then(data => setSelectedUser(data))

    }, [params])

    return (
        <div>
            <Head>
                <title>{selectedUser?.name} Profile</title>
                <meta
                    name="description"
                    content={`das ist das profile von ${selectedUser?.name}`} />
            </Head>
            <h1>{selectedUser?.name}</h1>
            <p>Email: {selectedUser.email}</p>
        </div>
    )
}

export default SingleUser
