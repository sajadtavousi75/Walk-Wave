import Sidebar from '@/component/modules/Sidebar/Sidebar'
import React from 'react'

export default function layout({children}) {
  return (
    <div className='main md:flex  container mt-[110px]'>
        <Sidebar />
        {children}
        
    </div>
  )
}
