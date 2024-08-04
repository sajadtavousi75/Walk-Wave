"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ProductBox from '@/component/modules/ProductBox/ProductBox'
import { useQuery } from '@tanstack/react-query'
import getAllProduct from '@/services/product/getAllProduct'

export default function Dashboard() {
    const [filterIndex , setFilterIndex]= useState(0)
    const [filterText , setFilterText] = useState('Recent Activity')

    const {data:allProductData}=useQuery({
      queryKey:['AllProduct'],
      queryFn:async()=>await getAllProduct()
    })
    
  return (
    <div className=' w-full'>
        <p className='font-quikr'>Welcome to your personalized dashboard!</p>
        <p className='font-quikr'>      Here, you can get a quick overview of your account activity and recent interactions with the platform.</p>
        <div className="filter-links flex items-center justify-between mt-4">
            {['Recent Activity', 'Wishlist Items' , 'Recommendations'].map((item , index)=>(

          <p
          onClick={(event)=>{
            setFilterIndex(index)
            setFilterText(event.target.innerText)
          }}
          className={`${filterIndex === index ? 'font-kohob' : 'font-kohol'}  text-[14px] md:text-[20px] lg:text-[24px] text-secondary1 cursor-pointer hover:font-kohob`}>{item}</p>
            ))}
        </div>
        <div className={`${filterText === 'Recent Activity' ? '' : 'hidden'} `}>
          <div className="category flex items-center justify-start gap-4 mt-8">
            <p className='font-kohob text-secondary1'>Sort By :</p>
            <p className='font-kohol cursor-pointer hover:font-kohob'>recent orders</p>
            <p className='font-kohol cursor-pointer hover:font-kohob'>product reviews</p>
          </div>
          <div className="recent-boxes ">
            <div className="box flex flex-col sm:flex-row items-center justify-between shadow-lg rounded-[20px] p-2 h-auto min-h-[120px]">
              <p className='font-kohol border-solid border-e-2 border-secondary1 p-2'>ORDER</p>
              <div className="img w-[80px] h-[80px]">
                <img src="/images/gallery/big1.png" alt="" />
              </div>
              <div className="details">
                <p className='font-kohob '>Nike Air Max Plus Drift</p>
                <p className='font-kohol text-secondary1'>Men's Shoes</p>
              </div>
              <div className="price">
                <p className='font-kohob text-[24px]'>€ 198</p>
              </div>
              <div className="date">
                <p className='border-solid border-s-2 border-secondary1 p-2 font-kohol'>4 april 2024 <span className='font-kohob text-secondary1'>1:11 am</span></p>
              </div>
            </div>
            <div className="box flex flex-col sm:flex-row items-center justify-between shadow-lg rounded-[20px] p-2 h-auto min-h-[120px]">
              <p className='font-kohol border-solid border-e-2 border-secondary1 p-2'>ORDER</p>
              <div className="img w-[80px] h-[80px]">
                <img src="/images/gallery/big1.png" alt="" />
              </div>
              <div className="details">
                <p className='font-kohob '>Nike Air Max Plus Drift</p>
                <p className='font-kohol text-secondary1'>Men's Shoes</p>
              </div>
              <div className="price">
                <p className='font-kohob text-[24px]'>€ 198</p>
              </div>
              <div className="date">
                <p className='border-solid border-s-2 border-secondary1 p-2 font-kohol'>4 april 2024 <span className='font-kohob text-secondary1'>1:11 am</span></p>
              </div>
            </div>
            <div className="box flex flex-col sm:flex-row items-center justify-between shadow-lg rounded-[20px] p-2 h-auto min-h-[120px]">
              <p className='font-kohol border-solid border-e-2 border-secondary1 p-2'>ORDER</p>
              <div className="img w-[80px] h-[80px]">
                <img src="/images/gallery/big1.png" alt="" />
              </div>
              <div className="details">
                <p className='font-kohob '>Nike Air Max Plus Drift</p>
                <p className='font-kohol text-secondary1'>Men's Shoes</p>
              </div>
              <div className="price">
                <p className='font-kohob text-[24px]'>€ 198</p>
              </div>
              <div className="date">
                <p className='border-solid border-s-2 border-secondary1 p-2 font-kohol'>4 april 2024 <span className='font-kohob text-secondary1'>1:11 am</span></p>
              </div>
            </div>
            <div className="box flex flex-col sm:flex-row items-center justify-between shadow-lg rounded-[20px] p-2 h-auto min-h-[120px]">
              <p className='font-kohol border-solid border-e-2 border-secondary1 p-2'>ORDER</p>
              <div className="img w-[80px] h-[80px]">
                <img src="/images/gallery/big1.png" alt="" />
              </div>
              <div className="details">
                <p className='font-kohob '>Nike Air Max Plus Drift</p>
                <p className='font-kohol text-secondary1'>Men's Shoes</p>
              </div>
              <div className="price">
                <p className='font-kohob text-[24px]'>€ 198</p>
              </div>
              <div className="date">
                <p className='border-solid border-s-2 border-secondary1 p-2 font-kohol'>4 april 2024 <span className='font-kohob text-secondary1'>1:11 am</span></p>
              </div>
            </div>

          </div>
        </div>
        <div className={`${filterText === 'Wishlist Items' ? '' : 'hidden'}`}>
        <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{  stiffness: 100 , duration:2 }}
      className="product-boxes container py-8 grid gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 	 justify-items-center ">
        {allProductData?.slice(0,2).map((data)=>(
          <ProductBox key={data._id}  product={data} />
        ))}
        
      </motion.div>
        </div>
        <div className={`${filterText === 'Recommendations' ? '' : 'hidden'} mt-5`}>
          <p className='font-quikr'>Discover personalized recommendations based on your browsing history and purchase behavior.</p>
          <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{  stiffness: 100 , duration:2 }}
      className="product-boxes container py-8 grid gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 	 justify-items-center ">
        {allProductData?.slice(0,2).map((data)=>(
          <ProductBox key={data._id}  product={data} />
        ))}
      </motion.div>
        </div>
      </div>
  )
}
