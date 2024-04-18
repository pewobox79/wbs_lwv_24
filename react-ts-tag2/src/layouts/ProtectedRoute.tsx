import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../store/contextData"

const ProtectedRoute = () => {
    
    const user = useContext(UserContext)

    if(!user?.user){
        return <Navigate to="/login" replace/>
    }
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default ProtectedRoute
