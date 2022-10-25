import { useState } from "react"
import Select from "react-select"

const create = require("../CRUD/createUser")

export default function CreateForm(states) {

    const options = [
        { value: "Nurse", label: "Nurse" },
        { value: "Doctor", label: "Doctor" },
        { value: "Lab", label: "Lab" },
        { value: "Pharmacy", label: "Pharmacy" }
    ]

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userType, setUserType] = useState("")

    function createUser() {
        create.create({ username, password, description: userType })
        setPassword("")
        setUserType("")
        setUsername("")
    }

    return (
        <div>
            <form action="/">
                <div className="title">
                    <h2>Create a user</h2>
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
                <button type="button" onClick={createUser}>Create</button>
            </form>
        </div>
    )
}