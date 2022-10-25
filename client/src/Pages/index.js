import { Link, useNavigate } from "react-router-dom"
import RegisterForm from "./components/RegisterForm"

import React, { useState, useEffect } from "react"
import Axios from "axios"

const URL = "http://localhost:5000"

async function Login(username, password) {

    const navigate = useNavigate()

    const response = await Axios.post(URL + "/login", {username, password})

    const userType = response.data.user.description.toLowerCase()
    console.log(userType)
    // setUsername("")
    // setPassword("")

    navigate("/" + userType)
    
}

function LoginForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    

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
                <button type="button" onClick={Login(username,password)} >Login</button>
            </form>
        </div>
    )
}

function IndexPage() {

    
    const navigate = useNavigate()

    const [operation, setOperation] = useState("")

    


    function operationRender() {
        switch(operation) {
            case "register":
                return <RegisterForm />
            case "login":
                return <LoginForm />

        }
    }

    useEffect(() => {
    }, [])

    return (
        <div className="container">
            <div className="navbar">
                <ul>
                    <li><a>Home</a></li>
                </ul>

            </div>

            <div className="main">
                <div className="sidemenu">
                <ul>
                    <li><a onClick={(e) => setOperation("login")}>Login</a></li>
                    <li><a onClick={(e) => setOperation("register")}>Register</a></li>
                </ul>
                </div>
                
                <div>
                    {operationRender()}
                </div>
            </div>
        </div>
    );
}

export default IndexPage

