import React from 'react'
import styles from "./Register.module.css";



export default function RegisterForm() {
  return (
    <div className='  bg-custom-svg bg-no-repeat bg-center bg-cover mt-[110px]'>
        <p className='font-quikr text-[48px] text-center'>Welcome to <span className='text-secondary1 font-kohob'>WalkWave</span>,</p>
        <p className='font-quikr text-[48px] text-center'>where passion meets innovation.</p>
        <div className="form-content flex items-center justify-center">
            <form action="" className='w-[380px] h-auto p-3 shadow-lg bg-primary1 rounded-lg flex flex-col items-center justify-cneter gap-4'>
                <h1 className={styles.text}>SIGN UP</h1>
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1' type="text" placeholder='Email' />
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1' type="text" placeholder='User Name' />
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1' type="text" placeholder='Create Password' />
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1' type="text" placeholder='Confirm Password' />
                <button className='w-[300px] h-[40px] rounded-full bg-black text-white font-kohob' type='submit'>SIGN UP</button>
            <p className='font-quikr'>Already have an account ? <span className='font-kohob text-secondary1'>LOG IN</span></p>
            </form>
        </div>
    </div>
  )
}
