import { Views } from './Views'
import {Update} from './Update'
import ReactDOM from 'react-dom'
export function Record({user}){

    function EnableUpdate(){
        const id = {MedicineCode: user.MedicineCode, MedicineName: user.MedicineName, ManufactureDate: user.ManufactureDate, ExpireDate: user.ExpireDate};
        const view = ReactDOM.createRoot(document.getElementById("views"));
        view.render(<Update data = {id}/>)
        
    }

    async function DeleteRecord(){
        const id = user._id;
        await fetch('http://localhost:5000/pharmacy/deletemedicine',{
            method: "POST",
            headers:{
            "Accept":"application/json",
            "Content-Type": "application/json"
    
            },
            body:JSON.stringify({id})
        }).then((Response) => {
            return Response.json()
        }).then((data)=>{
            const view = ReactDOM.createRoot(document.getElementById("views"));
            view.render(<Views data = {data}/>)
        })
    }

    var mdate = user.ManufactureDate.toString()
    mdate = mdate.substring(0, 10)
    var edate = user.ExpireDate.toString()
    edate = edate.substring(0, 10)
    return (
        <>
        <tr>
            <td>{user.MedicineCode}</td>
            <td>{user.MedicineName}</td>
            <td>{mdate}</td>
            <td>{edate}</td>
            <td><a onClick={EnableUpdate}>update</a></td>
            <td><a onClick={DeleteRecord}>delete</a></td>
        </tr>
        </>
    )
}