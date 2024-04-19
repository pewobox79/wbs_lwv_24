import { useMutation } from "@apollo/client"
import { DELETE_CLIENT } from "../graphql/mutations/clientMutation"
import { GET_CLIENTS } from "../graphql/queries/clientQueries"

type ClientType = {
    name: string,
    id: string,
    email: string
}
const ClientItem = (props: ClientType) => {

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: {
            id: props.id
        },
        refetchQueries: [{query: GET_CLIENTS}]
    })




    return (
        <div
            style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                margin: "10px 0",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}>

            <h4>{props.name} - {props.id}</h4>
            <p>Email: {props.email}</p>
            <button onClick={() => deleteClient()}>Delete</button>
        </div>
    )
}

export default ClientItem
