import { useMutation } from '@apollo/client'
import {useState} from 'react'
import { ADD_CLIENT } from '../graphql/mutations/clientMutation'
import { GET_CLIENTS } from '../graphql/queries/clientQueries'

const NewClientForm = () => {

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const [addClient] = useMutation(ADD_CLIENT,{
        variables:{
            name: user.name,
            phone: user.phone,
            email: user.email
        },
        refetchQueries:[{query: GET_CLIENTS}]
    })





    function handleChange(e:{target:{name: string, value: string}}) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e:{preventDefault: ()=>void}){
        e.preventDefault()
        addClient()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='name' onChange={handleChange} />
            <input type="text" name="email" placeholder='email' onChange={handleChange} />
            <input type="text" name="phone" placeholder='phone' onChange={handleChange} />
            <button type="submit">Add new user</button>
        </form>
    )
}

export default NewClientForm
