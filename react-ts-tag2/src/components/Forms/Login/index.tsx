import { useContext, useState } from "react"
import { useLocalStorage } from "../../../hooks/useLocalStorage"
import { UserContext } from "../../../store/contextData"

const INIT_VALUES = {
    username: "",
    password: ""
}

type UserType = {
    username: string,
    password: string
}

const Login = () => {

    const myLocal = useLocalStorage("user_values")
    console.log("my local", myLocal)

    const userState = useContext(UserContext)

    // mit useState wird functional component STATEFUL
    const [user, setUser] = useState<UserType>(INIT_VALUES)

    function handleChange(event: { target: { value: string, name: string } }) {
        setUser({ ...user, [event.target.name]: event.target.value })
    }


    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()
        console.log("submitted", user)
        myLocal.setStoredValue(user);
        userState?.setUser(true)
        setUser(INIT_VALUES)
    }

    return <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label><br />
            <input
                id="username"
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
            /><br />
            <label htmlFor="password">Password</label><br />
            <input id="password" name="password" type="text" value={user.password} onChange={handleChange} /><br />
            <button type="submit">Login</button>
        </form>
    </div>

}

export default Login
