"use client"
import React, { useState } from 'react'

export default function Navbar() {
    const [showSearch , setShowSearch]=useState(false)

    const cancelhandel=()=>{
        setShowSearch(false)
    }

    const showSearchHandel=()=>{
        setShowSearch(true)
    }
  return (
    <div className='navbar h-[80px] container flex items-center justify-between'>
        <div className="navbar-logo">
            <img src="./images/Frame 2.png" alt="" />
        </div>
        <div className="navbar-links flex items-center justify-center">
            <ul className={`${showSearch ? 'hidden' : 'flex items-center justify-between w-[250px] pl-0 mb-0 text-base'}`}>
                <li className='font-kohob text-secondary1 cursor-pointer	'>HOME</li>
                <li className='font-kohoe cursor-pointer	'>SHOP</li>
                <li className='font-kohoe cursor-pointer	'>ABOUT US</li>
            </ul>
        </div>
        <div className={`${showSearch ? '' : ''} transition-all duration-300 ease-in-out   navbar-profile flex gap-3 relative`}>
            <div  className={`${showSearch ? 'w-[400px] -translate-x-96' : 'w-[160px]'} transition-all duration-300 ease-in-out flex items-center justify-center bg-secondary1/10 rounded-full translate-x-2`}>
            <input onChange={showSearchHandel} className={`${showSearch ? 'w-[400px] ' : 'w-[160px] '}transition-all duration-300 ease-in-out h-[40px] bg-secondary1/5 p-2 rounded-full text-center font-kohoe`} type="text" placeholder='Search' />
                <img className='absolute top-2 left-1' src="./images/search.png" alt="" />
            </div>
            <button onClick={cancelhandel}><img className={`${showSearch ? '' : 'hidden'}`} src="./images/cancel.png" alt="" /></button>
            <button className={`${showSearch ? 'hidden' : ''}`}><img src="./images/basket 1.png" alt="" /></button>
            <button className={`${showSearch ? 'hidden' : ''}`}><img src="./images/profile 1.png" alt="" /></button>
        </div>
    </div>
  )
}
