"use client"

import React from 'react'
import styles from "./Register.module.css";
import { useForm } from 'react-hook-form';
import { useMutation , useQueryClient } from '@tanstack/react-query';
import AuthRegister from '@/services/Auth/AuthRegister';
import { setAuthCookie } from '@/utils/setAuthCookie';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';



export default function RegisterForm() {

  const router= useRouter()

  const {register, handleSubmit , formState:{errors}} = useForm()

  const {mutate:registerForm  } = useMutation({
    mutationKey:["user"],
    mutationFn: (data)=>
       AuthRegister(data),
    onSuccess: async (data)=>{
      console.log(data)
      toast.success('Welcome to walkWave')
      await fetch('/api/setAuthCookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken: data.accessToken }),
      });
      router.push('/')

    }
  })

  const onSubmit=(data)=>{
    console.log(data)
    registerForm(data)
  }

  return (
    <div className='  bg-custom-svg bg-no-repeat bg-center bg-cover mt-[110px]'>
        <p className='font-quikr text-[48px] text-center'>Welcome to <span className='text-secondary1 font-kohob'>WalkWave</span>,</p>
        <p className='font-quikr text-[48px] text-center'>where passion meets innovation.</p>
        <div className="form-content flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} action="" className='w-[380px] h-auto p-3 shadow-lg bg-primary1 rounded-lg flex flex-col items-center justify-cneter gap-4'>
                <h1 className={styles.text}>SIGN UP</h1>
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
                  {errors.email &&(
                  <span className="text-sm text-red-700">{errors.email.message}</span>
                  )}
                <input className='w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1'
                {...register('username',{
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
                 placeholder='User Name' />
                 {errors.username &&(
                  <span className="text-sm text-red-700">{errors.username.message}</span>
                  )}
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
                {errors.password &&(
                  <span className="text-sm text-red-700">{errors.password.message}</span>
                  )}
                <button className='w-[300px] h-[40px] rounded-full bg-black text-white font-kohob' type='submit'>SIGN UP</button>
            <p className='font-quikr'>Already have an account ? <span className='font-kohob text-secondary1'>LOG IN</span></p>
            </form>
        </div>
    </div>
  )
}
