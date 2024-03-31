import Footer from '@/component/modules/Footer/Footer'
import Navbar from '@/component/modules/Navbar/Navbar'
import Sidebar from '@/component/templates/Shop/Sidebar/Sidebar'
import React from 'react'

export default function shop() {
  return (
    <>
    <div className=" border-solid border-b-4 border-secondary1 bg-primary1 fixed top-0 left-0 right-0 z-50 ">
      <Navbar />
    </div>
    <div className="main container mt-[90px]">
        <Sidebar />
    </div>
        <Footer />
    </>
  )
}
