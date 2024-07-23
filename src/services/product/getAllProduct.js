import { Http } from "../HttpConfig";

const getAllProduct= async()=>{
    const {data}=  await Http.get('/product' , {
          
      })
      return data
  }
  
  export default getAllProduct