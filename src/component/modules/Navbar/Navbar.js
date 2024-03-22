
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar h-[80px] container flex items-center justify-between'>
        <div className="navbar-logo">
            <img src="./images/Frame 2.png" alt="" />
        </div>
        <div className="navbar-links relative">
            {/* <ul className='flex items-center justify-between w-[250px] pl-0 text-base	'>
                <li className='font-kohob text-secondary1 cursor-pointer	'>HOME</li>
                <li className='font-kohoe cursor-pointer	'>SHOP</li>
                <li className='font-kohoe cursor-pointer	'>ABOUT US</li>
            </ul> */}
            <div className='absolute -top-5 right-[450px]'>
                <input className='w-[400px] h-[40px] bg-secondary1/20 p-2 rounded-full text-center' type="text" />
                <img className='absolute top-2 left-1' src="./images/search.png" alt="" />
            </div>
        </div>
        <div className="hidden navbar-profile flex gap-3">
            <div className='w-[160px] h-[40px] flex items-center justify-center bg-secondary1/10 rounded-full'>
                <img className='' src="./images/search.png" alt="" />
                <p className='mb-0 ml-8'>SEARCH</p>
            </div>
            <button><img src="./images/basket 1.png" alt="" /></button>
            <button><img src="./images/profile 1.png" alt="" /></button>
        </div>
    </div>
  )
}
