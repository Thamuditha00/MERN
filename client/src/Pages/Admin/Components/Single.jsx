export function Single({record}){
    return (
        <>
        <tr key={record._id} >
            <td>1</td>
            <td>{record.username}</td>
            <td>{record.description}</td>
        </ tr>
        </>
    )
}