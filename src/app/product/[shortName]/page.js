// "use client"
import React from 'react'
import Navbar from '@/component/modules/Navbar/Navbar'
import Footer from '@/component/modules/Footer/Footer'
import Gallery from '@/component/templates/Product/Gallery/Gallery'
import Description from '@/component/templates/Product/Description/Description'
import Slider from '@/component/templates/Product/Slider/Slider'
import Details from '@/component/templates/Product/Details/Details'
import NewProducts from '@/component/templates/Index/NewProducts/NewProducts'
// import { QueryClient, QueryClient } from '@tanstack/react-query'
import getOneProduct from '@/services/product/getOneProduct'
import { useSearchParams } from 'next/navigation'
import { data } from 'autoprefixer'

const getProduct=async (short)=>{
const res=  await fetch(`http://localhost:4000/api/v1/product/${short}`,{
    method:'POST',
    'Contenet-Type': 'application/json',
  })

  return res.json()
}

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
  // await fetch(`http://localhost:4000/api/v1/product/${shortName}`,{
  //   method:'POST',
  //   'Contenet-Type': 'application/json',
  // })
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //   return data
  //   })

  return (
    <>
    <div className=" border-solid border-b-4 border-secondary1  fixed top-0 left-0 right-0 z-50 ">
      <Navbar />
    </div>
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