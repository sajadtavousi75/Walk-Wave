
'use client'
import ProductBox from '@/component/modules/ProductBox/ProductBox'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';


export default function ProductBoxes() {
  const[allProduct, setAllProduct] = useState([])
  const[filterProduct, setFilterProduct] = useState([])

  const params = useSearchParams()
  const category= params.get('category');
  const gender= params.get('gender');
  const size= params.get('size');
  const minPrice= params.get('minPrice');
  const maxPrice= params.get('maxPrice');
  const sort= params.get('sort');

  useEffect(()=>{
    getCategory()
    
  },[category , gender])


  const getCategory=async()=>{
    await fetch(`https://backend-walk.onrender.com/api/v1/product/category/${category}/gender/${gender}`)
    .then((res)=>res.json())
    .then((data)=>{
      setAllProduct(data[0])
      setFilterProduct(data[0])
    })
  }

  
  useEffect(()=>{
    if(allProduct?.length){
      let result= allProduct

      if(size){
        result=result.filter(data => data.size.some(as => as === size))
      }

      if(minPrice || maxPrice){
        const min= minPrice? parseFloat(minPrice): 0;
        const max= maxPrice? parseFloat(maxPrice): Infinity;
        result=result.filter(data => data.price >= min && data.price <= max )
      }

      if(sort){
       result= result.slice().sort((a,b) => sort === 'price: low-high' ? a.price - b.price : b.price - a.price)
      }

  
      setFilterProduct(result)
    }

  },[size,minPrice,allProduct,maxPrice ,sort ])

  





  return (
    <>
    {filterProduct?.length ? (
      <div className='product-boxes grid gap-2 grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  	 justify-items-center mt-8 md:mt-16 z-0'>
        {filterProduct.map((data)=>(
          <ProductBox  key={data._id} product={data}/>
        ))}
      </div>
    ) : (
      <h2 className='font-kohob text-secondary1 text-center w-full mt-24'>There is no product with this specification</h2>
    )}
    </>
  )
}
