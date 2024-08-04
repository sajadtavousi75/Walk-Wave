import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function ProductBox(data) {

  
  return (
    <Link  href={`/product/${data.product.shortName}`} >
    <div className='ProductBox group  w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] xl:w-[250px] xl:h-[250px] rounded-[50px] bg-box hover:shadow-lg transition-all duration-700 ease-in-out relative'>
        <div className='absolute z-10 top-5 flex flex-col items-center justify-center w-full group-hover:opacity-0 group-hover:invisible transition-all duration-700 ease-in-out'>
            <h1 className='font-kohob text-[10px] sm:text-[14px]'>{data.product.name}</h1>
            <h1 className='font-kohol text-center text-secondary1 text-[12px] sm:text-[16px]'>{`${data.product.genderID === 'MEN' ? "Men's shoes" : "Women's shoes"}`}</h1>
            <h1 className="font-kohob text-[10px] sm:text-[14px] ">€ {data.product.price}</h1>
        </div>
        {/* <div className='absolute group-hover:scale-[0.2] group-hover:invisible group-hover:opacity-0 transition-all duration-700 ease-in-out w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] xl:w-[250px] xl:h-[250px] rounded-[50px] rounded-[50px]'>
          <Image 
          fill
          className='h-full w-full'
          src={`http://localhost:4000/uploads/${data.product.cover1[0]}`}
          />
        </div> */}
        <img className=' absolute group-hover:scale-[0.2] group-hover:invisible group-hover:opacity-0 transition-all duration-700 ease-in-out w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] xl:w-[250px] xl:h-[250px] rounded-[50px] rounded-[50px] object-cover' src={`https://walkwave-project.liara.run/uploads/${data.product.cover1[0]}`} alt="" />
        <img className='scale-[0.2] invisible opacity-0 absolute group-hover:scale-[1] group-hover:visible group-hover:opacity-100 transition-all duration-700 ease-in-out w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] xl:w-[250px] xl:h-[250px] rounded-[50px] rounded-[50px] object-cover ' src={`https://walkwave-project.liara.run/uploads/${data.product.cover1[1]}`} alt="" />
    </div>
    </Link>
  )
}
