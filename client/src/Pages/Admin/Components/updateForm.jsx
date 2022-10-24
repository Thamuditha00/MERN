import { useState } from "react"


const updateUsr = require("../CRUD//updateUser")

export default function UpdateForm(states) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    async function updateUser() {
        updateUsr.updateUser({ username, password })
        setUsername("")
        setPassword("")
    }

    return (
        <div>
            <form action="/">
                <div className="title">
                    <h2>Update a user</h2>
                </div>
                <div className="info">
                    <input type="text"
                        placeholder="username of the user"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />

                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                </div>
                <button type="button" onClick={updateUser}>Update</button>

            </form>

        </div>
    )
}