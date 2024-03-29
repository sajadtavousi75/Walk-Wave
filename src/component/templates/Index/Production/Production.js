import React from 'react'

export default function Production() {
  return (
    <div className='production flex flex-col gap-8 md:flex-row md:gap-0  my-8'>
        <div className="des">
            <img className='w-[100%]' src="./images/production/1.png" alt="" />
            <div className='container mt-12'>
            <h1 className='font-kohob text-[24px]'>Balancing Style and Performance</h1>
            <hr className="h-[2px] bg-secondary1"/>
            <p className='font-quickr mt-4'>At the heart of shoe design is a carefully selected layer of fabric. A harmonious combination of style and performance. From breathable mesh for active work to premium textiles for a luxurious touch. These materials not only contribute to the overall aesthetic appeal, but also prioritize breathability and flexibility, ensuring that your feet feel as good as they look.</p>
            </div>
        </div>
        <div className="des">
            <img className='w-[100%]' src="./images/production/2.png" alt="" />
            <div className='container mt-12'>
                <h1 className='font-kohob text-[24px]'>Engineering Comfort</h1>
                <hr className="h-[2px] bg-secondary1"/>
                <p className='font-quickr mt-4'>The shoes feature an innovative sole design that integrates advanced technology with comfort and durability. Designed for excellent traction and support, the insoles are engineered to provide a stable foundation for every step. Whether you're navigating city streets or exploring the great outdoors, carefully designed insoles offer a balance of flexibility and flexibility, ensuring a comfortable and safe experience.</p>
            </div>
        </div>
    </div>
  )
}
