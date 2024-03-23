"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [resultSearch, setResultSearch] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showMobileNavbar , setShowMobileNavbar]= useState(true)

  const cancelhandel = () => {
    setShowSearch(false);
    setResultSearch(false);
  };

  const showSearchHandel = () => {
    setShowSearch(true);
    setResultSearch(true);
  };
  return (
    <>
    {/* navbar desktab */}
    <div className="hidden md:flex">
      <div className=" navbar h-[80px] container flex items-center justify-between z-10 bg-primary1 p-0 ">
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
                ? "w-[200px] lg:w-[300px] xl:w-[400px]   -translate-x-[80%]"
                : "w-[160px]"
            } transition-all duration-700 ease-in-out flex items-center justify-center  rounded-full `}
          >
            <input
              onChange={showSearchHandel}
              className={`${
                showSearch
                  ? "w-[200px] lg:w-[300px] xl:w-[400px] -translate-x-[80%]"
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
                : "opacity-0  translate-x-24 invisible"
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
        } transition-all duration-700 ease-in-out w-[100%]  bg-secondary1 absolute z-0 `}
      ></div>
      <div
        onMouseEnter={() => setShowShop(true)}
        onMouseLeave={() => setShowShop(false)}
        className={`${
          showShop
            ? "top-24 h-[200px] opacity-100 visible"
            : "top-24 h-0 opacity-0 invisible"
        } transition-all duration-700 ease-in-out w-[100%]  bg-primary1 shadow-lg absolute z-0 `}
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
    <div className="md:hidden">
        <div className="navbar-mobile h-[80px] container flex items-center justify-between">
            <div className="icon-menu">
                {showMobileNavbar ? (
                <img onClick={()=> setShowMobileNavbar(false)} className="cursor-pointer" src="./images/menu-ca.png" alt="" />
                ) : (
                    <img onClick={()=> setShowMobileNavbar(true)} className="cursor-pointer" src="./images/menu-can.png" alt="" />
                )}
            </div>
            <div className="logo">
                <img src="./images/Frame 2.png" alt="" />
            </div>
            <div className="search">
                <img src="./images/Frame 9.png" alt="" />
            </div>
        </div>
        <div className="sub-menu container  absolute  left-0 right-0">
        <div className="top flex items-center justify-between">
            <div className="left">
                <ul className="flex items-center justify-center gap-3">
                    <li>HOME </li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="right flex items-center justify-center gap-3">
                <img src="./images/basket 1.png" alt="" />
                <img src="./images/profile 1.png" alt="" />
            </div>
        </div>
        <div className="middel mt-5 flex flex-col items-center">
            <h1 className="text-center font-kohob text-secondary1">SHOP</h1>
            <p className="text-secondary1 font-kohob border-solid border-b-2 border-secondary1 text-center">
              MEN
            </p>
            <ul className="pl-0 font-kohol flex flex-col items-center">
              <li className="hover:font-kohob cursor-pointer">ALL</li>
              <li className="hover:font-kohob cursor-pointer">lifestyle</li>
              <li className="hover:font-kohob cursor-pointer">running</li>
              <li className="hover:font-kohob cursor-pointer">football</li>
            </ul>
            <p className="text-secondary1 font-kohob border-solid border-b-2 border-secondary1">
              women
            </p>
            <ul className="pl-0 font-kohol flex flex-col items-center">
              <li className="hover:font-kohob cursor-pointer">ALL</li>
              <li className="hover:font-kohob cursor-pointer">lifestyle</li>
              <li className="hover:font-kohob cursor-pointer">running</li>
              <li className="hover:font-kohob cursor-pointer">football</li>
            </ul>
            <div className="question">
                <p>Have a question or need assistance?</p>
                <p>Our dedicated customer service team is here to help.</p>
                <textarea className="bg-secondary1/10 w-[300px] h-[100px] rounded-lg focus:outline-none p-2" placeholder="Text"></textarea>
                <button className="w-[140px] h-[40px] flex items-center justify-center border-solid border-2 border-primary2 rounded-full">SEND</button>
                <p>© 2024 WalkWave</p>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}
