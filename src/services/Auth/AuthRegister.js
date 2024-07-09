import { Http } from "../HttpConfig";

const AuthLogin= async(userData)=>{
    await Http.post('/register' , {
        email:userData.email,
        username:userData.username,
        password:userData.password
    }).then(({data})=> data)
}

export default AuthLogin