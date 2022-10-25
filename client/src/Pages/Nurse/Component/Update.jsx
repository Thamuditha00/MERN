import {Views} from './Views'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';

export function Update({data}){

    const [patientid, setpatientid] = useState(data.patientid)
    const [patientname, setpatientname] = useState("")
    const [patientage, setpatientage] = useState("")
    const [patientcontact, setpatientcontact] = useState("")
    const request = ({patientid, patientname,patientage,patientcontact})
    
    async function UpdatePatient(e){
        e.preventDefault()
        await fetch("http://localhost:5000/nurse/updatepatient",{
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
        <div className="left" id='left'>
            <form method="POST" onSubmit={UpdatePatient}>
                <div className="title">
                    <h2>Update Patient Details</h2>
                </div>
                <div className="info">
                    <label htmlFor="id">Patient Id</label>
                    <input type="text" name="id" placeholder={data.patientid} value={data.patientid}/>
                    <label htmlFor="id">Patient Name</label>
                    <input type="text" name="name" placeholder={data.patientname} required onChange={(e)=>{setpatientname(e.target.value)}}/>
                    <label htmlFor="id">Patient Age</label>
                    <input type="text" name="age" placeholder={data.patientage} required onChange={(e)=>{setpatientage(e.target.value)}}/>
                    <label htmlFor="id">Patient Contact</label>
                    <input type="text" name="contact" placeholder={data.patientcontact} maxLength="10" minLength="10" required onChange={(e)=>{setpatientcontact(e.target.value)}}/>

                </div>
                <button type="submit" >Update</button>
            </form>
        </div>
    )
}