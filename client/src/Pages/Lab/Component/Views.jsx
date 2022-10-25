import {Record} from './Record'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
export function Views({data}){

    const [patientid, setpatientid] = useState("")
    const array = ["Lipid Panel","Thyroid Panel","Blood Glucose Test","Full Blood Count","Liver Function Test"]
    const [testName, settestName] = useState(array[0])
    const request = ({patientid, testName})
    const patients = data.patients;
    async function AddReport(e){
        e.preventDefault()
        await fetch("http://localhost:5000/lab/addtestreport",{
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
            <form method="POST" onSubmit={AddReport}>
                <div className="title">
                    <h2>Add Test Record</h2>
                </div>
                <div className="info">
                    <label htmlFor="id">Patient Id</label>
                    <input type="text" name="id" placeholder="Patient Id" value={patientid} onChange={(e)=>{setpatientid(e.target.value)}}/>
                    <label htmlFor="teatName">Test Name</label>
                    <select name='testName'onChange={(e)=>{settestName(e.target.value)}}>
                        <option value={array[0]}>Lipid Panel</option>
                        <option value={array[1]}>Thyroid Panel</option>
                        <option value={array[2]}>Blood Glucose Test</option>
                        <option value={array[3]}>Full Blood Count</option>
                        <option value={array[4]}>Liver Function Test</option>
                    </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>

        <div className="right">
            <h2>Test Records</h2>
            <div className="details">
                <table className="patients">
                    <thead>
                        <tr>
                            <th>Test Id</th>
                            <th>Patient Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Test Name</th>
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