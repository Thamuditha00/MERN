import { useState } from "react"
import Select from "react-select"

const register = require("../registerNlogin/register")

export default function RegisterForm() {

    const options = [
        { value: "Nurse", label: "Nurse" },
        { value: "Doctor", label: "Doctor" },
        { value: "Lab", label: "Lab" },
        { value: "Pharmacy", label: "Pharmacy" },
        { value: "manager", label: "Manager" }
    ]

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userType, setUserType] = useState("")

    function registerUser() {
        register.register({ username, password, description: userType })
        setUsername("")
        setPassword("")
        setUserType("")
    }

    return (
        <div>
            <form action="/">
                <div className="title">
                    <h2>Register</h2>
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

                    <div>
                        <Select options={options} onChange={(e) => setUserType(e.value)} />
                    </div>
                </div>
                <button type="button" onClick={registerUser}>Register</button>
            </form>
        </div>
    )
}