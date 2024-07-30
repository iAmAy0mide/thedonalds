"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Logo from "/public/Logo.svg";
import LoginModal from './Login/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { setUploadPhotoModalStatus } from '@/lib/features/modal/modalSlice';

import { RootState } from '@/lib/store';
import { setLoginModalStatus, signOut } from '@/lib/features/auth/authSlice';
import { useRouter } from 'next/navigation';



const isLoggedInUser = localStorage.getItem("isLoggedIn");

// const isLoggedInUserBool = JSON.parse(isLoggedInUser)


const NavBar = () => {
    const [isCLicked, setIsClicked] = useState<boolean>(true);
    const router = useRouter()
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.auth.isLoginModalOpen);
    const isLoginSuccess = useSelector((state: RootState) => state.auth.isLoggedIn);
    const pathName = usePathname();

    if (isLoggedInUser !== "true") {
        router.replace("/");
    }

    if (isLoggedInUser === "true" && pathName === "/") {
        router.replace("/gallery");
    }
    

  return (
    <nav className='w-full h-[15rem] flex flex-col bg-[#303A39] fixed top-0 pt-4 z-50'>
        <div className="mobile px-8 md:px-16 flex w-full justify-end">            
            <button
                // aria-label="Increment value"
                onClick={() => {
                    dispatch(setLoginModalStatus(true));
                }}
             className={`${isLoginSuccess && "hidden"} bg-red hover:brightness-90  rounded-xl px-6 py-2 text-[#fff]`}>Login</button>
            <button
                // aria-label="Increment value"
                onClick={() => {
                    router.replace("/");
                    dispatch(signOut());
                }}
             className={`${!isLoginSuccess && "hidden"} text-sm max-sm:px-4 max-sm:py-1 bg-red hover:brightness-90  rounded-xl px-6 py-2 text-[#fff]`}>Signout</button>
        </div>
        <div className="mobile px-8 md:px-16 w-full h-full justify-center  lg:-mt-[2.8rem] -mt-[3rem] items-end flex flex-col">
            <div className="mx-auto w-[12rem] sm:w-[14rem]">
                <Image alt='' width={100} height={100} priority src={Logo} className='w-full' />
            </div>
        </div>
        <div className={`${!isLoginSuccess && "hidden"}  mobile px-8 md:px-16 flex w-full justify-end text-[#fff]  rounded-xl`}>
            <button onClick={() => {
                dispatch(setUploadPhotoModalStatus(true));
            }} className='rounded-xl px-6 py-1 hover:brightness-90 bg-actionBg shadow-sm'>Upload</button></div>
        <div className={`${!isModalOpen && "hidden"} absolute left-[50%] -translate-x-[50%] top-[30dvh] `}>

            <LoginModal />
        </div>
    </nav>
  )
}

export default NavBar
