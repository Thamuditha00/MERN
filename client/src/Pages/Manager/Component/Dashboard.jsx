import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Views } from "./Views";

export function Dashboard(){

    const navigate = useNavigate()

    async function DisplayRecord(){
        await fetch('http://localhost:5000/manager/viewward').then((Response) => {
            return Response.json()
        }).then((data)=>{
            const view = ReactDOM.createRoot(document.getElementById("views"));
            view.render(<Views data = {data}/>)
        })
    }

    function DisplayProfile(){

    }

    async function Logout(){
        await fetch('http://localhost:5000/logout', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"

            }, body: JSON.stringify({ message: "Logout request" })
        }).then((response) => {
            navigate({ pathname: "../" }, {replace: true})
        })
    }

    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <ul>
                        <li><a>Home</a></li>
                    </ul>
                </div>

                <div className="main">

                    <div className="sidemenu">
                        <ul>
                            <li><a onClick={DisplayRecord}>Wards</a></li>
                            <li><a onClick={Logout}>Logout</a></li>
                        </ul>
                    </div>

                    <div className="views" id="views">

                        
                    </div>

                </div>

            </div>

        </div>
    );
}