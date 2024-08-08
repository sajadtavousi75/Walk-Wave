"use client"
import React, { useState } from "react";
import styles from './SliderHeader.module.css'
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

  }

  return (
    <div className="mt-[90px]">
    <Swiper
      rewind={true}
      // navigation={true}
      loop={true}
      autoplay={{ delay: 3000 }}
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
          loading="lazy"
        />
        <img
        className="w-[100%] sm:hidden"
          src="./images/slider/1.png"
          alt="Slide"
          loading="lazy"
        />
        <div className=" hidden w-[30px] h-[100%] xl:flex flex-col items-center gap-2 font-kohol text-[23px] bg-primary/15 px-2 text-primary1 absolute  top-0 left-48 z-10">
          <h1 className={styles.animate}>
            N <br />I <br />K <br /> E  <br /> <br /> A <br /> I <br /> R <br /> M <br /> A <br /> X  <br /> D <br />R <br /> I <br /> F <br /> T
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
        className="hidden sm:block w-[100%] xl:h-[550px]"
          src="./images/slider/slide3.png"
          alt="Slide" 
          loading="lazy"
        />
        <img
        className="w-[100%] sm:hidden"
          src="./images/slider/2.png"
          alt="Slide"
          loading="lazy"
        />
        <div className="hidden w-[30px] h-[100%] xl:flex flex-col items-center gap-2 font-kohol text-[31px] bg-primary/15 px-2 text-primary1 absolute  top-0 left-48 z-10">
          <h1 className={styles.animate}>
            N <br />I <br />K <br /> E  <br /> <br /> A <br /> I <br /> R <br /> M <br /> A <br /> X <br />1
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
        className="hidden sm:block w-[100%] xl:h-[550px]"
          src="./images/slider/3.png"
          alt="Slide"
          loading="lazy"
        />
        <img
        className="w-[100%] sm:hidden"
          src="./images/slider/4.png"
          alt="Slide"
          loading="lazy"
        />
        <div className="hidden w-[30px] h-[100%] xl:flex flex-col items-center gap-2 font-kohol text-[31px] bg-primary/15 px-2 text-primary1 absolute  top-0 left-48 z-10">
          <h1 className={styles.animate}>
            N <br />I <br />K <br /> E  <br /> <br /> D<br /> U <br /> N <br /> K <br /> L <br /> O <br />W
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
