import Link from 'next/link'
import React from 'react'

export default function ProductBox() {
  return (
    <Link href='/product/nike'>
    <div className='ProductBox group  w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] xl:w-[250px] xl:h-[250px] rounded-[50px] bg-box hover:shadow-lg transition-all duration-700 ease-in-out relative'>
        <div className='absolute z-10 top-5 left-10 sm:top-10 sm:left-20 group-hover:opacity-0 group-hover:invisible transition-all duration-700 ease-in-out'>
            <h1 className='font-kohob text-[12px] sm:text-[16px]'>Nike Air Max 1</h1>
            <h1 className='font-kohol text-secondary1 text-[12px] sm:text-[16px]'>Women's shoes</h1>
        </div>
        <img className=' absolute group-hover:scale-[0.2] group-hover:invisible group-hover:opacity-0 transition-all duration-700 ease-in-out' src="/images/shoes1.png" alt="" />
        <img className='scale-[0.2] invisible opacity-0 absolute group-hover:scale-[1] group-hover:visible group-hover:opacity-100 transition-all duration-700 ease-in-out' src="/images/shoes2.png" alt="" />
    </div>
    </Link>
  )
}
