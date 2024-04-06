"use client";
import React, { useEffect, useState } from "react";
import ReviewBox from "../ReviewBox/ReviewBox";

export default function Gallery() {
  const [sizeIndex, setSizeIndex] = useState(null);
  const [indexImage, setIndexImage] = useState(0);
  const [indexImageColor, setIndexImageColor] = useState(0);
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const [showWrite , setShowWrite]= useState(false)
  const [showRewiew , setShowRewiew]= useState(false)
  const [showMore , setShowMore]= useState(false)
  const [star , setStar] =useState(0)



  const image1 = [
    {
      img: "/images/gallery/1.png",
      images: [
        "/images/gallery/big1.png",
        "/images/gallery/1.png",
        "/images/gallery/2.jpg",
      ],
    },
    {
      img: "/images/gallery/3.png",
      images: [
        "/images/gallery/big2.png",
        "/images/gallery/3.png",
        "/images/gallery/4.png",
      ],
    },
  ];

  useEffect(() => {
    setImages(image1[0].images);
    setImageUrl(image1[0].images[0]);
  }, []);

  return (
    <div className="gallery mt-28 flex flex-col xl:flex-row  gap-4 ">
      <div className="left-gallery xl:sticky xl:top-24 h-[500px] w-[100%] flex flex-col-reverse xl:flex-row items-center xl:items-start xl:gap-0 justify-between xl:justify-start gap-2 ">
        <div className="images flex xl:flex-col   gap-4">
          {images.map((item, index) => (
            <div
              className={`${
                indexImage === index
                  ? "shadow-[0_5px_15px_1px_rgba(0,0,0,0.15)]"
                  : ""
              } w-[80px] h-[100px] flex items-center rounded-[20px] `}
            >
              <img
                onMouseEnter={(event) => {
                  setImageUrl(event.target.currentSrc);
                  console.log(imageUrl);
                  setIndexImage(index);
                }}
                // onMouseLeave={}
                className="rounded-[20px]"
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="big-image h-[350px] w-[350px] md:h-[450px] md:w-[450px] xl:w-[540px] xl:h-[540px] flex items-center overflow-hidden  rounded-[40px]">
          <img className=" rounded-[40px] h-[350px] w-[350px] md:w-[450px] md:h-[450px] xl:w-[540px] xl:h-[540px] object-cover " src={imageUrl} alt="" />
        </div>
      </div>
      <div className="right-gallery w-[100%] ">
        <h1 className="font-kohob text-[24px]">Nike Air Max Plus Drift</h1>
        <p className="font-kohol text-secondary1">Men's Shoes</p>
        <h1 className="font-kohob text-[24px] mt-1">€ 198</h1>
        <p className="font-quikr">
          Let your attitude have the edge in the Air Max Plus Drift, a "tuned"
          Air experience that offers premium stability and cushioning. Featuring
          airy mesh, gradient colouring and the original wavy design lines, it
          celebrates your defiant style.
        </p>
        <div className="details flex flex-col xl:flex-row gap-4 items-center justify-between mt-[20px]">
          <div className="images flex xl:flex-col gap-2">
            {image1.map((item, index) => (
              <div
                onClick={(event) => {
                  setImages(item.images);
                  setIndexImageColor(index);
                  setImageUrl(item.images[0]);
                  setIndexImage(0);
                }}
                className={`${
                  indexImageColor === index
                    ? "shadow-[0_5px_15px_1px_rgba(0,0,0,0.15)]"
                    : ""
                } w-[80px] h-100px rounded-[20px] `}
              >
                <img className="rounded-[20px]" src={item.img} alt="" />
              </div>
            ))}
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
                <path d="M11.5 20C9.13 18.17 0.5 11.12 0.5 5.31C0.5 2.38 2.97 0 6 0C7.9 0 9.64 0.93 10.65 2.48L11.5 3.78L12.35 2.48C13.36 0.93 15.1 0 17 0C20.03 0 22.5 2.38 22.5 5.31C22.5 11.15 13.88 18.18 11.5 20Z" />
              </svg>
            </button>
            <button className="w-[300px] h-[40px] rounded-full font-kohob border-solid border-[1px] border-primary text-primary1 bg-primary hover:bg-secondary1 hover:border-secondary1 transition-all duration-700 ease-in-out">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="reviews bg-secondary1/10 min-h-[135px] rounded-[24px] p-4 mt-2">
          <div className="top flex items-center justify-between">
            <h1 className="font-kohob text-[24px]">Reviews</h1>
            <span className="flex items-center justify-center gap-2 font-kohob text-[24px]">
              5
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15317 3.90838C9.41981 1.63613 10.0531 0.5 11 0.5C11.9469 0.5 12.5802 1.63612 13.8468 3.90837L14.1745 4.49624C14.5345 5.14194 14.7144 5.4648 14.9951 5.67782C15.2757 5.89084 15.6251 5.96991 16.3241 6.12806L16.9605 6.27204C19.4201 6.82857 20.65 7.10683 20.9426 8.04774C21.2352 8.98861 20.3968 9.96911 18.7199 11.9299L18.2861 12.4372C17.8096 12.9944 17.5713 13.273 17.4641 13.6177C17.357 13.9624 17.393 14.3341 17.465 15.0776L17.5306 15.7544C17.7841 18.3706 17.9109 19.6787 17.1449 20.2602C16.3788 20.8417 15.2273 20.3115 12.9243 19.2512L12.3285 18.9768C11.6741 18.6755 11.3469 18.5248 11 18.5248C10.6531 18.5248 10.3259 18.6755 9.67151 18.9768L9.07571 19.2512C6.77269 20.3115 5.62119 20.8417 4.85516 20.2602C4.08913 19.6787 4.21589 18.3706 4.46941 15.7544L4.53499 15.0776C4.60704 14.3341 4.64306 13.9624 4.53587 13.6177C4.42869 13.273 4.19044 12.9944 3.71393 12.4372L3.28011 11.9299C1.60325 9.96911 0.764822 8.98861 1.05742 8.04774C1.35002 7.10683 2.57986 6.82857 5.03955 6.27204L5.6759 6.12806C6.37486 5.96991 6.72434 5.89084 7.00495 5.67782C7.28556 5.4648 7.46554 5.14195 7.82548 4.49624L8.15317 3.90838Z"
                  stroke="black"
                />
              </svg>
            </span>
          </div>
            <div className={`${showWrite ? 'h-[230px]' : 'h-[40px]'} transition-all duration-700 ease-in-out overflow-hidden write bg-primary1 rounded-lg  p-2  `}>
              <div className="content flex flex-col items-center justify-center">
              <h1 onClick={()=>setShowWrite(!showWrite)} className="text-center font-kohol cursor-pointer w-[100%]">Write a Review</h1>
              <textarea className="w-[90%]  h-[80px] bg-secondary1/10 mt-2 outline-none rounded-[20px] p-2 font-kohol " placeholder="TEXT"></textarea>
              <div className="rate flex items-center justify-between w-[90%] mt-4 ">
                <h1 className="font-kohol">Rate on a scale of <span className="font-kohob">1</span> to <span className="font-kohob">5</span> stars :</h1>
                <div className="star flex items-center gap-2">
                <svg
                onClick={()=> setStar(1)}
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                // fill="#ffd700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15317 3.90838C9.41981 1.63613 10.0531 0.5 11 0.5C11.9469 0.5 12.5802 1.63612 13.8468 3.90837L14.1745 4.49624C14.5345 5.14194 14.7144 5.4648 14.9951 5.67782C15.2757 5.89084 15.6251 5.96991 16.3241 6.12806L16.9605 6.27204C19.4201 6.82857 20.65 7.10683 20.9426 8.04774C21.2352 8.98861 20.3968 9.96911 18.7199 11.9299L18.2861 12.4372C17.8096 12.9944 17.5713 13.273 17.4641 13.6177C17.357 13.9624 17.393 14.3341 17.465 15.0776L17.5306 15.7544C17.7841 18.3706 17.9109 19.6787 17.1449 20.2602C16.3788 20.8417 15.2273 20.3115 12.9243 19.2512L12.3285 18.9768C11.6741 18.6755 11.3469 18.5248 11 18.5248C10.6531 18.5248 10.3259 18.6755 9.67151 18.9768L9.07571 19.2512C6.77269 20.3115 5.62119 20.8417 4.85516 20.2602C4.08913 19.6787 4.21589 18.3706 4.46941 15.7544L4.53499 15.0776C4.60704 14.3341 4.64306 13.9624 4.53587 13.6177C4.42869 13.273 4.19044 12.9944 3.71393 12.4372L3.28011 11.9299C1.60325 9.96911 0.764822 8.98861 1.05742 8.04774C1.35002 7.10683 2.57986 6.82857 5.03955 6.27204L5.6759 6.12806C6.37486 5.96991 6.72434 5.89084 7.00495 5.67782C7.28556 5.4648 7.46554 5.14195 7.82548 4.49624L8.15317 3.90838Z"
                  stroke="black"
                 
                />
              </svg>
                <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15317 3.90838C9.41981 1.63613 10.0531 0.5 11 0.5C11.9469 0.5 12.5802 1.63612 13.8468 3.90837L14.1745 4.49624C14.5345 5.14194 14.7144 5.4648 14.9951 5.67782C15.2757 5.89084 15.6251 5.96991 16.3241 6.12806L16.9605 6.27204C19.4201 6.82857 20.65 7.10683 20.9426 8.04774C21.2352 8.98861 20.3968 9.96911 18.7199 11.9299L18.2861 12.4372C17.8096 12.9944 17.5713 13.273 17.4641 13.6177C17.357 13.9624 17.393 14.3341 17.465 15.0776L17.5306 15.7544C17.7841 18.3706 17.9109 19.6787 17.1449 20.2602C16.3788 20.8417 15.2273 20.3115 12.9243 19.2512L12.3285 18.9768C11.6741 18.6755 11.3469 18.5248 11 18.5248C10.6531 18.5248 10.3259 18.6755 9.67151 18.9768L9.07571 19.2512C6.77269 20.3115 5.62119 20.8417 4.85516 20.2602C4.08913 19.6787 4.21589 18.3706 4.46941 15.7544L4.53499 15.0776C4.60704 14.3341 4.64306 13.9624 4.53587 13.6177C4.42869 13.273 4.19044 12.9944 3.71393 12.4372L3.28011 11.9299C1.60325 9.96911 0.764822 8.98861 1.05742 8.04774C1.35002 7.10683 2.57986 6.82857 5.03955 6.27204L5.6759 6.12806C6.37486 5.96991 6.72434 5.89084 7.00495 5.67782C7.28556 5.4648 7.46554 5.14195 7.82548 4.49624L8.15317 3.90838Z"
                  stroke="black"
                />
              </svg>
                <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15317 3.90838C9.41981 1.63613 10.0531 0.5 11 0.5C11.9469 0.5 12.5802 1.63612 13.8468 3.90837L14.1745 4.49624C14.5345 5.14194 14.7144 5.4648 14.9951 5.67782C15.2757 5.89084 15.6251 5.96991 16.3241 6.12806L16.9605 6.27204C19.4201 6.82857 20.65 7.10683 20.9426 8.04774C21.2352 8.98861 20.3968 9.96911 18.7199 11.9299L18.2861 12.4372C17.8096 12.9944 17.5713 13.273 17.4641 13.6177C17.357 13.9624 17.393 14.3341 17.465 15.0776L17.5306 15.7544C17.7841 18.3706 17.9109 19.6787 17.1449 20.2602C16.3788 20.8417 15.2273 20.3115 12.9243 19.2512L12.3285 18.9768C11.6741 18.6755 11.3469 18.5248 11 18.5248C10.6531 18.5248 10.3259 18.6755 9.67151 18.9768L9.07571 19.2512C6.77269 20.3115 5.62119 20.8417 4.85516 20.2602C4.08913 19.6787 4.21589 18.3706 4.46941 15.7544L4.53499 15.0776C4.60704 14.3341 4.64306 13.9624 4.53587 13.6177C4.42869 13.273 4.19044 12.9944 3.71393 12.4372L3.28011 11.9299C1.60325 9.96911 0.764822 8.98861 1.05742 8.04774C1.35002 7.10683 2.57986 6.82857 5.03955 6.27204L5.6759 6.12806C6.37486 5.96991 6.72434 5.89084 7.00495 5.67782C7.28556 5.4648 7.46554 5.14195 7.82548 4.49624L8.15317 3.90838Z"
                  stroke="black"
                />
              </svg>
                <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15317 3.90838C9.41981 1.63613 10.0531 0.5 11 0.5C11.9469 0.5 12.5802 1.63612 13.8468 3.90837L14.1745 4.49624C14.5345 5.14194 14.7144 5.4648 14.9951 5.67782C15.2757 5.89084 15.6251 5.96991 16.3241 6.12806L16.9605 6.27204C19.4201 6.82857 20.65 7.10683 20.9426 8.04774C21.2352 8.98861 20.3968 9.96911 18.7199 11.9299L18.2861 12.4372C17.8096 12.9944 17.5713 13.273 17.4641 13.6177C17.357 13.9624 17.393 14.3341 17.465 15.0776L17.5306 15.7544C17.7841 18.3706 17.9109 19.6787 17.1449 20.2602C16.3788 20.8417 15.2273 20.3115 12.9243 19.2512L12.3285 18.9768C11.6741 18.6755 11.3469 18.5248 11 18.5248C10.6531 18.5248 10.3259 18.6755 9.67151 18.9768L9.07571 19.2512C6.77269 20.3115 5.62119 20.8417 4.85516 20.2602C4.08913 19.6787 4.21589 18.3706 4.46941 15.7544L4.53499 15.0776C4.60704 14.3341 4.64306 13.9624 4.53587 13.6177C4.42869 13.273 4.19044 12.9944 3.71393 12.4372L3.28011 11.9299C1.60325 9.96911 0.764822 8.98861 1.05742 8.04774C1.35002 7.10683 2.57986 6.82857 5.03955 6.27204L5.6759 6.12806C6.37486 5.96991 6.72434 5.89084 7.00495 5.67782C7.28556 5.4648 7.46554 5.14195 7.82548 4.49624L8.15317 3.90838Z"
                  stroke="black"
                />
              </svg>
                <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15317 3.90838C9.41981 1.63613 10.0531 0.5 11 0.5C11.9469 0.5 12.5802 1.63612 13.8468 3.90837L14.1745 4.49624C14.5345 5.14194 14.7144 5.4648 14.9951 5.67782C15.2757 5.89084 15.6251 5.96991 16.3241 6.12806L16.9605 6.27204C19.4201 6.82857 20.65 7.10683 20.9426 8.04774C21.2352 8.98861 20.3968 9.96911 18.7199 11.9299L18.2861 12.4372C17.8096 12.9944 17.5713 13.273 17.4641 13.6177C17.357 13.9624 17.393 14.3341 17.465 15.0776L17.5306 15.7544C17.7841 18.3706 17.9109 19.6787 17.1449 20.2602C16.3788 20.8417 15.2273 20.3115 12.9243 19.2512L12.3285 18.9768C11.6741 18.6755 11.3469 18.5248 11 18.5248C10.6531 18.5248 10.3259 18.6755 9.67151 18.9768L9.07571 19.2512C6.77269 20.3115 5.62119 20.8417 4.85516 20.2602C4.08913 19.6787 4.21589 18.3706 4.46941 15.7544L4.53499 15.0776C4.60704 14.3341 4.64306 13.9624 4.53587 13.6177C4.42869 13.273 4.19044 12.9944 3.71393 12.4372L3.28011 11.9299C1.60325 9.96911 0.764822 8.98861 1.05742 8.04774C1.35002 7.10683 2.57986 6.82857 5.03955 6.27204L5.6759 6.12806C6.37486 5.96991 6.72434 5.89084 7.00495 5.67782C7.28556 5.4648 7.46554 5.14195 7.82548 4.49624L8.15317 3.90838Z"
                  stroke="black"
                />
              </svg>
                </div>
              </div>
              <button className="font-kohob text-primary1 bg-primary w-[90%] h-[40px] rounded-full mt-4 ">Send Your Review</button>
              </div>
            </div>
            <div className={`${showRewiew ? 'h-[530px] overflow-y-auto' : 'h-[40px] overflow-hidden'}  transition-all duration-700 ease-in-out  review  rounded-lg   mt-2 `}>
              <div className="content flex flex-col items-center justify-center">
              <h1 onClick={()=>setShowRewiew(!showRewiew)} className="text-center font-kohol cursor-pointer bg-primary1 h-[40px] w-[100%] pt-2 mb-4">{`${showRewiew ? 'close Reviews (10)' : 'see Reviews (10)'}`}</h1>
              <div className="review-boxes w-[100%] flex flex-col gap-2 ">
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
