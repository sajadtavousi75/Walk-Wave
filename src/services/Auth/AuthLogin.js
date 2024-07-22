import { Http } from "../HttpConfig";

const AuthLogin= async(userData)=>{
    await Http.post('/auth/login' , {
        email:userData.email,
        password:userData.password
    }).then(({data})=> data)
}

export default AuthLogin