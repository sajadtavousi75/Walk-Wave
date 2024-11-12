import axios from "axios";


const baseURL= 'https://backend-walk.onrender.com/api/v1'

axios.defaults.withCredentials =true

const headers= {
    'Contenet-Type': 'application/json',
}

export const Http = axios.create({baseURL, headers})