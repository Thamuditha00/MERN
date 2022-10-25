import {Record} from './Record'
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
export function Views({data}){

    const [wardid, setwardid] = useState(data.wardid)
    const [wardName, setwardName] = useState("")
    const [BedCount, setBedCount] = useState("")
    const [freeBedCount, setfreeBedCount] = useState("")
    const request = ({wardid, wardName,BedCount,freeBedCount})
    const wards = data.wards;
    async function AddWard(e){
        e.preventDefault()
        await fetch("http://localhost:5000/manager/addward",{
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
            <form method="POST" onSubmit={AddWard}>
                <div className="title">
                    <h2>Add Ward</h2>
                </div>
                <div className="info">
                    <label htmlFor="id">Ward Name</label>
                    <input type="text" name="wardName" placeholder="Ward Name" value={wardName} onChange={(e)=>{setwardName(e.target.value)}}/>
                    <label htmlFor="id">Bed Count</label>
                    <input type="text" name="BedCountge" placeholder="Bed Count" value={BedCount} onChange={(e)=>{setBedCount(e.target.value)}}/>
                    <label htmlFor="id">Free Bed Count</label>
                    <input type="text" name="freeBedCount" placeholder="Free Bed Count" value={freeBedCount} onChange={(e)=>{setfreeBedCount(e.target.value)}}/>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>

        <div className="right">
            <h2>Wards Details</h2>
            <div className="details">
                <table className="wards">
                    <thead>
                        <tr>
                            <th>Ward Id</th>
                            <th>Ward Name</th>
                            <th>Bed Count</th>
                            <th>Free Bed Count</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        { wards && wards.length > 0 ? (
                            
                            wards.map((ward) => {return <Record user = {ward}/>} )
                            
                        ):(
                            <p>No wards found</p>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}