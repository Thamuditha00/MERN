import {Record} from './Record'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
export function Views({data}){

    const [patientid, setpatientid] = useState("")
    const [patientname, setpatientname] = useState("")
    const [patientage, setpatientage] = useState("")
    const [patientcontact, setpatientcontact] = useState("")
    const request = ({patientname, patientage, patientcontact})
    const patients = data.patients;
    async function AddPatient(e){
        e.preventDefault()
        await fetch("http://localhost:5000/nurse/addpatient",{
        method: "POST",
        headers:{
            "Accept":"application/json",
            "Content-Type": "application/json"
    
        },
        body:JSON.stringify(request)
        }).then((Response) => {
        return Response.json()
        }).then((data)=>{
        const left = ReactDOM.createRoot(document.getElementById("views"));
        left.render(<Views data = {data}/>)
        })
    }

    return (
        <>
        <div className="left" id='left'>
            <form method="POST" onSubmit={AddPatient}>
                <div className="title">
                    <h2>Add Patient</h2>
                </div>
                <div className="info">
                    <label htmlFor="id">Patient Name</label>
                    <input type="text" name="name" placeholder="Patient Name" value={patientname} onChange={(e)=>{setpatientname(e.target.value)}}/>
                    <label htmlFor="id">Patient Age</label>
                    <input type="text" name="age" placeholder="Patient Age" value={patientage} onChange={(e)=>{setpatientage(e.target.value)}}/>
                    <label htmlFor="id">Patient Contact</label>
                    <input type="text" maxLength="10" name="contact" placeholder="Patient Contact No" value={patientcontact} onChange={(e)=>{setpatientcontact(e.target.value)}}/>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>

        <div className="right">
            <h2>Patient Records</h2>
            <div className="details">
                <table className="patients">
                    <thead>
                        <tr>
                            <th>Patient Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact No</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        { patients && patients.length > 0 ? (
                            
                            patients.map((patient) => {return <Record user = {patient}/>} )
                            
                        ):(
                            <p>No patients found</p>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}