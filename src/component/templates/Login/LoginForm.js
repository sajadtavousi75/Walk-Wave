"use client";

import React from "react";
import styles from "./Login.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import AuthLogin from "@/services/Auth/AuthLogin";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import getUserInfos from "@/services/Auth/getUserInfos";
import Cookies from "js-cookie";
import { useAuthContext } from "@/context/authContext";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const context = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: loginForm } = useMutation({
    mutationKey: ["user"],
    mutationFn: (data) => AuthLogin(data),
    onSuccess: async (data) => {
      toast.success("Welcome to walkWave",{
        style:{
          width:'500px',
          backgroundColor:'#33ff7a',
          color:'white',
          textAlign:'center',
          fontFamily:'kohob'
        }
      });
      await fetch("/api/setAuthCookie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken: data.accessToken }),
      });
      router.push("/");
      const token = Cookies.get("access-token");
      if (token) {
        fetch("https://backend-walk.onrender.com/api/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.setEmail(data.email);
            context.setUserName(data.username);
          });
      }
    },
    onError:()=>{
      toast.error('The information entered is incorrect',{
        style:{
          width:'400px',
          backgroundColor:'red',
          color:'white',
          textAlign:"center",
          fontFamily:'kohob'
        }
      })
    }
  });

  const onSubmit = (data) => {
    loginForm(data);
  };

  return (
    <div className="   mt-[110px]">
      <p className="font-quikr text-[24px] lg:text-[48px] text-center">
        Welcome to <span className="text-secondary1 font-kohob">WalkWave</span>,
      </p>
      <p className="font-quikr text-[24px] lg:text-[48px] text-center">
        where passion meets innovation.
      </p>
      <div className="form-content flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="w-[380px] h-auto p-3 shadow-lg bg-primary1 rounded-lg flex flex-col items-center justify-cneter gap-4"
        >
          <h1 className={styles.text}>LOG IN</h1>
          <input
            className="w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 30,
                message: "It cannot be more than 30 character",
              },
              minLength: {
                value: 5,
                message: "It cannot be less than 5 characters",
              },
            })}
            type="text"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-sm text-red-700">{errors.email.message}</span>
          )}
          <input
            className="w-[300px] h-[40px] rounded-full border-none outline-none bg-secondary1 bg-opacity-10 p-3 font-kohol text-secondary1"
            {...register("password", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 10,
                message: "It cannot be more than 10 character",
              },
              minLength: {
                value: 5,
                message: "It cannot be less than 5 characters",
              },
            })}
            type="text"
            placeholder="Create Password"
          />
          {errors.password && (
            <span className="text-sm text-red-700">
              {errors.password.message}
            </span>
          )}
          <button
            className="w-[300px] h-[40px] rounded-full bg-black text-white font-kohob"
            type="submit"
          >
            LOG IN
          </button>
          <p className="font-quikr">
            Already have an account ?{" "}
            <Link href='/register' className="font-kohob text-secondary1">SIGN UP</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
