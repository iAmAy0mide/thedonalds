"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Logo from "/public/Logo.svg"
import Link from 'next/link';
import LoginModal from './Login/LoginModal';


const NavBar = () => {
    const [isCLicked, setIsClicked] = useState<boolean>(false);

  return (
    <nav className='w-full h-[20rem] flex flex-col  mx-auto fixed top-0 pt-4 bg-mainB'>
        <div className="mobile px-8 md:px-16 flex w-full justify-end">            
            <button className='bg-red  rounded-sm px-8 py-3 text-[#fff]'>Login</button>
        </div>
        <div className=" mobile px-8 md:px-16 w-full h-full justify-center -mt-8 items-end flex flex-col">
            <div className="mx-auto w-[16rem]">
                <Image alt='' width={100} height={100} src={Logo} className='w-full' />
            </div>
        </div>
        <div className={` ${isCLicked ? "block" : "hidden"}  absolute`}>
            <LoginModal />
        </div>
    </nav>
  )
}

export default NavBar
