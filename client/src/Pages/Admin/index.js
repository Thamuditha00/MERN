import React, { useState, useEffect, useRef } from "react"
import  ReactDOM  from "react-dom/client"
import Records from "./Components/Records"
import CreateForm from "./Components/createForm.jsx"
import DeleteForm from "./Components/deleteForms.jsx"
import UpdateForm from "./Components/updateForm.jsx"
import Axios from "axios"

const retrieve = require("./CRUD/getRecords")

export default function AdminPage(props) {

    const [operation, setOperation] = useState("")
    const [message, setMessage] = useState("")
    const [records,setRecords] = useState([])


    useEffect(() => {

    }, [])

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
                //
                console.log(response)
                const r = ReactDOM.createRoot(document.getElementById("right"));
                r.render(<Records data = {response}/>)
                //
                // setRecords(response.map( (record, no) => {
                //     <tr key={record._id} >
                //         <td>{no}</td>
                //         <td>{record.username}</td>
                //         <td>{record.description}</td>
                //     </ tr>
                // } ))
            })
    }

    function RenderRecords() {
        return records.map( (record, recordNo) => {
            console.log(record)
        // <tr key={record._id} >
        //     <td>{recordNo}</td>
        //     <td>{record.username}</td>
        //     <td>{record.description}</td>
        // </ tr>
    })}

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

                    <div className="right" id="right">


                        {records.length === 0
                            ? <h2>Select an operation</h2>
                            : <p>hello</p>


                        }

                    </div>

                </div>

            </div>




        </div >
    )
}


