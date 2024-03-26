"use client";
import React, { useState } from "react";
import {motion} from 'framer-motion'

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [resultSearch, setResultSearch] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showMobileNavbar , setShowMobileNavbar]= useState(true)
  const [showMobileSearch , setShowMobileSearch]= useState(false)
  const [showMobileSearchResult , setShowMobileSearchResult]= useState(false)

  const cancelhandel = () => {
    setShowSearch(false);
    setResultSearch(false);
  };

  const showSearchHandel = () => {
    setShowSearch(true);
    setResultSearch(true);
  };

  const handelMobile=()=>{
    setShowMobileSearch(false)
    setShowMobileSearchResult(false)
  }
  return (
    <>
    {/* navbar desktab */}
    <div className="hidden md:flex">
      <div className=" navbar h-[80px] container   flex items-center justify-between z-10 bg-primary1  overflow-x-hidden">
        <div className="navbar-logo">
          <img src="./images/Frame 2.png" alt="" />
        </div>
        <div className="navbar-links flex items-center justify-center">
          <ul
            className={`${
              showSearch ? "opacity-0" : "opacity-100"
            } transition-all duration-700 ease-in-out flex items-center justify-between gap-2 w-[250px] pl-0 mb-0 text-base`}
          >
            <li className="font-kohob text-secondary1 cursor-pointer w-[100px] h-[80px] flex items-center justify-center">
              HOME
            </li>
            <li
              onMouseEnter={() => setShowShop(true)}
              onMouseLeave={() => setShowShop(false)}
              className={`${
                showShop
                  ? "bg-secondary1 text-primary1 h-[80px] font kohob"
                  : "h-[0px] font-kohol"
              } transition-all duration-700 ease-in-out cursor-pointer w-[100px]  flex items-center justify-center`}
            >
              SHOP
            </li>
            <li className=" cursor-pointer w-[120px] h-[80px] font-kohol	flex items-center justify-center">
              ABOUT US
            </li>
          </ul>
        </div>
        <div
          className={`${
            showSearch ? "" : ""
          } transition-all duration-300 ease-in-out   navbar-profile flex gap-2 relative`}
        >
          <div
            className={`${
              showSearch
                ? "w-[200px] lg:w-[300px] xl:w-[400px]   -translate-x-[50%] lg:-translate-x-[60%] xl:-translate-x-[85%]"
                : "w-[160px]"
            } transition-all duration-700 ease-in-out flex items-center justify-center  rounded-full `}
          >
            <input
              onChange={showSearchHandel}
              className={`${
                showSearch
                  ? "w-[200px] lg:w-[300px] xl:w-[400px] -translate-x-[50%]"
                  : "w-[160px] "
              }transition-all duration-700 ease-in-out h-[40px] bg-secondary1/10 p-2 rounded-full text-center font-kohoe focus:outline-none focus:border-none hover:bg-secondary1/20`}
              type="text"
              placeholder="Search"
            />
            <img
              className="absolute top-2 left-1"
              src="./images/search.png"
              alt=""
            />
          </div>
          <button
            className={`${
              showSearch
                ? "opacity-100 translate-x-16 visible"
                : "opacity-0  translate-x-40 invisible"
            } transition-all duration-700 ease-in-out flex items-center justify-center`}
            onClick={cancelhandel}
          >
            <img src="./images/cancel.png" alt="" />
          </button>
          <button
            className={`${
              showSearch ? "invisible" : "visible "
            } transition-all duration-300 ease-in-out`}
          >
            <img src="./images/basket 1.png" alt="" />
          </button>
          <button
            className={`${
              showSearch ? "invisible" : "visible "
            } transition-all duration-300 ease-in-out`}
          >
            <img src="./images/profile 1.png" alt="" />
          </button>
        </div>
      </div>
      <div
        className={`${
          resultSearch ? "top-24 h-[250px]" : "top-24 h-0"
        } transition-all duration-700 ease-in-out w-[100%]  bg-secondary1 absolute z-10 `}
      ></div>
      <div
        onMouseEnter={() => setShowShop(true)}
        onMouseLeave={() => setShowShop(false)}
        className={`${
          showShop
            ? "top-24 h-[200px] opacity-100 visible"
            : "top-24 h-0 opacity-0 invisible"
        } transition-all duration-700 ease-in-out w-[100%]  bg-primary1 shadow-lg absolute z-10 `}
      >
        <div className="flex items-center justify-center gap-[100px] mr-24">
          <div>
            <p className="text-secondary1 font-kohob border-solid border-b-2 border-secondary1">
              MEN
            </p>
            <ul className="pl-0 font-kohol">
              <li className="hover:font-kohob cursor-pointer">ALL</li>
              <li className="hover:font-kohob cursor-pointer">lifestyle</li>
              <li className="hover:font-kohob cursor-pointer">running</li>
              <li className="hover:font-kohob cursor-pointer">football</li>
            </ul>
          </div>
          <div>
            <p className="text-secondary1 font-kohob border-solid border-b-2 border-secondary1">
              women
            </p>
            <ul className="pl-0 font-kohol">
              <li className="hover:font-kohob cursor-pointer">ALL</li>
              <li className="hover:font-kohob cursor-pointer">lifestyle</li>
              <li className="hover:font-kohob cursor-pointer">running</li>
              <li className="hover:font-kohob cursor-pointer">football</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* navbar mobile */}
    <div className="md:hidden 	">
        <div className="navbar-mobile h-[80px] container flex items-center justify-between  overflow-x-hidden">
          {showMobileSearch ? (
            <div className="icon-menu">
                    <img onClick={handelMobile} className="cursor-pointer" src="./images/menu-can.png" alt="" />
            </div>
          ) : (
            <div className="icon-menu">
                {showMobileNavbar ? (
                <img onClick={()=> setShowMobileNavbar(false)} className="cursor-pointer" src="./images/menu-ca.png" alt="" />
                ) : (
                    <img onClick={()=> setShowMobileNavbar(true)} className="cursor-pointer" src="./images/menu-can.png" alt="" />
                )}
            </div>
          )}
            <div className="logo flex translate-x-20">
                <img className={`${showMobileSearch ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all duration-700 ease-in-out`} src="./images/Frame 2.png" alt="" />
                <input onChange={()=>setShowMobileSearchResult(true)} className={`${showMobileSearch ? '-translate-x-32 visible opacity-100' : 'translate-x-24 invisible opacity-0'} transition-all duration-700 ease-in-out w-[200px] h-[40px] text-center bg-secondary1/10 rounded-full p-2 focus:outline-none `} type="text" />
                <img
              className={`${showMobileSearch ? 'opacity-100 visible left-2' : 'opacity-0 invisible left-80'} transition-all duration-700 ease-in-ou absolute top-2 left-2`}
              src="./images/search.png"
              alt=""
            />
            </div>
            
            <div className={`${showMobileSearch ? '-translate-x-[220px] sm:-translate-x-[330px] invisible opacity-0' : 'translate-x-0 visible opacity-100'} search transition-all duration-700 ease-in-out flex items-center justify-center`}>
                <img onClick={()=>setShowMobileSearch(true)} src="./images/Frame 9.png" alt="" />
            </div>
        </div>
        <div className={`${showMobileNavbar ? 'top-[83px] h-0 ' : 'top-[83px] h-[600px] '} transition-all duration-700 ease-in-out bg-primary1  sub-menu  absolute  left-0 right-0 overflow-x-hidden overflow-y-hidden mt-[5px] z-10`}>
        <div className="top flex items-center justify-between container">
          {!showMobileNavbar ? (

            <motion.div
            initial={{ opacity: 0, x: '-100vw', }}
            animate={{ opacity: 1, x: 0 ,  }}
            transition={{  stiffness: 100 , delay:1 }}
            className="left">
                <ul className="flex items-center justify-center gap-3">
                    <li className="text-secondary1 font-kohob">HOME </li>
                    <li className="font-kohol">About Us</li>
                </ul>
            </motion.div>
          ) : (
            <></>
          )}
            {!showMobileNavbar ? (

            <motion.div
            initial={{ opacity: 0, x: '100vw', }}
            animate={{ opacity: 1, x: 0 ,  }}
            transition={{  stiffness: 100 , delay:1 }} 
            style={{}}
            className="right flex items-center justify-center gap-3">
                <img src="./images/basket 1.png" alt="" />
                <img src="./images/profile 1.png" alt="" />
            </motion.div>
            ) : (
              <></>
            )}
        </div>
        {!showMobileNavbar ? (

        <motion.div
        initial={{ opacity: 0, y: '100vw', }}
        animate={{ opacity: 1, y: 0 ,  }}
        transition={{  stiffness: 100 , delay:1 }}
        className="middel mt-5 flex flex-col items-center">
            <h1 className="text-center font-kohob text-secondary1 mb-2">SHOP</h1>
            <p className="text-secondary1 font-kohob border-solid border-b-2 border-secondary1 text-center mb-1">
              MEN
            </p>
            <ul className="pl-0 font-kohol flex flex-col items-center">
              <li className="hover:font-kohob cursor-pointer">ALL</li>
              <li className="hover:font-kohob cursor-pointer">lifestyle</li>
              <li className="hover:font-kohob cursor-pointer">running</li>
              <li className="hover:font-kohob cursor-pointer">football</li>
            </ul>
            <p className="text-secondary1 font-kohob border-solid border-b-2 border-secondary1 mb-1 mt-2">
              women
            </p>
            <ul className="pl-0 font-kohol flex flex-col items-center">
              <li className="hover:font-kohob cursor-pointer">ALL</li>
              <li className="hover:font-kohob cursor-pointer">lifestyle</li>
              <li className="hover:font-kohob cursor-pointer">running</li>
              <li className="hover:font-kohob cursor-pointer">football</li>
            </ul>
            <div className="question">
                <p className="text-center font-kohob mt-2">Have a question or need assistance?</p>
                <p className="text-center font-kohol">Our dedicated customer service team is here to help.</p>
                <div className="flex items-center justify-center mt-2"><textarea className="bg-secondary1/10 font-kohol w-[300px] h-[100px] rounded-lg focus:outline-none p-2" placeholder="Text"></textarea></div>
                <div className="flex items-center justify-center mt-2"><button className="w-[140px] font-kohob h-[40px] flex items-center justify-center border-solid border-2 border-primary2 rounded-full">SEND</button></div>
                <p className="text-center mt-3 font-kohol">© 2024 <span className="font-kohob">WalkWave</span></p>
            </div>
        </motion.div>
        ) : (
          <></>
        )}
        </div>
        <div className={`${showMobileSearchResult ? 'top-[79px] h-[600px]' : 'top-[79px] h-0'} transition-all duration-700 ease-in-out bg-primary1   absolute  left-0 right-0 overflow-x-hidden overflow-y-hidden mt-[5px] z-10`}>

        </div>
    </div>
    </>
  );
}
