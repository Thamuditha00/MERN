import Axios from "axios"


export const URL = "http://localhost:5000"

export function create(createCredentials) {
    Axios.post(URL + "/admin/create", createCredentials
    ).then((response) => {
        console.log(response.data)
    })
}


