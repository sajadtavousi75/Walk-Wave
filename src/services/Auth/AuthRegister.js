import { Http } from "../HttpConfig";

const AuthRegister= async(userData)=>{
 const {data} =  await Http.post('/auth/register' , {
        email:userData.email,
        username:userData.username,
        password:userData.password
    })
    
    return data
}

export default AuthRegister