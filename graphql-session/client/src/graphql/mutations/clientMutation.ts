import { gql } from "@apollo/client";


const DELETE_CLIENT = gql`

    mutation deleteClient($id: String!){

        deleteClient(id: $id){
            id, 
            name,
            email
        }
    }

`

const ADD_CLIENT = gql`


    mutation addClient($name: String!, $email: String!, $phone: String!){

        addClient(name: $name, email: $email, phone: $phone){
            id,
            name,
            email
        }
    }

`

export { DELETE_CLIENT, ADD_CLIENT }