
import React from 'react'
import Gallery from '@/component/templates/Product/Gallery/Gallery'
import Description from '@/component/templates/Product/Description/Description'
import Slider from '@/component/templates/Product/Slider/Slider'
import Details from '@/component/templates/Product/Details/Details'
import NewProducts from '@/component/templates/Index/NewProducts/NewProducts'
import getOneProduct from '@/services/product/getOneProduct'


export const generateMetadata= async({params})=>{
  const{shortName}=params
  const data=await getOneProduct(shortName)

  return{
    title:data.name,
    icons:{
      icon:'/images/svgs/Frame 2.svg'
  
    }
  }
}

const Product = async({params}) =>{
  const{shortName}=params
  const data=await getOneProduct(shortName)

  return (
    <>
    <div className="main mt-[90px] container">
        <Gallery product={data} />
        <Description product={data} />
        <Slider product={data}/> 
        <Details />
        <NewProducts title={'New Arrivals'}/>
        <NewProducts title={'Offer'}/>
    </div>
    </>
  )
}

export default Product