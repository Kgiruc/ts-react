import { useContext } from "react"
import { UserContext } from "./UserContext"

function User() {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
            userContext.setUser({
                name: 'rufi',
                email: 'rufixcer32@gmail.com'
            })
    }
    const handleLogout = () => {
            userContext.setUser(null)
    }

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is {userContext.user?.name}</p>
            <p>User email is {userContext.user?.email}</p>
        </>
    )
}

export default User