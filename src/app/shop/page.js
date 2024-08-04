import Footer from '@/component/modules/Footer/Footer'
import Navbar from '@/component/modules/Navbar/Navbar'
import ProductBoxes from '@/component/templates/Shop/ProductBoxes/ProductBoxes'
import Sidebar from '@/component/templates/Shop/Sidebar/Sidebar'
import React from 'react'

export const metadata={
  title:'WALK WAVE - SHOP',
  icons:{
    icon:'/images/svgs/Frame 2.svg'

  }
}

export default function shop(params) {
  return (
    <>
    <div className="main container-none md:container mt-[90px] md:flex  justify-between gap-2">
        <Sidebar />
        <ProductBoxes />
    </div>
    </>
  )
}