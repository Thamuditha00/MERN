import {Views} from './Views'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';

export function Update({data}){

    const [recordid, setrecordid] = useState(data.recordid)
    const array = ["Lipid Panel","Thyroid Panel","Blood Glucose Test","Full Blood Count","Liver Function Test"]
    const [testName, settestName] = useState(data.testName)
    const request = ({recordid, testName})
    const patients = data.patients;

    async function Updatereport(e){
        e.preventDefault()
        await fetch("http://localhost:5000/lab/updatetestreport",{
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
            <form method="POST" onSubmit={Updatereport}>
                <div className="title">
                    <h2>Update Patient Record</h2>
                </div>
                <div className="info">
                    <label htmlFor="id">Record Id</label>
                    <input type="text" name="id" placeholder={data.recordid} value={data.recordid}/>
                    <label htmlFor="testName">Test Name</label>
                    <select name='testName' value={testName} onChange={(e)=>{settestName(e.target.value)}}>
                        <option value={array[0]}>Lipid Panel</option>
                        <option value={array[1]}>Thyroid Panel</option>
                        <option value={array[2]}>Blood Glucose Test</option>
                        <option value={array[3]}>Full Blood Count</option>
                        <option value={array[4]}>Liver Function Test</option>
                    </select>
                </div>
                <button type="submit" >Update</button>
            </form>
        </div>
    )
}