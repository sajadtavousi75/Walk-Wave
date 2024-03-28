import React from 'react'

export default function ChildrensCollection() {
  return (
    <div className='ChildrensCollection container flex items-center justify-between mt-24'>
        <div className="text w-[600px]">
          <h1>Unveiling ... <br /> our children's collection!</h1>
          <p>  Dive into a world of whimsy and wonder with our brand-new Kids' Collection – a celebration of vibrant colors, imaginative designs, and unparalleled comfort for your little ones.</p>
          <h1><span>07</span>days left</h1>
        </div>
        <div className="images w-[600px] h-[600px] border-solid border-[1px] border-secondary1 rounded-full">
          <img className='translate-x-10' src="./images/children/Frame 18.png" alt="" />
        </div>
    </div>
  )
}
