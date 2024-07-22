"use server"

import { cookies } from "next/dist/client/components/headers"


const removeAuthCookie = ()=>{
    cookies().delete("access-token")
}

export default removeAuthCookie