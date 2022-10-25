import Axios from "axios"


export const URL = "http://localhost:5000"

export function updateUser(updateInfo) {
    Axios.post(URL + "/admin/update", updateInfo
    ).then((response) => {
        console.log(response.data)
    })
}