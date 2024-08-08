"use client"
import React,{useState , useEffect} from 'react'
import {motion} from 'framer-motion'

export default function Banner() {
    const [scrolBanner , setScrolBanner] = useState(false)

    useEffect(()=>{
        const handelScrol=()=>{
          const section = document.getElementsByClassName('banner')
          const sectionOffset= section[0].offsetTop
          const scrolPosition= window.pageYOffset + window.innerHeight
          if(scrolPosition > sectionOffset){
            setScrolBanner(true)
          }
        }
    
        window.addEventListener('scroll', handelScrol)
    
        return ()=>{
          window.removeEventListener('scroll', handelScrol)
        }
      })


  return (
    <div className='banner w-[100%]  lg:h-[400px]  overflow-y-hidden my-12 relative'>
        {scrolBanner && (
            <>
            <motion.div
        initial={{ opacity: 1, y:-100}}
        animate={{ opacity: 1, y: 0}}
        transition={{  stiffness: 100 , duration:2}}
        className='w-full '
        >
        <img loading="lazy" className='w-full '  src="./images/banner/banner1.png" alt="" />
        </motion.div>
        <motion.div
        initial={{ opacity: 1, bottom:-80}}
        animate={{ opacity: 1, bottom:-30 }}
        transition={{  stiffness: 100 , duration:2 }}
        className='absolute hidden md:block left-[15%] lg:left-[25%] xl:left-[30%]'
        >
        <img loading="lazy" className=''  src="/images/banner/banner2.png" alt="" />
        </motion.div>
        <motion.div
        initial={{ opacity: 1, bottom:-80}}
        animate={{ opacity: 1, bottom:-60 }}
        transition={{  stiffness: 100 , duration:2 }}
        className='absolute md:hidden  min-[500px]:left-[20%] '
        >
        <img loading="lazy" className=''  src="/images/banner/banner3.png" alt="" />
        </motion.div>
            </>
        )}
        
    </div>
  )
}
