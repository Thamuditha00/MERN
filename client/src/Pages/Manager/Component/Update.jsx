import {Views} from './Views'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';

export function Update({data}){

    const [wardid, setwardid] = useState(data.wardid)
    const [wardName, setwardName] = useState("")
    const [BedCount, setBedCount] = useState("")
    const [freeBedCount, setfreeBedCount] = useState("")
    const request = ({wardid, wardName,BedCount,freeBedCount})
   
    async function UpdateWard(e){
        e.preventDefault()
        await fetch("http://localhost:5000/manager/updateward",{
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
            <form method="POST" onSubmit={UpdateWard}>
                <div className="title">
                    <h2>Update Ward Details</h2>
                </div>
                <div className="info">
                    <label htmlFor="id">Ward Id</label>
                    <input type="text" name="id" placeholder={data.wardid} value={data.wardid}/>
                    <label htmlFor="id">Free Bed Count</label>
                    <input type="text" name="freebed" placeholder="Free Bed Count" required onChange={(e)=>{setfreeBedCount(e.target.value)}}/>
                </div>
                <button type="submit" >Update</button>
            </form>
        </div>
    )
}