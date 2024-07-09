import axios from "axios";


const baseURL= 'http://localhost:4000/api'

axios.defaults.withCredentials =true

const headers= {
    'Contenet-Type': 'application/json',
}

export const Http = axios.create({baseURL, headers})