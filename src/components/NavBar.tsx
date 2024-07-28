"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Logo from "/public/Logo.svg";
import Link from 'next/link';
import LoginModal from './Login/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { setLoginModalStatus } from '@/lib/features/auth/authSlice';


const NavBar = () => {
    const [isCLicked, setIsClicked] = useState<boolean>(true);
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.auth.isLoginModalOpen);

  return (
    <nav className='w-full h-[20rem] flex flex-col  mx-auto fixed top-0 pt-4 z-50'>
        <div className="mobile px-8 md:px-16 flex w-full justify-end">            
            <button
                // aria-label="Increment value"
                onClick={() => {
                    dispatch(setLoginModalStatus(true));
                }}
             className='bg-red hover:brightness-90  rounded-sm px-8 py-3 text-[#fff]'>Login</button>
        </div>
        <div className=" mobile px-8 md:px-16 w-full h-full justify-center -mt-8 items-end flex flex-col">
            <div className="mx-auto w-[16rem]">
                <Image alt='' width={100} height={100} src={Logo} className='w-full' />
            </div>
        </div>
        <div className={`${!isModalOpen && "hidden"} absolute left-[50%] -translate-x-[50%] top-[30dvh] `}>

            <LoginModal />
        </div>
    </nav>
  )
}

export default NavBar
