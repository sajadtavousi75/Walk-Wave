"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Cookies from "js-cookie";
import { useAuthContext } from "@/context/authContext";
import { useQuery } from "@tanstack/react-query";
// import { cookies } from "next/headers";

import getUserInfos from "@/services/Auth/getUserInfos";

import AuthMe from "@/services/Auth/getUserInfos";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [resultSearch, setResultSearch] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(true);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileSearchResult, setShowMobileSearchResult] = useState(false);
  const [accessToken , setAccessToken] = useState(false)

  const context= useAuthContext()
  console.log(context)


  useEffect(()=>{
    const token= Cookies.get('access-token')
    if(token){
      setAccessToken(true)
    }
    console.log()
  },[])

  useEffect(()=>{
   getUserInfos()
  },[])

  const getUserInfos=()=>{
    const token= Cookies.get('access-token')
    if(token){

      fetch('http://localhost:4000/api/v1/auth/me',{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      }).then((res)=> res.json())
      .then((data)=>{
        context.setEmail(data.email)
        context.setUserName(data.username)
      })
    }
  }

  const cancelhandel = () => {
    setShowSearch(false);
    setResultSearch(false);
  };

  const showSearchHandel = () => {
    setShowSearch(true);
    setResultSearch(true);
  };

  const handelMobile = () => {
    setShowMobileSearch(false);
    setShowMobileSearchResult(false);
  };

  useEffect(() => {
    if (!showMobileNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileNavbar]);
  useEffect(() => {
    if (showMobileSearchResult) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileSearchResult]);
  return (
    <>
      {/* navbar desktab */}
      <div className="hidden md:flex ">
        <div className=" navbar h-[80px] container   flex items-center justify-between z-10 bg-primary1  overflow-x-hidden">
          <div className="navbar-logo">
            <Link href='/'>
            <svg
              width="130"
              height="33"
              viewBox="0 0 130 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.776 5.8L56.216 17H55.8C55.256 17 54.8347 16.8933 54.536 16.68C54.248 16.456 54.024 16.088 53.864 15.576L52.152 10.2L50.44 15.576C50.28 16.088 50.0507 16.456 49.752 16.68C49.4533 16.8933 49.0373 17 48.504 17H48.088L45.528 5.8H46.632L48.936 15.976C49.0747 15.9333 49.192 15.8587 49.288 15.752C49.384 15.6453 49.464 15.4907 49.528 15.288L52.152 7.368L54.776 15.288C54.8507 15.4907 54.9307 15.6453 55.016 15.752C55.112 15.8587 55.224 15.928 55.352 15.96L57.656 5.8H58.776ZM66.1358 13.4H61.0798L59.9758 17H58.8238L61.7198 7.64C61.9544 6.88267 62.2051 6.36 62.4718 6.072C62.7491 5.77333 63.1278 5.624 63.6078 5.624C64.0878 5.624 64.4664 5.77333 64.7438 6.072C65.0211 6.36 65.2771 6.88267 65.5118 7.64L68.4078 17H67.2398L66.1358 13.4ZM65.8638 12.504L64.3758 7.656C64.2584 7.29333 64.1464 7.04267 64.0398 6.904C63.9331 6.76533 63.7891 6.696 63.6078 6.696C63.4371 6.696 63.2984 6.76533 63.1918 6.904C63.0851 7.04267 62.9731 7.29333 62.8558 7.656L61.3678 12.504H65.8638ZM73.3141 17C72.0875 17 71.1755 16.728 70.5781 16.184C69.9915 15.6293 69.6981 14.7867 69.6981 13.656V5.8H70.8501V13.656C70.8501 14.4773 71.0475 15.0853 71.4421 15.48C71.8475 15.8747 72.4715 16.072 73.3141 16.072H76.9141V17H73.3141ZM83.4208 10.104C84.2208 10.2107 84.8341 10.4773 85.2608 10.904C85.6874 11.3307 86.0501 12.0347 86.3488 13.016L87.4688 17H86.3168L85.2128 13.112C85.0634 12.5893 84.8874 12.184 84.6848 11.896C84.4928 11.5973 84.2314 11.3787 83.9008 11.24C83.5701 11.1013 83.1274 11.0107 82.5728 10.968L80.1408 13.48V17H78.9888V5.8H80.1408V12.088L86.1568 5.8H87.5808L83.4208 10.104ZM101.089 5.8L98.5285 17H98.1125C97.5685 17 97.1472 16.8933 96.8485 16.68C96.5605 16.456 96.3365 16.088 96.1765 15.576L94.4645 10.2L92.7525 15.576C92.5925 16.088 92.3632 16.456 92.0645 16.68C91.7658 16.8933 91.3498 17 90.8165 17H90.4005L87.8405 5.8H88.9445L91.2485 15.976C91.3872 15.9333 91.5045 15.8587 91.6005 15.752C91.6965 15.6453 91.7765 15.4907 91.8405 15.288L94.4645 7.368L97.0885 15.288C97.1632 15.4907 97.2432 15.6453 97.3285 15.752C97.4245 15.8587 97.5365 15.928 97.6645 15.96L99.9685 5.8H101.089ZM108.448 13.4H103.392L102.288 17H101.136L104.032 7.64C104.267 6.88267 104.518 6.36 104.784 6.072C105.062 5.77333 105.44 5.624 105.92 5.624C106.4 5.624 106.779 5.77333 107.056 6.072C107.334 6.36 107.59 6.88267 107.824 7.64L110.72 17H109.552L108.448 13.4ZM108.176 12.504L106.688 7.656C106.571 7.29333 106.459 7.04267 106.352 6.904C106.246 6.76533 106.102 6.696 105.92 6.696C105.75 6.696 105.611 6.76533 105.504 6.904C105.398 7.04267 105.286 7.29333 105.168 7.656L103.68 12.504H108.176ZM115.042 17.176C114.583 17.176 114.21 17.0213 113.922 16.712C113.645 16.4027 113.399 15.8853 113.186 15.16L110.402 5.8H111.554L114.322 15.144C114.418 15.4853 114.519 15.7307 114.626 15.88C114.743 16.0293 114.882 16.104 115.042 16.104C115.191 16.104 115.319 16.0347 115.426 15.896C115.533 15.7467 115.639 15.496 115.746 15.144L118.514 5.8H119.682L116.898 15.16C116.685 15.8747 116.434 16.392 116.146 16.712C115.858 17.0213 115.49 17.176 115.042 17.176ZM124.532 17C123.284 17 122.356 16.728 121.748 16.184C121.15 15.6293 120.852 14.7867 120.852 13.656V9.144C120.852 8.01333 121.15 7.176 121.748 6.632C122.356 6.07733 123.284 5.8 124.532 5.8H128.388V6.728H124.532C123.668 6.728 123.028 6.92533 122.612 7.32C122.206 7.71467 122.004 8.32267 122.004 9.144V10.936H127.572V11.864H122.004V13.656C122.004 14.4773 122.206 15.0853 122.612 15.48C123.028 15.8747 123.668 16.072 124.532 16.072H128.484V17H124.532Z"
                fill="black"
              />
              <path
                d="M40.9358 14.2127C40.669 13.0923 39.4019 12.6008 37.6679 12.5025C30.7653 11.6376 25.1099 9.82915 20.8617 7.09678C19.888 6.10081 18.2874 5.3997 16.0999 5C14.0658 5.21623 13.3855 6.46775 14.2859 8.17794C13.7746 8.59292 13.2277 9.07781 12.6453 9.63258C10.5845 10.6613 9.14396 8.97733 7.97686 7.66685C7.32329 6.91987 6.85645 6.37601 6.32292 6.44154C6.15147 6.47105 5.99418 6.5538 5.87414 6.67763C5.7541 6.80147 5.67764 6.95986 5.656 7.12954C5.7427 7.9486 5.80272 9.00354 5.82273 10.2485C5.18877 11.6324 4.86577 13.1342 4.87571 14.6517C4.34324 15.7072 3.73713 16.7253 3.0617 17.6986C3.01281 17.7643 2.99174 17.8461 3.00294 17.9268C3.01413 18.0074 3.05671 18.0807 3.12173 18.1311C5.66267 20.3917 10.4578 21.2959 14.6927 20.9159C17.3604 20.6014 21.4752 20.5948 26.9773 20.9159C34.3133 20.6734 38.9817 18.9108 40.8558 15.6739C41.0155 15.2028 41.0431 14.698 40.9358 14.2127ZM16.0332 5.69456C18.0806 6.0746 19.5545 6.72329 20.4215 7.66029C20.6243 7.80194 20.8359 7.93105 21.0551 8.04689C18.3274 6.65122 16.2199 6.56603 14.8061 7.78479C14.2659 6.57259 14.5793 5.937 16.0332 5.6749V5.69456ZM6.38961 7.09678C6.60302 7.09678 7.11654 7.69961 7.47668 8.11896C8.65712 9.47532 10.4378 11.5393 12.9987 10.2223C13.6656 9.60637 14.3326 8.99699 14.9595 8.51866C16.3466 7.03126 18.6875 7.2737 21.8954 9.23288C22.749 9.82915 25.3567 10.6679 29.4248 11.5328C32.1045 12.2875 34.8407 12.8331 37.6079 13.1643C38.9417 13.2823 39.8887 13.492 40.2022 14.1865C37.5345 16.1523 32.7461 17.3317 26.0302 17.7511C21.2285 16.5257 17.5204 15.9295 14.9928 15.9557C13.1521 13.872 10.2577 12.0635 6.38961 10.5892C6.40238 10.5553 6.41799 10.5224 6.43629 10.4909C6.48024 9.38219 6.44011 8.27176 6.31625 7.16886C6.35626 7.09678 6.38294 7.09678 6.38961 7.09678ZM6.11617 11.1855C9.5241 12.496 12.1184 14.0293 13.9391 15.7722C11.2714 15.3201 8.47038 14.8745 5.54262 14.4617C5.57243 13.344 5.76558 12.2362 6.11617 11.1724V11.1855ZM26.9706 20.2017C21.4552 19.9134 17.3003 19.9199 14.6193 20.2017C9.95093 20.5227 6.2829 19.7037 3.76863 17.7576C4.36172 16.8851 4.89852 15.9769 5.3759 15.0383C8.71047 15.5298 11.8783 16.0474 14.8461 16.5454C17.327 16.4668 21.1551 17.1351 25.9902 18.3539C32.6127 17.9476 37.4412 16.7747 40.2955 14.868C40.284 15.011 40.264 15.1532 40.2355 15.2939C38.4882 18.3408 33.9999 19.9854 26.9706 20.2017Z"
                fill="url(#paint0_linear_1281_755)"
              />
              <path
                d="M0.333333 26.1831C0.333333 27.6559 1.52724 28.8498 3 28.8498C4.47276 28.8498 5.66667 27.6559 5.66667 26.1831C5.66667 24.7103 4.47276 23.5164 3 23.5164C1.52724 23.5164 0.333333 24.7103 0.333333 26.1831ZM129.44 26.42C129.571 26.1769 129.48 25.8737 129.237 25.7428C128.994 25.6119 128.691 25.703 128.56 25.9462L129.44 26.42ZM3 26.1831C3.05098 26.6805 3.05102 26.6805 3.05113 26.6805C3.05126 26.6805 3.05145 26.6804 3.05172 26.6804C3.05227 26.6804 3.05311 26.6803 3.05425 26.6802C3.05653 26.6799 3.06 26.6796 3.06464 26.6791C3.07392 26.6782 3.08789 26.6768 3.10645 26.6749C3.14358 26.6712 3.19906 26.6657 3.27205 26.6586C3.41803 26.6444 3.63406 26.6239 3.91343 26.5984C4.47218 26.5474 5.28422 26.4767 6.29591 26.3982C8.3195 26.2411 11.1407 26.0526 14.3306 25.927C20.721 25.6752 28.5519 25.6777 34.4161 26.676L34.5839 25.6902C28.6105 24.6732 20.6914 24.6756 14.2912 24.9277C11.0858 25.054 8.25156 25.2434 6.21852 25.4012C5.20189 25.4801 4.38533 25.5512 3.82255 25.6025C3.54116 25.6282 3.32319 25.6489 3.17537 25.6633C3.10146 25.6705 3.04508 25.6761 3.00708 25.6799C2.98807 25.6817 2.97367 25.6832 2.96395 25.6842C2.9591 25.6847 2.95542 25.685 2.95292 25.6853C2.95168 25.6854 2.95073 25.6855 2.95008 25.6856C2.94975 25.6856 2.94949 25.6857 2.94932 25.6857C2.94913 25.6857 2.94902 25.6857 3 26.1831ZM34.4161 26.676C40.4081 27.6961 46.7403 27.1843 52.3263 26.6811C55.1301 26.4285 57.738 26.1786 60.0477 26.1161C62.3624 26.0535 64.3263 26.1818 65.8503 26.6601L66.1497 25.706C64.4635 25.1768 62.3645 25.0531 60.0207 25.1165C57.6718 25.18 55.0256 25.4339 52.2366 25.6851C46.637 26.1896 40.4295 26.6854 34.5839 25.6902L34.4161 26.676ZM65.8503 26.6601C69.0047 27.6503 71.9482 28.8133 74.6048 29.1356C75.9517 29.299 77.2589 29.2534 78.522 28.8564C79.7885 28.4583 80.9819 27.7159 82.1123 26.5277L81.3877 25.8385C80.3613 26.9175 79.31 27.5605 78.2222 27.9024C77.1309 28.2454 75.9741 28.2943 74.7252 28.1428C72.1903 27.8353 69.4157 26.7312 66.1497 25.706L65.8503 26.6601ZM82.1123 26.5277C82.5598 26.0573 82.9609 25.947 83.3457 25.997C83.7738 26.0527 84.2669 26.3178 84.841 26.7839C85.408 27.2441 85.9978 27.8526 86.6251 28.5186C87.244 29.1757 87.8986 29.8879 88.5683 30.5156C89.8736 31.7388 91.4279 32.8316 93.1419 32.4073C93.9954 32.196 94.8124 31.6239 95.6024 30.6521C96.3911 29.6818 97.175 28.2869 97.9624 26.3734L97.0376 25.9928C96.2701 27.858 95.5304 29.1553 94.8264 30.0213C94.1238 30.8856 93.4791 31.2936 92.9016 31.4366C91.7533 31.7209 90.5676 31.0187 89.2521 29.7859C88.6115 29.1855 87.9854 28.5043 87.3531 27.833C86.7292 27.1706 86.0971 26.5155 85.4712 26.0075C84.8525 25.5052 84.1817 25.0973 83.4746 25.0054C82.7242 24.9078 82.0186 25.1753 81.3877 25.8385L82.1123 26.5277ZM97.9624 26.3734C98.7366 24.4919 99.3808 23.4457 99.906 22.9516C100.161 22.7118 100.352 22.6363 100.484 22.6217C100.608 22.608 100.75 22.6404 100.929 22.7662C101.322 23.0424 101.742 23.658 102.207 24.5537C102.664 25.4335 103.11 26.4686 103.605 27.5284C104.092 28.5698 104.622 29.6222 105.224 30.4601C105.818 31.2868 106.542 31.99 107.447 32.1968C108.39 32.4122 109.366 32.0579 110.372 31.1399C111.371 30.2274 112.464 28.705 113.691 26.4195L112.809 25.9467C111.603 28.1955 110.574 29.6017 109.697 30.4013C108.827 31.1955 108.174 31.3371 107.67 31.2219C107.128 31.0981 106.588 30.644 106.036 29.8766C105.493 29.1204 104.996 28.1417 104.511 27.1049C104.035 26.0864 103.564 24.9961 103.095 24.0928C102.634 23.2055 102.119 22.3804 101.504 21.9481C101.179 21.7197 100.798 21.5809 100.374 21.6277C99.9581 21.6737 99.5746 21.8904 99.2208 22.2233C98.5285 22.8746 97.8183 24.0956 97.0376 25.9928L97.9624 26.3734ZM113.691 26.4195C114.901 24.1639 115.87 22.817 116.646 22.1098C117.031 21.7586 117.341 21.5913 117.581 21.5298C117.806 21.4721 117.993 21.5005 118.172 21.595C118.365 21.6969 118.572 21.8884 118.787 22.1909C119.001 22.4912 119.206 22.8758 119.407 23.3299C119.81 24.2417 120.166 25.366 120.536 26.5241C120.9 27.6664 121.279 28.8427 121.72 29.8017C122.147 30.7323 122.693 31.5973 123.467 31.9515C124.332 32.3473 125.251 32.0293 126.184 31.1563C127.114 30.2854 128.18 28.7623 129.44 26.42L128.56 25.9462C127.312 28.2642 126.309 29.6697 125.5 30.4263C124.694 31.181 124.205 31.1897 123.883 31.0423C123.471 30.8533 123.052 30.3052 122.628 29.3839C122.218 28.491 121.857 27.3764 121.488 26.2201C121.124 25.0795 120.751 23.8972 120.322 22.9256C120.106 22.438 119.869 21.9866 119.601 21.6106C119.335 21.2369 119.02 20.9118 118.639 20.7106C118.243 20.502 117.802 20.4408 117.333 20.561C116.879 20.6773 116.428 20.9554 115.972 21.3707C115.066 22.1966 114.032 23.668 112.809 25.9467L113.691 26.4195Z"
                fill="url(#paint1_linear_1281_755)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1281_755"
                  x1="3"
                  y1="15"
                  x2="41"
                  y2="15"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#008080" />
                  <stop offset="0.485371" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1281_755"
                  x1="3"
                  y1="26.5"
                  x2="129"
                  y2="26.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0212729" stop-color="#008080" />
                  <stop offset="0.0639996" />
                </linearGradient>
              </defs>
            </svg>
            </Link>
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
                <Link href='/about'>
                ABOUT US
                </Link>
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
              <svg
              className="absolute top-2 left-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5" clip-path="url(#clip0_1281_771)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.48969 17.3639C3.29695 16.0975 2.48796 14.495 2.16307 12.7549C1.8355 11.01 2.00371 9.20364 2.64715 7.55648C3.2851 5.91857 4.37424 4.51318 5.77781 3.51677C8.62555 1.49441 12.3745 1.49441 15.2221 3.51677C16.6258 4.51318 17.7149 5.91857 18.3528 7.55648C18.9963 9.20364 19.1645 11.01 18.8369 12.7549C18.5121 14.495 17.7031 16.0975 16.5102 17.3639C14.9307 19.0494 12.7634 20 10.4999 20C8.23663 20 6.06929 19.0494 4.48969 17.3639Z"
                    stroke="#008080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.0241 5.02527C10.4008 5.08779 9.94902 5.61685 10.015 6.20696C10.0811 6.79707 10.64 7.22474 11.2634 7.16222L11.0241 5.02527ZM13.8259 8.59134C14.0703 9.13784 14.7363 9.39327 15.3136 9.1619C15.8908 8.93057 16.1606 8.30005 15.9162 7.75359L13.8259 8.59134ZM18.5482 16.3199C18.1047 15.9008 17.386 15.9013 16.9432 16.3214C16.5002 16.7413 16.501 17.4216 16.9446 17.8408L18.5482 16.3199ZM22.0717 22.6859C22.5154 23.1052 23.234 23.1046 23.6769 22.6846C24.1197 22.2646 24.1191 21.5844 23.6754 21.165L22.0717 22.6859ZM11.2634 7.16222C12.3567 7.05254 13.3973 7.63282 13.8259 8.59134L15.9162 7.75359C15.098 5.9237 13.1116 4.81588 11.0241 5.02527L11.2634 7.16222ZM16.9446 17.8408L22.0717 22.6859L23.6754 21.165L18.5482 16.3199L16.9446 17.8408Z"
                    fill="#008080"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1281_771">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <button
              className={`${
                showSearch
                  ? "opacity-100 translate-x-16 visible"
                  : "opacity-0  translate-x-40 invisible"
              } transition-all duration-700 ease-in-out flex items-center justify-center`}
              onClick={cancelhandel}
            >
              <img src="/images/cancel.png" alt="" />
            </button>
            <button
              className={`${
                showSearch ? "invisible" : "visible "
              } transition-all duration-300 ease-in-out`}
            >
              <img src="/images/basket 1.png" alt="" />
            </button>
            <button
              className={`${
                showSearch ? "invisible" : "visible "
              } transition-all duration-300 ease-in-out`}
            >
              {context.userName === '' ? (
                <Link href='/register'>
                <img src="/images/profile 1.png" alt="" />
                </Link>
              

              ) : (
                <Link href='/profile'>
              <img src="/images/profile 1.png" alt="" />
              </Link>
              )}
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
                <li className="hover:font-kohob cursor-pointer"><Link href='/shop?gender=Men&category=ALL'>ALL</Link></li>
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
      <div className="md:hidden 	bg-primary1">
        <div className="navbar-mobile h-[80px] container flex items-center justify-between  overflow-x-hidden">
          {showMobileSearch ? (
            <div className="icon-menu">
              <img
                onClick={handelMobile}
                className="cursor-pointer"
                src="/images/menu-can.png"
                alt=""
              />
            </div>
          ) : (
            <div className="icon-menu">
              {showMobileNavbar ? (
                <img
                  onClick={() => setShowMobileNavbar(false)}
                  className="cursor-pointer"
                  src="/images/menu-ca.png"
                  alt=""
                />
              ) : (
                <img
                  onClick={() => setShowMobileNavbar(true)}
                  className="cursor-pointer"
                  src="/images/menu-can.png"
                  alt=""
                />
              )}
            </div>
          )}
          <div className="logo flex translate-x-20">
            <img
              className={`${
                showMobileSearch ? "opacity-0 invisible" : "opacity-100 visible"
              } transition-all duration-700 ease-in-out`}
              src="/images/Frame 2.png"
              alt=""
            />
            <input
              onChange={() => setShowMobileSearchResult(true)}
              className={`${
                showMobileSearch
                  ? "-translate-x-32 visible opacity-100"
                  : "translate-x-24 invisible opacity-0"
              } transition-all duration-700 ease-in-out w-[200px] h-[40px] text-center bg-secondary1/10 rounded-full p-2 focus:outline-none `}
              type="text"
            />
            <img
              className={`${
                showMobileSearch
                  ? "opacity-100 visible left-2"
                  : "opacity-0 invisible left-80"
              } transition-all duration-700 ease-in-ou absolute top-2 left-2`}
              src="/images/search.png"
              alt=""
            />
          </div>

          <div
            className={`${
              showMobileSearch
                ? "-translate-x-[220px] sm:-translate-x-[330px] invisible opacity-0"
                : "translate-x-0 visible opacity-100"
            } search transition-all duration-700 ease-in-out flex items-center justify-center`}
          >
            <img
              onClick={() => setShowMobileSearch(true)}
              src="/images/Frame 9.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={`${
            showMobileNavbar ? "top-[78px] h-0 " : "top-[78px] h-[100vh] "
          } transition-all duration-700 ease-in-out bg-primary1  sub-menu  absolute  left-0 right-0 overflow-x-hidden overflow-y-hidden mt-[5px] z-10`}
        >
          <div className="top flex items-center justify-between container">
            {!showMobileNavbar ? (
              <motion.div
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ stiffness: 100, delay: 1 }}
                className="left"
              >
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
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ stiffness: 100, delay: 1 }}
                style={{}}
                className="right flex items-center justify-center gap-3"
              >
                <img src="/images/basket 1.png" alt="" />
                <img src="/images/profile 1.png" alt="" />
              </motion.div>
            ) : (
              <></>
            )}
          </div>
          {!showMobileNavbar ? (
            <motion.div
              initial={{ opacity: 0, y: "100vw" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ stiffness: 100, delay: 1 }}
              className="middel mt-5 flex flex-col items-center"
            >
              <h1 className="text-center font-kohob text-secondary1 mb-2">
                SHOP
              </h1>
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
                <p className="text-center font-kohob mt-2">
                  Have a question or need assistance?
                </p>
                <p className="text-center font-kohol">
                  Our dedicated customer service team is here to help.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <textarea
                    className="bg-secondary1/10 font-kohol w-[300px] h-[100px] rounded-lg focus:outline-none p-2"
                    placeholder="Text"
                  ></textarea>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <button className="w-[140px] font-kohob h-[40px] flex items-center justify-center border-solid border-2 border-primary2 rounded-full">
                    SEND
                  </button>
                </div>
                <p className="text-center mt-3 font-kohol">
                  © 2024 <span className="font-kohob">WalkWave</span>
                </p>
              </div>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
        <div
          className={`${
            showMobileSearchResult ? "top-[78px] h-[100vh]" : "top-[78px] h-0"
          } transition-all duration-700 ease-in-out bg-primary1   absolute  left-0 right-0 overflow-x-hidden overflow-y-hidden mt-[5px] z-10`}
        ></div>
      </div>
    </>
  );
}
