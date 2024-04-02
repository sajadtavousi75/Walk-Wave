"use client";
import React, { useState } from "react";

export default function Gallery() {
  const [sizeIndex, setSizeIndex] = useState(null);
  const [imageUrl , setImageUrl] = useState('/images/gallery/big1.png')

  return (
    <div className="gallery mt-28 flex gap-4">
      <div className="left-gallery w-[100%] flex items-start gap-2">
        <div className="images flex flex-col gap-4">
          <div className="w-[80px] h-[100px] flex items-center rounded-[20px] shadow-[0_5px_15px_1px_rgba(0,0,0,0.15)]">
            <img
            onMouseEnter={(event) => {
                setImageUrl(event.target.currentSrc)
                console.log(imageUrl)
            }}
              className="rounded-[20px]"
              src="/images/gallery/big1.png"
              alt=""
            />
          </div>
          <div className="w-[80px] h-[100px] flex items-center rounded-[20px]">
            <img
            onMouseEnter={(event) => {
                setImageUrl(event.target.currentSrc)
                console.log(imageUrl)
            }}
              className="rounded-[20px]"
              src="/images/gallery/1.png"
              alt=""
            />
          </div>
          <div className="w-[80px] h-[100px] flex items-center rounded-[20px]">
            <img
            onMouseEnter={(event) => {
                setImageUrl(event.target.currentSrc)
                console.log(imageUrl)
            }}
              className="rounded-[20px]"
              src="/images/gallery/2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="big-image h-[540px] flex items-center overflow-hidden  rounded-[40px]">
          <img
            className=" rounded-[40px]"
            src={imageUrl}
            alt=""
          />
        </div>
      </div>
      <div className="right-gallery w-[100%]">
        <h1 className="font-kohob text-[24px]">Nike Air Max Plus Drift</h1>
        <p className="font-kohol text-secondary1">Men's Shoes</p>
        <h1 className="font-kohob text-[24px] mt-2">€ 198</h1>
        <p className="font-quikr">
          Let your attitude have the edge in the Air Max Plus Drift, a "tuned"
          Air experience that offers premium stability and cushioning. Featuring
          airy mesh, gradient colouring and the original wavy design lines, it
          celebrates your defiant style.
        </p>
        <div className="details flex items-center justify-between mt-[24px]">
          <div className="images flex flex-col gap-2">
            <div className="w-[80px] h-100px rounded-[20px] shadow-[0_5px_15px_1px_rgba(0,0,0,0.15)]">
              <img
                className="rounded-[20px]"
                src="/images/gallery/1.png"
                alt=""
              />
            </div>
            <div className="w-[80px] h-100px rounded-[20px]">
              <img
                className="rounded-[20px]"
                src="/images/gallery/3.png"
                alt=""
              />
            </div>
          </div>
          <div className="size w-[150px]">
            <h1 className="font-kohob">Select Size</h1>
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
          </div>
          <div className="btns flex flex-col items-end gap-4">
            <button className="group w-[300px] h-[40px] rounded-full font-kohob border-solid border-[1px] border-primary flex items-center justify-center gap-4 hover:bg-secondary1 hover:text-primary1 hover:border-secondary1 transition-all duration-700 ease-in-out">
              favourite
              <svg
              className="group-hover:fill-white transition-all duration-700 ease-in-out"
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 20C9.13 18.17 0.5 11.12 0.5 5.31C0.5 2.38 2.97 0 6 0C7.9 0 9.64 0.93 10.65 2.48L11.5 3.78L12.35 2.48C13.36 0.93 15.1 0 17 0C20.03 0 22.5 2.38 22.5 5.31C22.5 11.15 13.88 18.18 11.5 20Z"
                  
                />
              </svg>
            </button>
            <button className="w-[300px] h-[40px] rounded-full font-kohob border-solid border-[1px] border-primary text-primary1 bg-primary hover:bg-secondary1 hover:border-secondary1 transition-all duration-700 ease-in-out">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
