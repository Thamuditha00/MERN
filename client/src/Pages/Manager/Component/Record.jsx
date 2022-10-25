import { Views } from './Views'
import {Update} from './Update'
import ReactDOM from 'react-dom'
export function Record({user}){

    function EnableUpdate(){
        const id = {wardid: user.wardid, wardName: user.wardName, BedCount: user.BedCount, freeBedCount: user.freeBedCount};
        const view = ReactDOM.createRoot(document.getElementById("views"));
        view.render(<Update data = {id}/>)
        
    }

    async function DeleteRecord(){
        const id = user._id;
        await fetch('http://localhost:5000/manager/deleteward',{
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

    return (
        <>
        <tr>
            <td>{user.wardid}</td>
            <td>{user.wardName}</td>
            <td>{user.BedCount}</td>
            <td>{user.freeBedCount}</td>
            <td><a onClick={EnableUpdate}>update</a></td>
            <td><a onClick={DeleteRecord}>delete</a></td>
        </tr>
        </>
    )
}