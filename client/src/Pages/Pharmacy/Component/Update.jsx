import {Views} from './Views'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';

export function Update({data}){
    console.log(data.MedicineCode)

    const [MedicineCode, setMedicinecode] = useState(data.MedicineCode)
    const [MedicineName, setMedicinename] = useState("")
    const [ManufactureDate, setManufactureDate] = useState("")
    const [ExpireDate, setExpireDate] = useState("")
    const request = ({MedicineCode, MedicineName, ManufactureDate,ExpireDate})
  

    async function UpdateMedicine(e){
        e.preventDefault()
        await fetch("http://localhost:5000/pharmacy/updatemedicine",{
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
            <form method="POST" onSubmit={UpdateMedicine}>
                <div className="title">
                    <h2>Update Medicine Details</h2>
                </div>
                <div className="info">
                    <label htmlFor="id">Medicine Code</label>
                    <input type="text" name="id" value={data.MedicineCode}/>
                    <label htmlFor="id">Medicine Name</label>
                    <input type="text" name="medname" placeholder={data.MedicineName} required onChange={(e)=>{setMedicinename(e.target.value)}}/>
                    <label htmlFor="id">Manufacture Date</label>
                    <input type="date" name="mdate" placeholder={data.ManufactureDate} required onChange={(e)=>{setManufactureDate(e.target.value)}}/>
                    <label htmlFor="id">Expire Date</label>
                    <input type="date" name="edate" placeholder={data.ExpireDate}  required onChange={(e)=>{setExpireDate(e.target.value)}}/>
                </div>
                <button type="submit" >Update</button>
            </form>
        </div>
    )
}