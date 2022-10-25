import {Record} from './Record'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
export function Views({data}){

    const [MedicineCode, setMedicineCode] = useState("")
    const [MedicineName, setMedicinename] = useState("")
    const [ManufactureDate, setManufactureDate] = useState("")
    const [ExpireDate, setExpireDate] = useState("")
    const request = ({MedicineCode, MedicineName, ManufactureDate,ExpireDate})
    const medicines = data.medicines;
    async function AddMedicine(e){
        e.preventDefault()
        await fetch("http://localhost:5000/pharmacy/addmedicine",{
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
            <form method="POST" onSubmit={AddMedicine}>
                <div className="title">
                    <h2>Add Medicine</h2>
                </div>
                <div className="info">
                    <label htmlFor="id">Medicine Name</label>
                    <input type="text" name="medname" placeholder="Medicine Name" value={MedicineName} onChange={(e)=>{setMedicinename(e.target.value)}}/>
                    <label htmlFor="id">Manufacture Date</label>
                    <input type="date" name="mdate" placeholder="Manufacture Date" value={ManufactureDate} onChange={(e)=>{setManufactureDate(e.target.value)}}/>
                    <label htmlFor="id">Expire Date</label>
                    <input type="date"  name="edate" placeholder="Expire Date" value={ExpireDate} onChange={(e)=>{setExpireDate(e.target.value)}}/>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>

        <div className="right">
            <h2>Medicine Records</h2>
            <div className="details">
                <table className="medicines">
                    <thead>
                        <tr>
                            <th>Medicine Code</th>
                            <th>Medicine Name</th>
                            <th>Manufacture Date</th>
                            <th>Expire Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        { medicines && medicines.length > 0 ? (
                            
                            medicines.map((medicine) => {return <Record user = {medicine}/>} )
                            
                        ):(
                            <p>No medicines found</p>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}