"use client"
import React,{useState , useEffect} from 'react'
import {motion} from 'framer-motion'

export default function ChildrensCollection() {
  const [scrolChildren , setScrolChildren] = useState(false)

  useEffect(()=>{
    const handelScrol=()=>{
      const section = document.getElementsByClassName('ChildrensCollection')
      const sectionOffset= section[0].offsetTop
      console.log(sectionOffset)
      const scrolPosition= window.pageYOffset + window.innerHeight
      console.log(scrolPosition)
      if(scrolPosition > sectionOffset){
        setScrolChildren(true)
      }
    }

    window.addEventListener('scroll', handelScrol)

    return ()=>{
      window.removeEventListener('scroll', handelScrol)
    }
  })
  return (
    <div className='ChildrensCollection min-h-[500px] container py-8 flex flex-col-reverse gap-4 items-center justify-between mt-8 md:mt-24 overflow-x-hidden overflow-y-hidden'>
      {scrolChildren && (
        <>
        
        <motion.div
        initial={{ opacity: 0, x:-300 }}
        animate={{ opacity: 1, x:0 }}
        transition={{  stiffness: 100 , duration:2 }}
        className="hidden md:block text w-[300px] md:[600px]"> 
          <h1 className='font-kohob text-[24px] md:text-[40px]'>Unveiling ... <br /> our children's collection!</h1>
          <p className='font-quickr text-[16px] md:text-[24px]'>  Dive into a world of whimsy and wonder with our brand-new Kids' Collection – a celebration of vibrant colors, imaginative designs, and unparalleled comfort for your little ones.</p>
          <h1 className='font-kohol text-[24px] md:text-[40px] text-secondary2'><span className='font-kohob text-[40px] md:text-[64px]'>07</span>days left</h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y:300 }}
        animate={{ opacity: 1, y:0 }}
        transition={{  stiffness: 100 , duration:2 }}
        className="md:hidden text w-[300px] md:[600px]"> 
          <h1 className='font-kohob text-[24px] md:text-[40px]'>Unveiling ... <br /> our children's collection!</h1>
          <p className='font-quickr text-[16px] md:text-[24px]'>  Dive into a world of whimsy and wonder with our brand-new Kids' Collection – a celebration of vibrant colors, imaginative designs, and unparalleled comfort for your little ones.</p>
          <h1 className='font-kohol text-[24px] md:text-[40px] text-secondary2'><span className='font-kohob text-[40px] md:text-[64px]'>07</span>days left</h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{  stiffness: 100 , duration:2 }}
        className="hidden md:block images w-[500px] h-[500px] border-solid border-[1px] border-secondary1 rounded-full relative  ">
          <motion.div
          initial={{ opacity: 0, x:300 }}
          animate={{ opacity: 1, x:112 }}
          transition={{  stiffness: 100 , duration:2 }}
          className=' absolute z-10'
          >

          <img  src="./images/children/Frame 18.png" alt="" />
          </motion.div>
          <img className='absolute z-0 bottom-6 -left-8' src="./images/children/a.png" alt="" />
          <motion.div 
          initial={{ opacity: 0, bottom:24, left:32 }}
          animate={{ opacity: 1, bottom:144, left:-80 }}
          transition={{  stiffness: 100 , duration:2 }}
          className='absolute '
          >

          <img  src="./images/children/b.png" alt="" />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, bottom:24, left:32 }}
          animate={{ opacity: 1, top:256, left:-80 }}
          transition={{  stiffness: 100 , duration:2 }}
          className='absolute '
          >

          <img  src="./images/children/c.png" alt="" />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, bottom:24, left:32 }}
          animate={{ opacity: 1, top:112, left:-64 }}
          transition={{  stiffness: 100 , duration:2 }}
          className='absolute '
          >

          <img  src="./images/children/d.png" alt="" />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, bottom:24, left:32 }}
          animate={{ opacity: 1, top:0, left:0 }}
          transition={{  stiffness: 100 , duration:2 }}
          className='absolute'>
          <img  src="./images/children/e.png" alt="" />
          </motion.div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y:300 }}
        animate={{ opacity: 1, y:0 }}
        transition={{  stiffness: 100 , duration:2 }}
        className='md:hidden'>
          <img src="./images/children/Frame 67.png" alt="" />
        </motion.div>
        </>
      )}
    </div>
  )
}
