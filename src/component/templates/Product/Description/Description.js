import React from 'react'

export default function Description(data) {
  return (
    <>
    {data.product.cover3.length? (
      <div className='description flex flex-col items-center mt-28'>
      <h1 className='font-kohob text-center text-[24px]'>{data.product.name}</h1>
      <p className='font-quikr w-[70%] mt-4'>{data.product.description}</p>
  </div>
    ) : (
      <></>
    )}
      
    </>
  )
}
