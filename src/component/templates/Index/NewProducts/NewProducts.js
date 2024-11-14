"use client"
import ProductBox from "@/component/modules/ProductBox/ProductBox";
import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { useQuery } from "@tanstack/react-query";
import getAllProduct from "@/services/product/getAllProduct";
import Link from "next/link";

export default function NewProducts({title}) {
  const [scrolProduct , setScrolProduct] = useState(false)
  const [allProduct , setAllProduct]= useState([])

    const {data:allProductData , isLoading , isError}=useQuery({
      queryKey:['AllProduct'],
      queryFn:async()=>await getAllProduct()
    })

console.log(allProductData)
  

  useEffect(()=>{
    const handelScrol=()=>{
      const section = document.getElementsByClassName('NewProducts')
      const sectionOffset= section[0].offsetTop
      const scrolPosition= window.pageYOffset + window.innerHeight

      if(scrolPosition > sectionOffset){
        setScrolProduct(true)
      }
    }

    window.addEventListener('scroll', handelScrol)

    return ()=>{
      window.removeEventListener('scroll', handelScrol)
    }
  })
  return (
    <div className="NewProducts mt-12">
      <div className="title container  flex items-end justify-between">
        <h1 className="font-kohob text-[24px] sm:text-[64px]">{title}</h1>
        <Link href='/shop?gender=ALL&category=ALL' className="text-[16px] sm:text-[24px] font-kohol text-secondary1 sm:pb-4">see more</Link>
      </div>
      <hr className="h-[2px] bg-secondary1"/>
      {scrolProduct && (
      <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{  stiffness: 100 , duration:2 }}
      className="product-boxes container py-8 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 	 justify-items-center ">
        {allProductData.slice(0,4).map((data)=>(

        <ProductBox key={data._id} product={data} />
        ))}
      </motion.div>
      )}
    </div>
  );
}
