"use client"
import React, { useState } from 'react'

export default function Slider() {
    const [image1 , setImage1] = useState(true)
    const [image2 , setImage2] = useState(false)
  return (
    <div className='slider flex items-center mt-24'>
        <div onMouseEnter={()=>{
            setImage1(true)
            setImage2(false)
        }} className={`${image1 ? 'h-[550px] w-[85%]' : 'h-[530px] w-[15%] opacity-80'} transition-all duration-700 ease-in-out img1 relative   overflow-hidden`}>
            <img className='object-cover h-[100%] w-[100%]' src="/images/product/pdp.jpg" alt="" />
            <div className={`${image1 ? 'opacity-0 translate-x-[900px]' : 'opacity-100'} transition-all duration-700 ease-in-out w-[100px] h-[100px] border-solid border-[1px] border-primary1  rounded-full absolute top-[40%] left-10 flex items-center justify-center`}>
                <div className='w-[80px] h-[80px] border-solid border-[1px] border-primary1  rounded-full flex items-center justify-center'>
                    <div className='w-[60px] h-[60px] border-solid border-[1px] border-primary1  rounded-full flex items-center justify-center'>
                        <div className='w-[20px] h-[20px] border-solid border-[1px] border-primary1 bg-primary1  rounded-full'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div onMouseEnter={()=>{
            setImage1(false)
            setImage2(true)
        }} className={`${image2 ? 'h-[550px] w-[85%]' : 'h-[530px] w-[15%] opacity-80'} transition-all duration-700 ease-in-out img2 relative   overflow-hidden`}>
            <img className='object-cover h-[100%] w-[100%]' src="/images/product/pdp (1).jpg" alt="" />
            <div className={`${image2 ? 'opacity-0 -translate-x-[900px]' : 'opacity-100'} transition-all duration-700 ease-in-out w-[100px] h-[100px] border-solid border-[1px] border-primary1  rounded-full absolute top-[40%] right-10 flex items-center justify-center `}>
                <div className='w-[80px] h-[80px] border-solid border-[1px] border-primary1  rounded-full flex items-center justify-center'>
                    <div className='w-[60px] h-[60px] border-solid border-[1px] border-primary1  rounded-full flex items-center justify-center'>
                        <div className='w-[20px] h-[20px] border-solid border-[1px] border-primary1 bg-primary1  rounded-full'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
