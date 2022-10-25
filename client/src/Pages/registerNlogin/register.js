import Axios from "axios"


export const URL = "http://localhost:5000"

export function register(registerCredentials) {
    Axios.post(URL + "/register", registerCredentials
    ).then((response) => {
        console.log(response.data)
    })
}