import { Http } from "../HttpConfig";

const AuthLogin= async(userData)=>{
  const {data}=  await Http.post('/auth/login' , {
        identifier:userData.email,
        password:userData.password
    })
    return data
}

export default AuthLogin