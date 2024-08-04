'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/modules/Navbar/Navbar";
import Footer from "@/component/modules/Footer/Footer";
import Providers from "./Providers";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "@/context/authContext";
import { useEffect } from "react";
import { usePathname , useSearchParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata={
  title:'WALK WAVE - HOME',
  icons:{
    icon:'/images/svgs/Frame 2.svg'

  }
}

export default function RootLayout({ children }) {
  const pathName=usePathname()
  const searchParams= useSearchParams()
  useEffect(()=>{
   window.scrollTo(0,0)
  },[pathName , searchParams])

  

  return (
    <html lang="en">
      <AuthContextProvider>
      <Providers>
        <body className={inter.className}>
          <div>
            <div className=" border-solid border-b-4 border-secondary1 bg-primary1 fixed top-0 left-0 right-0 z-50 ">
              <Navbar />
            </div>
            <main>{children}</main>
            <Toaster containerClassName="!z-[99999999999]"/>
          </div>
          <Footer />
        </body>
      </Providers>
      </AuthContextProvider>
    </html>
  );
}
