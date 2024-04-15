import { Link } from "react-router-dom"

const UserItem = ({name, id}) => {

    const styling = {
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        margin: "5px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
    return (
        <div style={styling}>
            <h3>{name}</h3>
            
            <Link to={`/users/${id}`}>More details about {name}</Link>
        </div>
    )
}

export default UserItem
