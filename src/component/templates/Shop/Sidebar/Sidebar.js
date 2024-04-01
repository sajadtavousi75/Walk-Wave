"use client";
import React, { useState ,useEffect } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [showGender, setShowGender] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(2000);
  const [genderIndex, setGenderIndex] = useState(null);
  const [genderValue, setGenderValue] = useState("ALL");
  const [sortIndex, setSortIndex] = useState(null);
  const [sortValue, setSortValue] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(null);
  const [categoryValue, setCategoryValue] = useState("All");
  const [sizeIndex, setSizeIndex] = useState(null);
  const [sizeValue, setSizeValue] = useState("All");
  const [showFilterMobile, setShowFilterMobile] = useState(false);


  useEffect(()=>{
    if(showFilterMobile){
      document.body.style.overflow ='hidden'
    }else{
      document.body.style.overflow ='auto'
    }
  },[showFilterMobile])
  return (
    <>
      <div className="sidebar hidden md:block  bg-primary1   relative w-[150px] h-[100vh]  sticky top-[100px] z-20">
        <div className="filter flex items-center justify-between">
          <svg
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.45167 19.9839C8.45167 19.4494 8.01839 19.0161 7.48393 19.0161H1.03232C0.497853 19.0161 0.0645752 19.4494 0.0645752 19.9839C0.0645752 20.5183 0.497853 20.9516 1.03232 20.9516H7.48393C8.01839 20.9516 8.45167 20.5183 8.45167 19.9839Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.4194 5.79001C19.4194 5.25554 19.8527 4.82227 20.3872 4.82227H26.8388C27.3732 4.82227 27.8065 5.25554 27.8065 5.79001C27.8065 6.32447 27.3732 6.75775 26.8388 6.75775H20.3872C19.8527 6.75775 19.4194 6.32447 19.4194 5.79001Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.8066 19.9839C27.8066 19.4494 27.3733 19.0161 26.8388 19.0161H15.2259C14.6915 19.0161 14.2582 19.4494 14.2582 19.9839C14.2582 20.5183 14.6915 20.9516 15.2259 20.9516H26.8388C27.3733 20.9516 27.8066 20.5183 27.8066 19.9839Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0645752 5.79001C0.0645752 5.25554 0.497853 4.82227 1.03232 4.82227H12.6452C13.1797 4.82227 13.613 5.25554 13.613 5.79001C13.613 6.32447 13.1797 6.75775 12.6452 6.75775H1.03232C0.497853 6.75775 0.0645752 6.32447 0.0645752 5.79001Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3549 16.9511C12.9583 16.9511 14.2582 18.251 14.2582 19.8543C14.2582 21.4577 12.9583 22.7576 11.3549 22.7576C9.75154 22.7576 8.45172 21.4577 8.45172 19.8543C8.45172 18.251 9.75154 16.9511 11.3549 16.9511ZM16.1937 19.8543C16.1937 17.1819 14.0273 15.0156 11.3549 15.0156C8.6826 15.0156 6.51624 17.1819 6.51624 19.8543C6.51624 22.5267 8.6826 24.693 11.3549 24.693C14.0273 24.693 16.1937 22.5267 16.1937 19.8543Z"
              fill="#008080"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5162 2.75775C14.9128 2.75775 13.613 4.05757 13.613 5.66097C13.613 7.26438 14.9128 8.5642 16.5162 8.5642C18.1196 8.5642 19.4194 7.26438 19.4194 5.66097C19.4194 4.05757 18.1196 2.75775 16.5162 2.75775ZM11.6775 5.66097C11.6775 2.98863 13.8438 0.822266 16.5162 0.822266C19.1886 0.822266 21.3549 2.98863 21.3549 5.66097C21.3549 8.33332 19.1886 10.4997 16.5162 10.4997C13.8438 10.4997 11.6775 8.33332 11.6775 5.66097Z"
              fill="#008080"
            />
          </svg>
          <h1 className="font-kohob text-[24px]">FILTER</h1>
        </div>
        <div className="sort mt-4">
          <div className="title flex items-center justify-center gap-2 md:justify-between">
            <h1 className="font-kohob">SORT BY</h1>
            <svg
              className={`${
                showSort ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => {
                setShowSort(true);
                setShowPrice(false);
                setShowSize(false);
                setShowGender(false);
              }}
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25874 0.827334L1.25872 0.827353C0.580427 1.57502 0.580424 2.77818 1.25872 3.52583L1.25881 3.52592L8.67355 11.6906C8.67355 11.6906 8.67356 11.6906 8.67356 11.6906C9.95664 13.1036 12.0469 13.103 13.3294 11.6895L13.3294 11.6895L20.7413 3.51982C21.4196 2.77217 21.4196 1.569 20.7413 0.821322C20.0502 0.0595593 18.9187 0.0595596 18.2276 0.821322L11.8838 7.81364L11.8838 7.81367C11.3912 8.35679 10.6034 8.35679 10.1108 7.81367L10.1108 7.81364L3.7724 0.827358C3.7724 0.827355 3.77239 0.827352 3.77239 0.827349C3.08132 0.0655723 1.94993 0.0656112 1.25874 0.827334Z"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            <svg
              className={`${
                !showSort ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => setShowSort(false)}
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5561 12.0047C20.148 11.3523 20.148 10.2945 19.5561 9.64215L12.1414 1.47746C10.9575 0.17376 9.03909 0.174262 7.85571 1.47847L0.443903 9.64816C-0.147968 10.3005 -0.147968 11.3583 0.443903 12.0107C1.03579 12.6631 1.9954 12.6631 2.58729 12.0107L8.93103 5.01838C9.52287 4.36586 10.4825 4.36586 11.0744 5.01838L17.4128 12.0047C18.0046 12.6571 18.9641 12.6571 19.5561 12.0047Z"
                fill="#008080"
              />
            </svg>
          </div>
          <p className="font-kohol text-[14px] text-secondary1">{sortValue}</p>
          <div
            className={`${
              showSort
                ? "h-[80px] "
                : "h-0 "
            } transition-all duration-700 ease-in-out list mt-4 bg-primary1  `}
          >
            {showSort ? (

            <motion.ul
            initial={{ opacity: 0, display:'none' }}
            animate={{ opacity: 1, display:'block'}}
            transition={{ stiffness: 100, delay: 0.5 }}
            className="font-kohol ">
              {["Newest", "price: high-low", "price: low-high"].map(
                (item, index) => (
                  <li
                    onClick={(event) => {
                      setSortIndex(index);
                      setSortValue(event.target.innerText);
                    }}
                    className={`${
                      sortIndex === index ? "font-kohob text-secondary1" : ""
                    } cursor-pointer hover:font-kohob`}
                  >
                    {item}
                  </li>
                )
              )}
            </motion.ul>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="gender mt-2">
          <div className="title flex items-center justify-between">
            <h1 className="font-kohob">GENDER</h1>
            <svg
              className={`${
                showGender ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => {
                setShowGender(true);
                setShowPrice(false);
                setShowSize(false);
                setShowSort(false);
              }}
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25874 0.827334L1.25872 0.827353C0.580427 1.57502 0.580424 2.77818 1.25872 3.52583L1.25881 3.52592L8.67355 11.6906C8.67355 11.6906 8.67356 11.6906 8.67356 11.6906C9.95664 13.1036 12.0469 13.103 13.3294 11.6895L13.3294 11.6895L20.7413 3.51982C21.4196 2.77217 21.4196 1.569 20.7413 0.821322C20.0502 0.0595593 18.9187 0.0595596 18.2276 0.821322L11.8838 7.81364L11.8838 7.81367C11.3912 8.35679 10.6034 8.35679 10.1108 7.81367L10.1108 7.81364L3.7724 0.827358C3.7724 0.827355 3.77239 0.827352 3.77239 0.827349C3.08132 0.0655723 1.94993 0.0656112 1.25874 0.827334Z"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            <svg
              className={`${
                !showGender ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => setShowGender(false)}
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5561 12.0047C20.148 11.3523 20.148 10.2945 19.5561 9.64215L12.1414 1.47746C10.9575 0.17376 9.03909 0.174262 7.85571 1.47847L0.443903 9.64816C-0.147968 10.3005 -0.147968 11.3583 0.443903 12.0107C1.03579 12.6631 1.9954 12.6631 2.58729 12.0107L8.93103 5.01838C9.52287 4.36586 10.4825 4.36586 11.0744 5.01838L17.4128 12.0047C18.0046 12.6571 18.9641 12.6571 19.5561 12.0047Z"
                fill="#008080"
              />
            </svg>
          </div>
          <p className="font-kohol text-[14px] text-secondary1">
            {genderValue}
          </p>
          <div
            className={`${
              showGender
                ? "h-[80px] "
                : "h-0 "
            } transition-all duration-700 ease-in-out list mt-4 bg-primary1  `}
          >
            {showGender ? (

            <motion.ul
            initial={{ opacity: 0, display:'none' }}
            animate={{ opacity: 1, display:'block'}}
            transition={{ stiffness: 100, delay: 0.5 }}
            className="font-kohol ">
              {["ALL", "MEN", "WOMEN"].map((item, index) => (
                <li
                  onClick={(event) => {
                    setGenderIndex(index);
                    setGenderValue(event.target.innerText);
                  }}
                  key={index}
                  className={`${
                    genderIndex === index ? "font-kohob text-secondary1" : ""
                  } hover:font-kohob cursor-pointer`}
                >
                  {item}
                </li>
              ))}
            </motion.ul>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="category mt-2">
          <ul className="font-kohol w-[55px]">
            {["ALL", "lifestyle", "running", "football"].map((item, index) => (
              <li
                onClick={(event) => {
                  setCategoryIndex(index);
                  setCategoryValue(event.target.innerText);
                }}
                className={`${
                  categoryIndex === index ? "font-kohob text-secondary1" : ""
                } cursor-pointer	 hover:font-kohob`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="price mt-4">
          <div className="title flex items-center justify-between">
            <h1 className="font-kohob">Price Range</h1>
            <svg
              className={`${
                showPrice ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => {
                setShowPrice(true);
                setShowGender(false);
                setShowSize(false);
                setShowSort(false);
              }}
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25874 0.827334L1.25872 0.827353C0.580427 1.57502 0.580424 2.77818 1.25872 3.52583L1.25881 3.52592L8.67355 11.6906C8.67355 11.6906 8.67356 11.6906 8.67356 11.6906C9.95664 13.1036 12.0469 13.103 13.3294 11.6895L13.3294 11.6895L20.7413 3.51982C21.4196 2.77217 21.4196 1.569 20.7413 0.821322C20.0502 0.0595593 18.9187 0.0595596 18.2276 0.821322L11.8838 7.81364L11.8838 7.81367C11.3912 8.35679 10.6034 8.35679 10.1108 7.81367L10.1108 7.81364L3.7724 0.827358C3.7724 0.827355 3.77239 0.827352 3.77239 0.827349C3.08132 0.0655723 1.94993 0.0656112 1.25874 0.827334Z"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            <svg
              className={`${
                !showPrice ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => setShowPrice(false)}
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5561 12.0047C20.148 11.3523 20.148 10.2945 19.5561 9.64215L12.1414 1.47746C10.9575 0.17376 9.03909 0.174262 7.85571 1.47847L0.443903 9.64816C-0.147968 10.3005 -0.147968 11.3583 0.443903 12.0107C1.03579 12.6631 1.9954 12.6631 2.58729 12.0107L8.93103 5.01838C9.52287 4.36586 10.4825 4.36586 11.0744 5.01838L17.4128 12.0047C18.0046 12.6571 18.9641 12.6571 19.5561 12.0047Z"
                fill="#008080"
              />
            </svg>
          </div>
          <p className="font-kohol text-[14px] text-secondary1">{`${priceMin}-${priceMax}`}</p>
          <div
            className={`${
              showPrice
                ? "h-[165px] "
                : "h-0 "
            } transition-all duration-700 ease-in-out price-range mt-4 bg-primary1  `}
          >
            {showPrice ? (

            <motion.div
            initial={{ opacity: 0, display:'none' }}
            animate={{ opacity: 1, display:'block'}}
            transition={{ stiffness: 100, delay: 0.5 }}
            >
            <div className="price-min mt-4">
              <p className="font-kohob text-[14px] text-secondary1">min</p>
              <input
                onChange={(event) => setPriceMin(event.target.value)}
                className="bg-secondary1"
                type="range"
                min={0}
                max={2000}
                value={priceMin}
              />
            </div>
            <div className="price-max">
              <p className="font-kohob text-[14px] text-secondary1">max</p>
              <input
                onChange={(event) => setPriceMax(event.target.value)}
                className="bg-secondary1"
                type="range"
                min={0}
                max={2000}
                value={priceMax}
              />
            </div>
            <div className="show-price flex items-center justify-between gap-4">
              <input onChange={(event) => setPriceMin(event.target.value)} className="w-[70px] h-[40px] flex items-center justify-center rounded-full bg-secondary1/10 font-kohob text-[14px] text-center outline-none" type="number" value={priceMin}/>
              <input onChange={(event) => setPriceMax(event.target.value)} className="w-[70px] h-[40px] flex items-center justify-center rounded-full bg-secondary1/10 font-kohob text-[14px] text-center outline-none" type="number" value={priceMax}/>
              
            </div>
            <h1 className="text-center font-kohob text-secondary1 mt-2">0-2000</h1>
            </motion.div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="size mt-2">
          <div className="title flex items-center justify-between">
            <h1 className="font-kohob">Size</h1>
            <svg
              className={`${
                showSize ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => {
                setShowSize(true);
                setShowGender(false);
                setShowPrice(false);
                setShowSort(false);
              }}
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25874 0.827334L1.25872 0.827353C0.580427 1.57502 0.580424 2.77818 1.25872 3.52583L1.25881 3.52592L8.67355 11.6906C8.67355 11.6906 8.67356 11.6906 8.67356 11.6906C9.95664 13.1036 12.0469 13.103 13.3294 11.6895L13.3294 11.6895L20.7413 3.51982C21.4196 2.77217 21.4196 1.569 20.7413 0.821322C20.0502 0.0595593 18.9187 0.0595596 18.2276 0.821322L11.8838 7.81364L11.8838 7.81367C11.3912 8.35679 10.6034 8.35679 10.1108 7.81367L10.1108 7.81364L3.7724 0.827358C3.7724 0.827355 3.77239 0.827352 3.77239 0.827349C3.08132 0.0655723 1.94993 0.0656112 1.25874 0.827334Z"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            <svg
              className={`${
                !showSize ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => setShowSize(false)}
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5561 12.0047C20.148 11.3523 20.148 10.2945 19.5561 9.64215L12.1414 1.47746C10.9575 0.17376 9.03909 0.174262 7.85571 1.47847L0.443903 9.64816C-0.147968 10.3005 -0.147968 11.3583 0.443903 12.0107C1.03579 12.6631 1.9954 12.6631 2.58729 12.0107L8.93103 5.01838C9.52287 4.36586 10.4825 4.36586 11.0744 5.01838L17.4128 12.0047C18.0046 12.6571 18.9641 12.6571 19.5561 12.0047Z"
                fill="#008080"
              />
            </svg>
          </div>
          <p className="font-kohol text-[14px] text-secondary1">{sizeValue}</p>
          <div
            className={`${
              showSize
                ? "h-[150px] opacity-100 visible"
                : "h-0 opacity-0 invisible"
            } transition-all duration-700 ease-in-out size-number mt-4 `}
          >
            {showSize ? (

            <motion.div
            initial={{ opacity: 0, display:'none' }}
            animate={{ opacity: 1, display:'block'}}
            transition={{ stiffness: 100, delay: 0.5 }}
            >
            <ul className="font-kohol grid grid-cols-3 ">
              {[
                "ALL",
                "35",
                "36",
                "37.5",
                "38",
                "39",
                "40",
                "40.5",
                "41",
                "42",
                "43",
                "44.5",
                "45.5",
                "47",
                "48",
                "50",
                "51",
                "51.5",
              ].map((item, index) => (
                <li
                  onClick={(event) => {
                    setSizeIndex(index);
                    setSizeValue(event.target.innerText);
                  }}
                  className={`${
                    sizeIndex === index ? "font-kohob text-secondary1" : ""
                  } cursor-pointer hover:font-kohob	`}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
            </motion.div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* sidebar mobile */}
      <div
        className={`${
          showFilterMobile ? "h-[350px]" : "h-[60px]"
        } sidebar md:hidden shadow-lg transition-all duration-700 ease-in-out   bg-primary1   relative  sticky top-[83px] left-0 right-0 z-20`}
      >
        <div className="content container">
          <div onClick={() => setShowFilterMobile(!showFilterMobile)} className="filter w-[120px] pt-[10px] flex items-center justify-start gap-2">
            {showFilterMobile ? (
              <svg
              className="cursor-pointer"
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1427_2634)">
                <g clip-path="url(#clip1_1427_2634)">
                  <path
                    d="M22.6379 23.4143L14.0645 14.8407L5.49116 23.4143C4.77612 24.1293 3.64311 24.1959 2.7967 23.5347L2.65022 23.4013C1.8693 22.6204 1.86929 21.3543 2.65022 20.5733L11.2238 12L2.65022 3.42666C1.93518 2.71163 1.86859 1.57858 2.52986 0.732166L2.66322 0.585686C3.44413 -0.195229 4.7103 -0.19523 5.49122 0.585693L14.0645 9.15926L22.6379 0.585687C23.3529 -0.129345 24.4859 -0.195938 25.3323 0.465326L25.4788 0.598722C26.2597 1.37963 26.2597 2.64574 25.4788 3.42667L16.9053 12L25.4788 20.5733C26.1939 21.2884 26.2605 22.4214 25.5992 23.2678L25.4658 23.4143C24.6849 24.1952 23.4188 24.1952 22.6379 23.4143ZM24.0358 1.00013C24.0412 1.00004 24.0465 1 24.0518 1L24.0358 1.00013ZM23.9031 1.01106L23.9469 1.00549C23.9324 1.00701 23.9177 1.00887 23.9031 1.01106ZM24.1992 1.01087L24.1814 1.00839C24.1875 1.00917 24.1932 1.00997 24.1992 1.01087ZM24.3249 1.03782L24.3093 1.03354C24.3147 1.03497 24.3195 1.0363 24.3249 1.03782ZM23.7761 1.03859L23.83 1.02479C23.812 1.02887 23.794 1.03347 23.7761 1.03859ZM23.663 1.07846L23.7045 1.062C23.6907 1.06712 23.6768 1.07263 23.663 1.07846ZM24.4409 1.07852C24.4385 1.07751 24.4359 1.07645 24.4409 1.07852V1.07852ZM24.5582 1.13743L24.6645 1.20963C24.6201 1.17511 24.5735 1.14484 24.5252 1.11884L24.5582 1.13743ZM23.546 1.13718L23.5781 1.11906C23.5676 1.12474 23.5567 1.13085 23.546 1.13718ZM3.18336 1.53939L3.20197 1.50636L3.27418 1.4C3.23965 1.44441 3.20936 1.49106 3.18336 1.53939ZM3.128 1.66137L3.14301 1.62365C3.1377 1.63624 3.13272 1.64877 3.128 1.66137ZM3.08973 1.78895L3.10237 1.73965C3.09783 1.75564 3.09355 1.77226 3.08973 1.78895ZM3.07008 1.90713L3.07539 1.86527C3.07335 1.87899 3.07156 1.89305 3.07008 1.90713ZM4.07722 22.0003L14.0645 12.0128L24.0518 22.0003L24.0649 21.9873L14.0773 12L24.0649 2.01269L24.0518 1.99965L14.0645 11.9872L4.07722 1.99965L4.06416 2.01269L14.0518 12L4.06416 21.9873L4.07722 22.0003ZM3.06465 2.02867L3.06458 1.99968C3.06446 2.00929 3.06449 2.01898 3.06465 2.02867ZM3.07557 2.16141L3.07002 2.1176C3.07154 2.13213 3.07338 2.14679 3.07557 2.16141ZM3.1031 2.28841L3.0893 2.23452C3.09338 2.25253 3.09798 2.27052 3.1031 2.28841ZM3.14295 2.40157L3.12654 2.35996C3.13165 2.37381 3.13712 2.38774 3.14295 2.40157ZM3.20167 2.51858L3.1836 2.48638C3.18928 2.49694 3.19534 2.50781 3.20167 2.51858ZM24.9454 21.5136L24.9304 21.4866C24.9356 21.4957 24.9405 21.5044 24.9454 21.5136ZM25.0025 21.64L24.9891 21.6056C24.9938 21.6171 24.9982 21.6284 25.0025 21.64ZM25.0397 21.7655L25.031 21.7299C25.0341 21.7417 25.037 21.7536 25.0397 21.7655ZM25.0595 21.8864L25.0562 21.8577C25.0574 21.8673 25.0585 21.8768 25.0595 21.8864ZM25.0641 22.0163L25.0645 21.9873C25.0645 21.997 25.0644 22.0066 25.0641 22.0163ZM25.0537 22.1347L25.0562 22.1169C25.0554 22.1229 25.0546 22.1287 25.0537 22.1347ZM25.0267 22.2604L25.031 22.2447C25.0295 22.2501 25.0282 22.255 25.0267 22.2604ZM24.986 22.3763C24.9881 22.3714 24.987 22.374 24.986 22.3763V22.3763ZM24.9271 22.4936L24.8549 22.6C24.8894 22.5556 24.9197 22.5089 24.9457 22.4606L24.9271 22.4936ZM23.5786 22.8812L23.5455 22.8626L23.4392 22.7904C23.4836 22.8249 23.5302 22.8552 23.5786 22.8812ZM4.55091 22.8809L4.57795 22.8658C4.56887 22.8711 4.56012 22.876 4.55091 22.8809ZM24.5255 22.8809L24.5526 22.8658C24.5435 22.8711 24.5347 22.876 24.5255 22.8809ZM3.60389 22.8812L3.57087 22.8626L3.46455 22.7904C3.50895 22.8249 3.55555 22.8552 3.60389 22.8812ZM24.4031 22.9365L24.4335 22.9245C24.4235 22.9287 24.4133 22.9327 24.4031 22.9365ZM23.7047 22.9381L23.6628 22.9215C23.6768 22.9274 23.6907 22.9329 23.7047 22.9381ZM4.42451 22.938L4.45893 22.9245C4.44746 22.9293 4.43611 22.9337 4.42451 22.938ZM3.7259 22.9365L3.68818 22.9215C3.70077 22.9268 3.7133 22.9318 3.7259 22.9365ZM24.2753 22.9748L24.3093 22.9665C24.2981 22.9694 24.2865 22.9723 24.2753 22.9748ZM23.8301 22.9752L23.7759 22.9614C23.794 22.9665 23.812 22.9711 23.8301 22.9752ZM4.29902 22.9752L4.3346 22.9665C4.32276 22.9696 4.31095 22.9725 4.29902 22.9752ZM3.85346 22.9748L3.80415 22.9622C3.82014 22.9667 3.83677 22.971 3.85346 22.9748ZM24.1531 22.9949L24.1814 22.9916C24.1721 22.9928 24.1625 22.9939 24.1531 22.9949ZM23.9511 22.9949L23.9032 22.9889C23.9191 22.9913 23.935 22.9933 23.9511 22.9949ZM4.17811 22.9949L4.20679 22.9916C4.1972 22.9929 4.18773 22.994 4.17811 22.9949ZM3.97565 22.9949L3.92982 22.9891C3.94487 22.9914 3.96023 22.9933 3.97565 22.9949ZM4.10621 22.9996L4.04804 22.9996C4.06743 23.0001 4.08682 23.0001 4.10621 22.9996ZM24.081 22.9996L24.0228 22.9996C24.0422 23.0001 24.0616 23.0001 24.081 22.9996Z"
                    fill="black"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1427_2634">
                  <rect
                    width="27.871"
                    height="24"
                    fill="white"
                    transform="translate(0.0645142)"
                  />
                </clipPath>
                <clipPath id="clip1_1427_2634">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(26.0645 24) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </svg>
            ) : (
              <svg
              className={`${
                showFilterMobile
                  ? "translate-y-10 opacity-0 invisible"
                  : "translate-y-0 opacity-100 visible"
              } transition-all duration-300 ease-in-out cursor-pointer`}
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.45167 19.9839C8.45167 19.4494 8.01839 19.0161 7.48393 19.0161H1.03232C0.497853 19.0161 0.0645752 19.4494 0.0645752 19.9839C0.0645752 20.5183 0.497853 20.9516 1.03232 20.9516H7.48393C8.01839 20.9516 8.45167 20.5183 8.45167 19.9839Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.4194 5.79001C19.4194 5.25554 19.8527 4.82227 20.3872 4.82227H26.8388C27.3732 4.82227 27.8065 5.25554 27.8065 5.79001C27.8065 6.32447 27.3732 6.75775 26.8388 6.75775H20.3872C19.8527 6.75775 19.4194 6.32447 19.4194 5.79001Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.8066 19.9839C27.8066 19.4494 27.3733 19.0161 26.8388 19.0161H15.2259C14.6915 19.0161 14.2582 19.4494 14.2582 19.9839C14.2582 20.5183 14.6915 20.9516 15.2259 20.9516H26.8388C27.3733 20.9516 27.8066 20.5183 27.8066 19.9839Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0645752 5.79001C0.0645752 5.25554 0.497853 4.82227 1.03232 4.82227H12.6452C13.1797 4.82227 13.613 5.25554 13.613 5.79001C13.613 6.32447 13.1797 6.75775 12.6452 6.75775H1.03232C0.497853 6.75775 0.0645752 6.32447 0.0645752 5.79001Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3549 16.9511C12.9583 16.9511 14.2582 18.251 14.2582 19.8543C14.2582 21.4577 12.9583 22.7576 11.3549 22.7576C9.75154 22.7576 8.45172 21.4577 8.45172 19.8543C8.45172 18.251 9.75154 16.9511 11.3549 16.9511ZM16.1937 19.8543C16.1937 17.1819 14.0273 15.0156 11.3549 15.0156C8.6826 15.0156 6.51624 17.1819 6.51624 19.8543C6.51624 22.5267 8.6826 24.693 11.3549 24.693C14.0273 24.693 16.1937 22.5267 16.1937 19.8543Z"
                fill="#008080"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5162 2.75775C14.9128 2.75775 13.613 4.05757 13.613 5.66097C13.613 7.26438 14.9128 8.5642 16.5162 8.5642C18.1196 8.5642 19.4194 7.26438 19.4194 5.66097C19.4194 4.05757 18.1196 2.75775 16.5162 2.75775ZM11.6775 5.66097C11.6775 2.98863 13.8438 0.822266 16.5162 0.822266C19.1886 0.822266 21.3549 2.98863 21.3549 5.66097C21.3549 8.33332 19.1886 10.4997 16.5162 10.4997C13.8438 10.4997 11.6775 8.33332 11.6775 5.66097Z"
                fill="#008080"
              />
            </svg>
            )}
            
            
            <h1 className="font-kohob text-[24px] cursor-pointer">FILTER</h1>
          </div>
          <div className={`${showFilterMobile ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-700 ease-in-out filter-content grid grid-cols-2`}>
            <div className="filter-left">
            <div className="sort mt-4">
          <div className="title flex items-center justify-start gap-4">
            <h1 className="font-kohob">SORT BY</h1>
            <svg
              className={`${
                showSort ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => {
                setShowSort(true);
                setShowPrice(false);
                setShowSize(false);
                setShowGender(false);
              }}
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25874 0.827334L1.25872 0.827353C0.580427 1.57502 0.580424 2.77818 1.25872 3.52583L1.25881 3.52592L8.67355 11.6906C8.67355 11.6906 8.67356 11.6906 8.67356 11.6906C9.95664 13.1036 12.0469 13.103 13.3294 11.6895L13.3294 11.6895L20.7413 3.51982C21.4196 2.77217 21.4196 1.569 20.7413 0.821322C20.0502 0.0595593 18.9187 0.0595596 18.2276 0.821322L11.8838 7.81364L11.8838 7.81367C11.3912 8.35679 10.6034 8.35679 10.1108 7.81367L10.1108 7.81364L3.7724 0.827358C3.7724 0.827355 3.77239 0.827352 3.77239 0.827349C3.08132 0.0655723 1.94993 0.0656112 1.25874 0.827334Z"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            <svg
              className={`${
                !showSort ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => setShowSort(false)}
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5561 12.0047C20.148 11.3523 20.148 10.2945 19.5561 9.64215L12.1414 1.47746C10.9575 0.17376 9.03909 0.174262 7.85571 1.47847L0.443903 9.64816C-0.147968 10.3005 -0.147968 11.3583 0.443903 12.0107C1.03579 12.6631 1.9954 12.6631 2.58729 12.0107L8.93103 5.01838C9.52287 4.36586 10.4825 4.36586 11.0744 5.01838L17.4128 12.0047C18.0046 12.6571 18.9641 12.6571 19.5561 12.0047Z"
                fill="#008080"
              />
            </svg>
          </div>
          <p className="font-kohol text-[14px] text-secondary1">{sortValue}</p>
          <div
            className={`${
              showSort
                ? "h-[80px] visible opacity-100"
                : "h-0 invisible opacity-0"
            } transition-all duration-700 ease-in-out list mt-4 bg-primary1  `}
          >
            <ul className="font-kohol ">
              {["Newest", "price: high-low", "price: low-high"].map(
                (item, index) => (
                  <li
                    onClick={(event) => {
                      setSortIndex(index);
                      setSortValue(event.target.innerText);
                    }}
                    className={`${
                      sortIndex === index ? "font-kohob text-secondary1" : ""
                    } cursor-pointer hover:font-kohob`}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="gender mt-2">
          <div className="title flex items-center justify-start gap-4">
            <h1 className="font-kohob">GENDER</h1>
            <svg
              className={`${
                showGender ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => {
                setShowGender(true);
                setShowPrice(false);
                setShowSize(false);
                setShowSort(false);
              }}
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25874 0.827334L1.25872 0.827353C0.580427 1.57502 0.580424 2.77818 1.25872 3.52583L1.25881 3.52592L8.67355 11.6906C8.67355 11.6906 8.67356 11.6906 8.67356 11.6906C9.95664 13.1036 12.0469 13.103 13.3294 11.6895L13.3294 11.6895L20.7413 3.51982C21.4196 2.77217 21.4196 1.569 20.7413 0.821322C20.0502 0.0595593 18.9187 0.0595596 18.2276 0.821322L11.8838 7.81364L11.8838 7.81367C11.3912 8.35679 10.6034 8.35679 10.1108 7.81367L10.1108 7.81364L3.7724 0.827358C3.7724 0.827355 3.77239 0.827352 3.77239 0.827349C3.08132 0.0655723 1.94993 0.0656112 1.25874 0.827334Z"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            <svg
              className={`${
                !showGender ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => setShowGender(false)}
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5561 12.0047C20.148 11.3523 20.148 10.2945 19.5561 9.64215L12.1414 1.47746C10.9575 0.17376 9.03909 0.174262 7.85571 1.47847L0.443903 9.64816C-0.147968 10.3005 -0.147968 11.3583 0.443903 12.0107C1.03579 12.6631 1.9954 12.6631 2.58729 12.0107L8.93103 5.01838C9.52287 4.36586 10.4825 4.36586 11.0744 5.01838L17.4128 12.0047C18.0046 12.6571 18.9641 12.6571 19.5561 12.0047Z"
                fill="#008080"
              />
            </svg>
          </div>
          <p className="font-kohol text-[14px] text-secondary1">
            {genderValue}
          </p>
          <div
            className={`${
              showGender
                ? "h-[80px] visible opacity-100"
                : "h-0 invisible opacity-0"
            } transition-all duration-700 ease-in-out list mt-4 bg-primary1  `}
          >
            <ul className="font-kohol ">
              {["ALL", "MEN", "WOMEN"].map((item, index) => (
                <li
                  onClick={(event) => {
                    setGenderIndex(index);
                    setGenderValue(event.target.innerText);
                  }}
                  key={index}
                  className={`${
                    genderIndex === index ? "font-kohob text-secondary1" : ""
                  } hover:font-kohob cursor-pointer`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="category mt-2">
          <ul className="font-kohol w-[55px]">
            {["ALL", "lifestyle", "running", "football"].map((item, index) => (
              <li
                onClick={(event) => {
                  setCategoryIndex(index);
                  setCategoryValue(event.target.innerText);
                }}
                className={`${
                  categoryIndex === index ? "font-kohob text-secondary1" : ""
                } cursor-pointer	 hover:font-kohob`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
            </div>
            <div className="filter-right">
            <div className="price mt-4">
          <div className="title flex items-center justify-start gap-4">
            <h1 className="font-kohob">Price Range</h1>
            <svg
              className={`${
                showPrice ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => {
                setShowPrice(true);
                setShowGender(false);
                setShowSize(false);
                setShowSort(false);
              }}
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25874 0.827334L1.25872 0.827353C0.580427 1.57502 0.580424 2.77818 1.25872 3.52583L1.25881 3.52592L8.67355 11.6906C8.67355 11.6906 8.67356 11.6906 8.67356 11.6906C9.95664 13.1036 12.0469 13.103 13.3294 11.6895L13.3294 11.6895L20.7413 3.51982C21.4196 2.77217 21.4196 1.569 20.7413 0.821322C20.0502 0.0595593 18.9187 0.0595596 18.2276 0.821322L11.8838 7.81364L11.8838 7.81367C11.3912 8.35679 10.6034 8.35679 10.1108 7.81367L10.1108 7.81364L3.7724 0.827358C3.7724 0.827355 3.77239 0.827352 3.77239 0.827349C3.08132 0.0655723 1.94993 0.0656112 1.25874 0.827334Z"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            <svg
              className={`${
                !showPrice ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => setShowPrice(false)}
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5561 12.0047C20.148 11.3523 20.148 10.2945 19.5561 9.64215L12.1414 1.47746C10.9575 0.17376 9.03909 0.174262 7.85571 1.47847L0.443903 9.64816C-0.147968 10.3005 -0.147968 11.3583 0.443903 12.0107C1.03579 12.6631 1.9954 12.6631 2.58729 12.0107L8.93103 5.01838C9.52287 4.36586 10.4825 4.36586 11.0744 5.01838L17.4128 12.0047C18.0046 12.6571 18.9641 12.6571 19.5561 12.0047Z"
                fill="#008080"
              />
            </svg>
          </div>
          <p className="font-kohol text-[14px] text-secondary1">{`${priceMin}-${priceMax}`}</p>
          <div
            className={`${
              showPrice
                ? "h-[165px] visible opacity-100"
                : "h-0 invisible opacity-0"
            } transition-all duration-700 ease-in-out price-range mt-4 bg-primary1  `}
          >
            <div className="price-min mt-4">
              <p className="font-kohob text-[14px] text-secondary1">min</p>
              <input
                onChange={(event) => setPriceMin(event.target.value)}
                className="bg-secondary1"
                type="range"
                min={0}
                max={2000}
                value={priceMin}
              />
            </div>
            <div className="price-max">
              <p className="font-kohob text-[14px] text-secondary1">max</p>
              <input
                onChange={(event) => setPriceMax(event.target.value)}
                className="bg-secondary1"
                type="range"
                min={0}
                max={2000}
                value={priceMax}
              />
            </div>
            <div className="show-price flex items-center justify-between gap-4">
              <span className="w-[70px] h-[40px] flex items-center justify-center rounded-full bg-secondary1/10 font-kohob text-[14px]">
                0
              </span>
              <span className="w-[70px] h-[40px] flex items-center justify-center rounded-full bg-secondary1/10 font-kohob text-[14px]">
                2000
              </span>
            </div>
            <h1 className="text-center font-kohob text-secondary1 mt-2">{`${priceMin}-${priceMax}`}</h1>
          </div>
        </div>
        <div className="size mt-2">
          <div className="title flex items-center justify-start gap-4">
            <h1 className="font-kohob">Size</h1>
            <svg
              className={`${
                showSize ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => {
                setShowSize(true);
                setShowGender(false);
                setShowPrice(false);
                setShowSort(false);
              }}
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25874 0.827334L1.25872 0.827353C0.580427 1.57502 0.580424 2.77818 1.25872 3.52583L1.25881 3.52592L8.67355 11.6906C8.67355 11.6906 8.67356 11.6906 8.67356 11.6906C9.95664 13.1036 12.0469 13.103 13.3294 11.6895L13.3294 11.6895L20.7413 3.51982C21.4196 2.77217 21.4196 1.569 20.7413 0.821322C20.0502 0.0595593 18.9187 0.0595596 18.2276 0.821322L11.8838 7.81364L11.8838 7.81367C11.3912 8.35679 10.6034 8.35679 10.1108 7.81367L10.1108 7.81364L3.7724 0.827358C3.7724 0.827355 3.77239 0.827352 3.77239 0.827349C3.08132 0.0655723 1.94993 0.0656112 1.25874 0.827334Z"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
            <svg
              className={`${
                !showSize ? "hidden" : ""
              } transition-all duration-700 ease-in-out cursor-pointer	`}
              onClick={() => setShowSize(false)}
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5561 12.0047C20.148 11.3523 20.148 10.2945 19.5561 9.64215L12.1414 1.47746C10.9575 0.17376 9.03909 0.174262 7.85571 1.47847L0.443903 9.64816C-0.147968 10.3005 -0.147968 11.3583 0.443903 12.0107C1.03579 12.6631 1.9954 12.6631 2.58729 12.0107L8.93103 5.01838C9.52287 4.36586 10.4825 4.36586 11.0744 5.01838L17.4128 12.0047C18.0046 12.6571 18.9641 12.6571 19.5561 12.0047Z"
                fill="#008080"
              />
            </svg>
          </div>
          <p className="font-kohol text-[14px] text-secondary1">{sizeValue}</p>
          <div
            className={`${
              showSize
                ? "h-[150px] opacity-100 visible"
                : "h-0 opacity-0 invisible"
            } transition-all duration-700 ease-in-out size-number mt-4 `}
          >
            <ul className="font-kohol grid grid-cols-3 ">
              {[
                "ALL",
                "35",
                "36",
                "37.5",
                "38",
                "39",
                "40",
                "40.5",
                "41",
                "42",
                "43",
                "44.5",
                "45.5",
                "47",
                "48",
                "50",
                "51",
                "51.5",
              ].map((item, index) => (
                <li
                  onClick={(event) => {
                    setSizeIndex(index);
                    setSizeValue(event.target.innerText);
                  }}
                  className={`${
                    sizeIndex === index ? "font-kohob text-secondary1" : ""
                  } cursor-pointer	`}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
