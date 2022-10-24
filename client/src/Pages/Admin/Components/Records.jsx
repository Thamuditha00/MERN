import React from "react";

function Record(record, recordNo) {
    return (
        <tr key={record._id} >
            <td>{recordNo}</td>
            <td>{record.username}</td>
            <td>{record.description}</td>
        </ tr>
    )
}

function test(records) {
    console.log(records)
}


export default async function Records(records) {

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
                {records.map((record, recordNo) => {
                    <Record record={record} recordNo={recordNo} />
                })}
            </tbody>

        </table>
    )
}