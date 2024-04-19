import { useQuery } from "@apollo/client"
import ClientItem from "./ClientItem"
import { GET_CLIENTS } from "../graphql/queries/clientQueries"
import NewClientForm from "./NewClientForm"


const Clients = () => {

    const { data, loading, error } = useQuery(GET_CLIENTS)

    if(loading) return <div>Data ist Loading...</div>
    if(error) return <div>Error ...</div>

    const ClientList = data.clients.map((item:{name: string, id: string, email:string})=>{

        return <ClientItem 
        key={item.id} 
        name={item.name} 
        id={item.id}
        email={item.email}
        />

    })

    return (
        <div>
            <h3>All Clients</h3>
            <NewClientForm/>
            {ClientList}
        </div>
    )
}

export default Clients
