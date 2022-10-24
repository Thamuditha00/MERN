import React, { useState, useEffect, useRef } from "react"
import Records from "./Components/Records"
import CreateForm from "./Components/createForm.jsx"
import DeleteForm from "./Components/deleteForms.jsx"
import UpdateForm from "./Components/updateForm.jsx"
import Axios from "axios"

const retrieve = require("./CRUD/getRecords")

export default function AdminPage(props) {

    const [operation, setOperation] = useState("")
    const [message, setMessage] = useState("")
    const records = useRef([])


    useEffect(() => {

    }, [records])

    function renderSwitch() {
        switch (operation) {
            case "create":
                return <CreateForm />
            case "delete":
                return <DeleteForm />
            case "update":
                return <UpdateForm />
        }
    }


    async function getUsers() {
        const c = await retrieve.getRecords().
            then((response) => {
                records.current = response
            })
    }

    function displayRecords(r) {
        console.log(r.current)
    }

    return (
        <div className="container">

            <div className="navbar">
                <ul>
                    <li><a>Admin</a></li>
                </ul>
            </div>

            <div className="main">

                <div className="sidemenu">
                    <ul>
                        <li><a>My Profile</a></li>
                        <li><a onClick={getUsers}>Get users</a></li>
                        <li><a onClick={(e) => setOperation("create")}>Create a user</a></li>
                        <li><a onClick={(e) => setOperation("delete")}>Delete a user</a></li>
                        <li><a onClick={(e) => setOperation("update")}>Update a user</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

                <div className="views">

                    <div className="left">
                        {renderSwitch()}

                    </div>

                    <div className="right">


                        {records.current.length === 0
                            ? <h2>Select an operation</h2>
                            : <h2> case ekak ne</h2>


                        }

                    </div>

                </div>

            </div>




        </div >
    )
}


