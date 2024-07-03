import Cart from '@/component/templates/UserPanel/Order/Cart/Cart'
import History from '@/component/templates/UserPanel/Order/History/History'
import Status from '@/component/templates/UserPanel/Order/Status/Status'
import React from 'react'

export default function page() {
  return (
    <div className='w-full flex flex-col'>
    <Cart />
    <Status />
    <History />
    </div>
  )
}
