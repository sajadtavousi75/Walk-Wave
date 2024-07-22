"use server";
import { cookies } from "next/headers";

export const setAuthCookie= (accessToken)=>{
    cookies().set('access-token' , accessToken,{
      httpOnly:false,
      secure: true,
      sameSite: 'none',
      maxAge: 3 * 3600 * 1000,
    })
}