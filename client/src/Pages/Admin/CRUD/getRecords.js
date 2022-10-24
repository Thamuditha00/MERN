import Axios from "axios"

export const URL = "http://localhost:5000"


export async function getRecords() {
    const response = await Axios.post(URL + "/admin/get")
    return response.data
}