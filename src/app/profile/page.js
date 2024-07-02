"use client"
import React from 'react'
import Layout from '../../component/layouts/UserLayout'
import Navbar from '@/component/modules/Navbar/Navbar'
import {motion} from 'framer-motion'
import ProductBox from '@/component/modules/ProductBox/ProductBox'

export default function Profile() {
  return (
      <div className=' w-full'>
        <p className='font-quikr'>Welcome to your personalized dashboard!</p>
        <p className='font-quikr'>      Here, you can get a quick overview of your account activity and recent interactions with the platform.</p>
        <div className="filter-links flex items-center justify-between mt-4">
          <p className='font-kohob text-[24px] text-secondary1 cursor-pointer hover:font-kohob '>Recent Activity</p>
          <p className='font-kohol text-[24px] text-secondary1 cursor-pointer hover:font-kohob '>Wishlist Items</p>
          <p className='font-kohol text-[24px] text-secondary1 cursor-pointer hover:font-kohob transition-all duration-700 ease-in-out'>Recommendations</p>
        </div>
        <div className="recent">
          <div className="category flex items-center justify-start gap-4 mt-8">
            <p className='font-kohob text-secondary1'>Sort By :</p>
            <p className='font-kohol cursor-pointer hover:font-kohob'>recent orders</p>
            <p className='font-kohol cursor-pointer hover:font-kohob'>product reviews</p>
          </div>
          <div className="recent-boxes ">
            <div className="box flex items-center justify-between shadow-lg rounded-[20px] p-2 h-[120px]">
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
            <div className="box flex items-center justify-between shadow-lg rounded-[20px] p-2 h-[120px]">
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
            <div className="box flex items-center justify-between shadow-lg rounded-[20px] p-2 h-[120px]">
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
            <div className="box flex items-center justify-between shadow-lg rounded-[20px] p-2 h-[120px]">
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
        <div className="wishList">
        <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{  stiffness: 100 , duration:2 }}
      className="product-boxes container py-8 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 	 justify-items-center ">
        <ProductBox />
        <ProductBox />
      </motion.div>
        </div>
        <div className="recommend">
          <p className='font-quikr'>Discover personalized recommendations based on your browsing history and purchase behavior.</p>
          <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{  stiffness: 100 , duration:2 }}
      className="product-boxes container py-8 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 	 justify-items-center ">
        <ProductBox />
        <ProductBox />
      </motion.div>
        </div>
      </div>
  )
}
