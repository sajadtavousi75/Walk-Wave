"use client"

import React from 'react'
import styles from "./Login.module.css";

import { useForm } from 'react-hook-form';


export default function LoginForm() {

  const {register, handleSubmit, formState:{errors}} = useForm()

  const onSubmit=(data)=>{
    console.log(data)
  }

  return (
        <div className='   mt-[110px]'>
        <p className='font-quikr text-[48px] text-center'>Welcome to <span className='text-secondary1 font-kohob'>WalkWave</span>,</p>
        <p className='font-quikr text-[48px] text-center'>where passion meets innovation.</p>
        <div className="form-content flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} action="" className='w-[380px] h-auto p-3 shadow-lg bg-primary1 rounded-lg flex flex-col items-center justify-cneter gap-4'>
                <h1 className={styles.text}>LOG IN</h1>
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1' 
                {...register('email',{
                  required:{
                    value:true,
                    message:'This field is required'
                  },
                  maxLength:{
                    value:30,
                    message:'It cannot be more than 30 character'
                  },
                  minLength:{
                    value:5,
                    message:'It cannot be less than 5 characters'
                  }
                })}
                type="text" 
                placeholder='Email' />
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1' 
                {...register('password',{
                  required:{
                    value:true,
                    message:'This field is required'
                  },
                    maxLength:{
                      value:10,
                      message:'It cannot be more than 10 character'
                    },
                    minLength:{
                      value:5,
                      message:'It cannot be less than 5 characters'
                    }
                })}
                type="text" 
                placeholder='Create Password' />
                <button className='w-[300px] h-[40px] rounded-full bg-black text-white font-kohob' type='submit'>LOG IN</button>
            <p className='font-quikr'>Already have an account ? <span className='font-kohob text-secondary1'>SIGN UP</span></p>
            </form>
        </div>
    </div>
  )
}
