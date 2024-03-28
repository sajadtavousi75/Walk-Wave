"use client"
import ProductBox from "@/component/modules/ProductBox/ProductBox";
import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'

export default function NewProducts() {
  const [scrolProduct , setScrolProduct] = useState(false)

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
      <div className="title container flex items-end justify-between">
        <h1 className="font-kohob text-[24px] sm:text-[64px]">New Arrivals</h1>
        <button className="text-[16px] sm:text-[24px] font-kohol text-secondary1 sm:pb-4">see more</button>
      </div>
      <hr className="h-[2px] bg-secondary1"/>
      {scrolProduct && (
      <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{  stiffness: 100 , duration:2 }}
      className="product-boxes container py-8 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 	 justify-items-center ">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        {/* <ProductBox /> */}
      </motion.div>
      )}
    </div>
  );
}
