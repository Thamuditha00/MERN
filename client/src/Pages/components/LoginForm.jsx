import { useState } from "react"
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom"

//const login = require("../registerNlogin/login")

export default function RegisterForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function Login() {

        const navigate = useNavigate()
    
        const response = await Axios.post(URL + "/login", {username, password})
    
        const userType = response.data.user.description.toLowerCase()
        
        setUsername("")
        setPassword("")

        navigate("/" + userType)
        
    }

    return (
        <div>
            <form action="/">
                <div className="title">
                    <h2>Login</h2>
                </div>
                <div className="info">
                    <input type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />

                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />


                </div>
                <button type="button" onClick={Login} >Login</button>
            </form>
        </div>
    )
}