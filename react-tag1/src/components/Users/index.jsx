import UserItem from "./components/UserItem";
import { userData } from "../../store/userData";

const Users = () => {


    const UserList = userData.map((item) => {

        // {...item} => spread operator - Alle daten aus dem ITEM werden weitergegeben!

        return <UserItem
            key={item.id}
            {...item} 
            />
    })

    return <div>
        <h2>UserList</h2>
        {UserList}
    </div>

}

export default Users
