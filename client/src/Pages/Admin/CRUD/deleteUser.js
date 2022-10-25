import Axios from "axios"


export const URL = "http://localhost:5000"

export function deleteUser(user) {
    Axios.post(URL + "/admin/delete", { user }
    ).then((response) => {
        console.log(response.data)
    })
}