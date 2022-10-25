import React from "react";
import {Single} from "./Single";
// function Record({record}) {
//     return (
        
//     )
// }

function retest(records) {
    console.log(records)
}


export default async function Records({data}) {
    
    const records = data
    console.log(records)

    return (
        <table className="patients">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Description</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
                    {records.map((record) => {return <Single record = {record}/>})}
                
            </tbody>

        </table>
    )
}