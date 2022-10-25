import Axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export const URL = "http://localhost:5000"

export async function Login(loginCredentials) {

    const navigate = useNavigate()

    const response = await Axios.post(URL + "/login", loginCredentials)

    const userType = response.data.user.description.toLowerCase()
    
    navigate("/" + userType)
    
}