"use client"
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from 'framer-motion';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay , Mousewheel} from "swiper/modules";


export default function SliderHeader() {
  const [changeSlide , setChangeSlide] = useState(false)

  const handelSlide=()=>{
    setChangeSlide(true)
    setTimeout(() => {
      setChangeSlide(false)
    }, 2000);

    console.log(changeSlide)
  }

  return (
    <Swiper
      rewind={true}
      // navigation={true}
      loop={true}
      autoplay={{ delay: 2000 }}
      modules={[Navigation, Autoplay]}
      mousewheel={{enabled: false}} 
      onSlideChange={handelSlide}
      className="mySwiper home-slider mt-2"
    >
      <SwiperSlide>
        <img
        className="hidden sm:block w-[100%] xl:h-[550px]"
          src="./images/slider/slide2.png"
          alt="Slide"
        />
        <img
        className="w-[100%] sm:hidden"
          src="./images/slider/Frame 59.png"
          alt="Slide"
        />
        {changeSlide && (
          <>
          <motion.div
        initial={{ opacity: 1, x: 0  }}
        animate={{ opacity: 1, x: '-70%' }}
        transition={{ type: 'tween',ease: 'linear', stiffness: 100, duration:4, repeat: Infinity ,loop: Infinity,delay:1 }}
        style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0 }}
        >
        <h1 className=" text-[55px] font-kohob text-primary1 w-[100%]  drop-shadow-xl">Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1</h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 1, x: '100%'}}
        animate={{ opacity: 1, x: '30%'}}
        transition={{ type: 'tween',ease: 'linear', stiffness: 100, duration:4, repeat: Infinity ,loop: Infinity,delay:1 }}
        style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0 }}
        >
        <h1 className=" text-[55px] font-kohob text-primary1 w-[100%] drop-shadow-xl">Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1</h1>
        </motion.div>
          </>
        )}
        
      </SwiperSlide>
      <SwiperSlide>
        <img
        className="hidden sm:block w-[100%] xl:h-[550px]"
          src="./images/slider/slide1.png"
          alt="Slide"
        />
        <img
        className="w-[100%] sm:hidden"
          src="./images/slider/Frame 59.png"
          alt="Slide"
        />
        {changeSlide && (
          <>
          <motion.div
        initial={{ opacity: 1, x: 0  }}
        animate={{ opacity: 1, x: '-70%' }}
        transition={{ type: 'tween',ease: 'linear', stiffness: 100, duration:4, repeat: Infinity ,loop: Infinity,delay:1 }}
        style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0 }}
        >
        <h1 className=" text-[55px] font-kohob text-primary1 w-[100%]  drop-shadow-xl">sajad sajad <span className="m-2"></span> sajad sajad <span className="m-2"></span> sajad sajad <span className="m-2"></span> Nike Air Max 1</h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 1, x: '100%'}}
        animate={{ opacity: 1, x: '30%'}}
        transition={{ type: 'tween',ease: 'linear', stiffness: 100, duration:4, repeat: Infinity ,loop: Infinity,delay:1 }}
        style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0 }}
        >
        <h1 className=" text-[55px] font-kohob text-primary1 w-[100%] drop-shadow-xl">sajad sajad <span className="m-2"></span> sajad sajad <span className="m-2"></span> sajad sajad <span className="m-2"></span> Nike Air Max 1</h1>
        </motion.div>
          </>
        )}
        
      </SwiperSlide>
      <SwiperSlide>
        <img
        className="hidden sm:block w-[100%] xl:h-[550px]"
          src="./images/slider/slide3.png"
          alt="Slide"
        />
        <img
        className="w-[100%] sm:hidden"
          src="./images/slider/Frame 59.png"
          alt="Slide"
        />
        
        <motion.div
        initial={{ opacity: 1, x: 0  }}
        animate={{ opacity: 1, x: '-70%' }}
        transition={{ type: 'tween',ease: 'linear', stiffness: 100, duration:4, repeat: Infinity ,loop: Infinity,delay:1 }}
        style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0 }}
        >
        <h1 className=" text-[55px] font-kohob text-primary1 w-[100%]  drop-shadow-xl">Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1</h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 1, x: '100%'}}
        animate={{ opacity: 1, x: '30%'}}
        transition={{ type: 'tween',ease: 'linear', stiffness: 100, duration:4, repeat: Infinity ,loop: Infinity,delay:1 }}
        style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0 }}
        >
        <h1 className=" text-[55px] font-kohob text-primary1 w-[100%] drop-shadow-xl">Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1 <span className="m-2"></span> Nike Air Max 1</h1>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  )
}
