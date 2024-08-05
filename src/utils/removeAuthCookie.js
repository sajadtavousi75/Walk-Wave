"use server"

import { cookies } from "next/headers";


const removeAuthCookie = ()=>{
    cookies().delete("access-token")
}

export default removeAuthCookie