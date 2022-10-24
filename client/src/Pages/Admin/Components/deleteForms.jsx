import { useState } from "react"


const deleteUser = require("../CRUD//deleteUser")

export default function DeleteForm(states) {

    const [username, setUsername] = useState("")


    function deleteUSER() {
        deleteUser.deleteUser(username)
        setUsername("")
    }

    return (
        <div>
            <form action="/">
                <div className="title">
                    <h2>Delete a user</h2>
                </div>
                <div className="info">
                    <input type="text"
                        placeholder="username of the user"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />

                </div>
                <button type="button" onClick={deleteUSER}>Delete</button>
            </form>
        </div>
    )
}