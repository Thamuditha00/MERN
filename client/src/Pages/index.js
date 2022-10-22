import { Link, useNavigate } from "react-router-dom"

import React, { useState, useEffect } from "react"
import Axios from "axios"


function IndexPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function loginCheck(e) {
        e.preventDefault()
        console.log("here")
        const loginObject = (email, password)

        Axios.post("/login", loginObject)
            .then((response) => {
                console.log(response)
            })
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <form onSubmit={loginCheck}>
                <div>
                    <input type="text" value={email} placeholder="your email" onChange={(e) => { setEmail(e.target.value) }}></input>
                </div>
                <div>
                    <input type="text" value={password} placeholder="your password" onChange={(e) => console.log(e.target.value)}></input>
                </div>
                <div>
                    <button type="button"></button>
                </div>
            </form>

        </div>
    );
}

export default IndexPage;
