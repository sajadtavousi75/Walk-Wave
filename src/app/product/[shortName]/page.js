import React from 'react'
import Navbar from '@/component/modules/Navbar/Navbar'
import Footer from '@/component/modules/Footer/Footer'
import Gallery from '@/component/templates/Product/Gallery/Gallery'

export default function Product() {
  return (
    <>
    <div className=" border-solid border-b-4 border-secondary1  fixed top-0 left-0 right-0 z-50 ">
      <Navbar />
    </div>
    <div className="main mt-[90px] container">
        <Gallery />
    </div>
    <Footer />
    </>
  )
}
