"use client";
import React, { useState } from "react";

export default function Sidebar() {
  const [showGender, setShowGender] = useState(false);
  const [showPrice , setShowPrice] = useState(false)
  const [showSize , setShowSize] = useState(false)
  const [showSort , setShowSort] = useState(false)
  const [priceMin , setPriceMin] = useState(0)
  const [priceMax , setPriceMax] = useState(2000)
  const [genderIndex , setGenderIndex]= useState(null)
  const [genderValue , setGenderValue]= useState('ALL')
  const [sortIndex , setSortIndex]= useState(null)
  const [sortValue , setSortValue]= useState('')
  const [categoryIndex , setCategoryIndex]= useState(null)
  const [categoryValue , setCategoryValue]= useState('All')
  const [sizeIndex , setSizeIndex]= useState(null)
  const [sizeValue , setSizeValue]= useState('All')
  return (
    <div className="sidebar w-[150px]">
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
      <div className="sort mt-8">
        <div className="title flex items-center justify-between">
          <h1 className="font-kohob">SORT BY</h1>
          <svg
            className={`${showSort ? 'hidden' : ''} transition-all duration-700 ease-in-out cursor-pointer	`}
            onClick={() => {
              setShowSort(true)
              setShowPrice(false)
              setShowSize(false)
              setShowGender(false)
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
          className={`${!showSort ? 'hidden' : ''} transition-all duration-700 ease-in-out cursor-pointer	`}
          onClick={()=> setShowSort(false)}
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
            {['Newest' , 'price: high-low' , 'price: low-high'].map((item , index) =>(
              <li onClick={(event) =>{
                setSortIndex(index)
                setSortValue(event.target.innerText)
              }} className={`${sortIndex === index ? 'font-kohob text-secondary1' : ''} hover:font-kohob`}>{item}</li>
            ))}
            {/* <li className="hover:font-kohob">Newest</li>
            <li className="hover:font-kohob">price: high-low</li>
            <li className="hover:font-kohob">price: low-high</li> */}
          </ul>
        </div>
      </div>
      <div className="gender mt-2">
        <div className="title flex items-center justify-between">
          <h1 className="font-kohob">GENDER</h1>
          <svg
            className={`${showGender ? 'hidden' : ''} transition-all duration-700 ease-in-out cursor-pointer	`}
            onClick={() => {
              setShowGender(true)
              setShowPrice(false)
              setShowSize(false)
              setShowSort(false)
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
          className={`${!showGender ? 'hidden' : ''} transition-all duration-700 ease-in-out cursor-pointer	`}
          onClick={()=> setShowGender(false)}
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
        <p className="font-kohol text-[14px] text-secondary1">{genderValue}</p>
        <div
          className={`${
            showGender
              ? "h-[80px] visible opacity-100"
              : "h-0 invisible opacity-0"
          } transition-all duration-700 ease-in-out list mt-4 bg-primary1  `}
        >
          <ul className="font-kohol ">
            {['ALL' , 'MEN' , 'WOMEN'].map((item ,index)=>(
              <li onClick={(event)=> {
                setGenderIndex(index)
                setGenderValue(event.target.innerText)
              }} key={index} className={`${genderIndex === index ? 'font-kohob text-secondary1' : ''} hover:font-kohob cursor-pointer`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="category mt-4">
        <ul className="font-kohol w-[55px]">
          {['ALL' , 'lifestyle' , 'running' , 'football'].map((item , index)=>(
            <li onClick={(event)=>{
              setCategoryIndex(index)
              setCategoryValue(event.target.innerText)
            }} className={`${categoryIndex === index ? 'font-kohob text-secondary1' : ''} cursor-pointer	 hover:font-kohob`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="price mt-8">
      <div className="title flex items-center justify-between">
          <h1 className="font-kohob">Price Range</h1>
          <svg
            className={`${showPrice ? 'hidden' : ''} transition-all duration-700 ease-in-out cursor-pointer	`}
            onClick={() => {
              setShowPrice(true)
              setShowGender(false)
              setShowSize(false)
              setShowSort(false)
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
          className={`${!showPrice ? 'hidden' : ''} transition-all duration-700 ease-in-out cursor-pointer	`}
          onClick={()=> setShowPrice(false)}
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
        <div className={`${
            showPrice
              ? "h-[165px] visible opacity-100"
              : "h-0 invisible opacity-0"
          } transition-all duration-700 ease-in-out price-range mt-4 bg-primary1  `}>
          <div className="price-min mt-4">
            <p className="font-kohob text-[14px] text-secondary1">min</p>
            <input onChange={(event) => setPriceMin(event.target.value)} className="bg-secondary1" type="range" min={0} max={2000} value={priceMin} />
          </div>
          <div className="price-max">
            <p className="font-kohob text-[14px] text-secondary1">max</p>
            <input onChange={(event) => setPriceMax(event.target.value)} className="bg-secondary1" type="range" min={0} max={2000}value={priceMax}/>
          </div>
          <div className="show-price flex items-center justify-between gap-4">
            <span className="w-[70px] h-[40px] flex items-center justify-center rounded-full bg-secondary1/10 font-kohob text-[14px]">0</span>
            <span className="w-[70px] h-[40px] flex items-center justify-center rounded-full bg-secondary1/10 font-kohob text-[14px]">2000</span>
          </div>
          <h1 className="text-center font-kohob text-secondary1 mt-2">{`${priceMin}-${priceMax}`}</h1>
        </div>
      </div>
      <div className="size mt-2">
      <div className="title flex items-center justify-between">
          <h1 className="font-kohob">Size</h1>
          <svg
            className={`${showSize ? 'hidden' : ''} transition-all duration-700 ease-in-out cursor-pointer	`}
            onClick={() => {
              setShowSize(true)
              setShowGender(false)
              setShowPrice(false)
              setShowSort(false)
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
          className={`${!showSize ? 'hidden' : ''} transition-all duration-700 ease-in-out cursor-pointer	`}
          onClick={()=> setShowSize(false)}
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
        <div className={`${showSize ? 'h-[150px] opacity-100 visible' : 'h-0 opacity-0 invisible'} transition-all duration-700 ease-in-out size-number mt-4 `}>
          <ul className="font-kohol grid grid-cols-3 ">
            {['ALL' , '35' , '36' , '37.5', '38', '39' , '40' , '40.5' , '41' , '42' , '43' , '44.5' , '45.5' , '47' , '48' , '50' , '51' , '51.5'].map((item , index)=>(
              <li onClick={(event) =>{
                setSizeIndex(index)
                setSizeValue(event.target.innerText)
              }} className={`${sizeIndex === index ? 'font-kohob text-secondary1' : ''} cursor-pointer	`} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
