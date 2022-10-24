import { Link, useNavigate } from "react-router-dom"

import React, { useState, useEffect } from "react"
import Axios from "axios"

const URL = "http://localhost:5000"

function IndexPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function loginCheck() {

        const loginCredentials = { email, password }

        Axios.post(URL + "/login", loginCredentials
        )
            .then((response) => {
                if (response.data.Authenticated === "true") {
                    navigate("/admin")
                }
            }).catch((err) => {
                console.log(err)
            })



    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <form>
                <div>
                    <input
                        type="text"
                        value={email}
                        placeholder="your email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        placeholder="your password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="button" onClick={loginCheck}>Login</button>
                </div>
            </form>

        </div>
    );
}

export default IndexPage

