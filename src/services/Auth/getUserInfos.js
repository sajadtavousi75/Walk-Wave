// 
import Cookies from "js-cookie";
import { useAuthContext } from "@/context/authContext";


const getUserInfos=async()=>{
  // const context= useAuthContext()

    const token= Cookies.get('access-token')
    if(token){

     await fetch('https://backend-walk.onrender.com/api/v1/auth/me',{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      }).then((res)=> res.json())
      .then((data)=>{
        context.setEmail(data.email)
        context.setUserName(data.username)
      })
    }
  }

  export default getUserInfos