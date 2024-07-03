import React from 'react'

export default function History() {
  return (
    <div className='history mt-16'>
        <p className='font-kohob text-[24px] border-solid border-b-2 border-secondary1' >HISTORY</p>
        <div className="boxes ">
        <div className="box flex flex-col lg:flex-row items-center justify-center lg:justify-between shadow-lg rounded-[20px] p-2 h-auto min-h-[130px]">
          <div className="flex items-center justify-center gap-4">
          <div className="img w-[80px] h-[80px]">
            <img src="/images/gallery/big1.png" alt="" />
          </div>
          <div className="details">
            <p className="font-kohob ">Nike Air Max Plus Drift</p>
            <p className="font-kohol text-secondary1">Men's Shoes</p>
          </div>
          </div>
          <div className="price">
            <p className="font-kohob text-[24px] text-center">€ 198</p>
          </div>
          <div className="flex items-center justify-center gap-8">
          </div>
        </div>
      </div>
    </div>
  )
}
