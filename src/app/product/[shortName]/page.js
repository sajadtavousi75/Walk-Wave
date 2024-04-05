import React from 'react'
import Navbar from '@/component/modules/Navbar/Navbar'
import Footer from '@/component/modules/Footer/Footer'
import Gallery from '@/component/templates/Product/Gallery/Gallery'
import Description from '@/component/templates/Product/Description/Description'
import Slider from '@/component/templates/Product/Slider/Slider'

export default function Product() {
  return (
    <>
    <div className=" border-solid border-b-4 border-secondary1  fixed top-0 left-0 right-0 z-50 ">
      <Navbar />
    </div>
    <div className="main mt-[90px] container">
        <Gallery />
        <Description />
        <Slider />
    </div>
    <Footer />
    </>
  )
}
