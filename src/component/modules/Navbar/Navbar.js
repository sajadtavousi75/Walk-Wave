"use client"
import React, { useState } from 'react'

export default function Navbar() {
    const [showSearch , setShowSearch]=useState(false)
    const [resultSearch , setResultSearch]= useState(false)

    const cancelhandel=()=>{
        setShowSearch(false)
        setResultSearch(false)
    }

    const showSearchHandel=()=>{
        setShowSearch(true)
        setResultSearch(true)
    }
  return (
        <>
        <div className='navbar h-[80px] container flex items-center justify-between z-10 bg-primary1'>
        <div className="navbar-logo">
            <img src="./images/Frame 2.png" alt="" />
        </div>
        <div className="navbar-links flex items-center justify-center">
            <ul className={`${showSearch ? 'opacity-0' : 'opacity-100'} transition-all duration-700 ease-in-out flex items-center justify-between w-[250px] pl-0 mb-0 text-base`}>
                <li className='font-kohob text-secondary1 cursor-pointer	'>HOME</li>
                <li className='font-kohoe cursor-pointer	'>SHOP</li>
                <li className='font-kohoe cursor-pointer	'>ABOUT US</li>
            </ul>
        </div>
        <div className={`${showSearch ? '' : ''} transition-all duration-300 ease-in-out   navbar-profile flex gap-2 relative`}>
            <div  className={`${showSearch ? 'w-[400px] -translate-x-[400px]' : 'w-[160px]'} transition-all duration-700 ease-in-out flex items-center justify-center  rounded-full `}>
            <input onChange={showSearchHandel} className={`${showSearch ? 'w-[400px] -translate-x-96' : 'w-[160px] '}transition-all duration-700 ease-in-out h-[40px] bg-secondary1/10 p-2 rounded-full text-center font-kohoe focus:outline-none focus:border-none hover:bg-secondary1/20`} type="text" placeholder='Search' />
                <img className='absolute top-2 left-1' src="./images/search.png" alt="" />
            </div>
            <button className={`${showSearch ? 'opacity-100 translate-x-16 ' : 'opacity-0  translate-x-40'} transition-all duration-700 ease-in-out flex items-center justify-center`} onClick={cancelhandel}><img  src="./images/cancel.png" alt="" /></button>
            <button className={`${showSearch ? 'invisible' : 'visible '} transition-all duration-300 ease-in-out`}><img src="./images/basket 1.png" alt="" /></button>
            <button className={`${showSearch ? 'invisible' : 'visible '} transition-all duration-300 ease-in-out`}><img src="./images/profile 1.png" alt="" /></button>
        </div>
    </div>
        <div className={`${resultSearch ? 'top-24 h-[250px]' : 'top-24 h-0'} transition-all duration-300 ease-in-out w-[100%]  bg-secondary1 absolute z-0 `}>

        </div>
        </>

  )
}
