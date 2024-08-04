import { Http } from "../HttpConfig";

const getOneProduct= async(shortName)=>{
    const {data}=  await Http.post(`/product/${shortName}` , {
          headers:{
            'Cache-Control' : 'no-store'
          }
      })
      return data
  }
  
  export default getOneProduct