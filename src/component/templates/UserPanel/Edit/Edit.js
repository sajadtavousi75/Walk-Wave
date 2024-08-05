'use client'
import React, { useEffect, useState } from "react";

import { useAuthContext } from "@/context/authContext";


export default function Edit() {
  const [userName , setUserName] = useState('')
const [email , setEmail] = useState('')

const context=useAuthContext()
useEffect(()=>{
setUserName(context.userName)
setEmail(context.email)
},[])
return (
    <div className="edit w-full mt-[10px]">
      <p className="font-kohob text-[24px] border-solid border-b-2 border-secondary1 text-center">Personal Information</p>
      <div className="details flex flex-col gap-6 lg:flex-row items-center justify-between">
      <div className="form flex flex-col gap-4 mt-4">
        <div>
          <p className="font-quikr">Full Name</p>
          <input className="w-[300px] h-[40px] p-2 border-none outline-none bg-opacity-10 rounded-lg bg-secondary1 font-quikr" type="" defaultValue={userName} />
        </div>
        <div>
          <p className="font-quikr">EMAIL</p>
          <input className="w-[300px] h-[40px] p-2 border-none outline-none bg-opacity-10 rounded-lg bg-secondary1 font-quikr" type="" defaultValue={email} />
        </div>
        <div>
          <p className="font-quikr">PASSWORD</p>
          <input className="w-[300px] h-[40px] p-2 border-none outline-none bg-opacity-10 rounded-lg bg-secondary1 font-quikr" type="" />
        </div>
      </div>
      <div className="upload flex items-center justify-center gap-4">
        <img className="w-[80px] h-[80px] rounded-full bg-secondary1 bg-opacity-10" src="" alt="" />
        <div className="btns">
          <svg
            width="33"
            height="31"
            viewBox="0 0 33 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.8333 23.8337H24.85M22.5 18.8337H26.5C28.0532 18.8337 28.8297 18.8337 29.4423 19.0873C30.259 19.4257 30.908 20.0747 31.2463 20.8913C31.5 21.504 31.5 22.2805 31.5 23.8337C31.5 25.3868 31.5 26.1633 31.2463 26.776C30.908 27.5927 30.259 28.2417 29.4423 28.58C28.8297 28.8337 28.0532 28.8337 26.5 28.8337H6.5C4.94687 28.8337 4.1703 28.8337 3.55772 28.58C2.74097 28.2417 2.09205 27.5927 1.75373 26.776C1.5 26.1633 1.5 25.3868 1.5 23.8337C1.5 22.2805 1.5 21.504 1.75373 20.8913C2.09205 20.0747 2.74097 19.4257 3.55772 19.0873C4.1703 18.8337 4.94687 18.8337 6.5 18.8337H10.5M16.5 20.5003V2.16699M16.5 2.16699L21.5 7.16699M16.5 2.16699L11.5 7.16699"
              stroke="#008080"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-kohol text-secondary1">upload new profile</p>
        </div>
      </div>
      <div className="send">
        <button className="w-[300px] h-[40px] rounded-full text-white bg-black font-kohob">NEXT</button>
      </div>
      </div>
    </div>
  );
}
