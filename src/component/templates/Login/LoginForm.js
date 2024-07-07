import React from 'react'
import styles from "./Login.module.css";

export default function LoginForm() {
  return (
        <div className='   mt-[110px]'>
        <p className='font-quikr text-[48px] text-center'>Welcome to <span className='text-secondary1 font-kohob'>WalkWave</span>,</p>
        <p className='font-quikr text-[48px] text-center'>where passion meets innovation.</p>
        <div className="form-content flex items-center justify-center">
            <form action="" className='w-[380px] h-auto p-3 shadow-lg bg-primary1 rounded-lg flex flex-col items-center justify-cneter gap-4'>
                <h1 className={styles.text}>LOG IN</h1>
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1' type="text" placeholder='Email' />
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1' type="text" placeholder='Create Password' />
                <button className='w-[300px] h-[40px] rounded-full bg-black text-white font-kohob' type='submit'>LOG IN</button>
            <p className='font-quikr'>Already have an account ? <span className='font-kohob text-secondary1'>SIGN UP</span></p>
            </form>
        </div>
    </div>
  )
}
