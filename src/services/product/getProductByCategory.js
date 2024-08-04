import { Http } from "../HttpConfig";

const getProductByCategory= async(category , gender)=>{
    const {data}=  await Http.get(`/product/category/${category}/gender/${gender}` , {
          headers:{
            'Cache-Control' : 'no-store'
          }
      })
      return data
  }
  
  export default getProductByCategory