import { Http } from "../HttpConfig";

const getAllProduct= async()=>{
    const {data}=  await Http.get('/product' , {
          headers:{
            'Cache-Control' : 'no-store'
          }
      })
      return data
  }
  
  export default getAllProduct