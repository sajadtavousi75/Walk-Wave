"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from 'framer-motion';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";


export default function SliderHeader() {

  return (
    <Swiper
      rewind={true}
      navigation={true}
      loop={true}
      autoplay={{ delay: 2000 }}
      modules={[Navigation, Autoplay]}
      className="mySwiper home-slider mt-2"
    >
      <SwiperSlide>
        <img
        className="w-[100%] xl:h-[550px]"
          src="./images/slider/slide1.png"
          alt="Slide"
        />
        <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: '-70%' }}
        transition={{ type: 'tween',ease: 'linear', stiffness: 100, duration:4, repeat: Infinity ,loop: Infinity }}
        >
        <h1 className=" text-[55px] font-kohob text-primary1 w-[100%] absolute -bottom-5 drop-shadow-xl left-0">Nike Air Max 1 Nike Air Max 1  Nike Air Max 1  Nike Air Max 1</h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 1, x: '100%' }}
        animate={{ opacity: 1, x: '30%' }}
        transition={{ type: 'tween',ease: 'linear', stiffness: 100, duration:4, repeat: Infinity ,loop: Infinity }}
        >
        <h1 className=" text-[55px] text-center w-[100%] absolute bottom-0">Nike Air Max 1  Nike Air Max 1  Nike Air Max 1  Nike Air Max 1</h1>
        </motion.div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <img
        className="w-[100%] h-[550px]"
          src="./images/slider/slide2.png"
          alt="Slide"
        />
      </SwiperSlide> */}
    </Swiper>
  )
}
