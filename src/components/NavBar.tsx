"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Logo from "/public/Logo.svg";
import LoginModal from './Login/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

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
    <nav className='w-full h-[20rem] flex flex-col bg-[#303A39] mx-auto fixed top-0 pt-4 z-50'>
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
             className={`${!isLoginSuccess && "hidden"} bg-red hover:brightness-90  rounded-xl px-6 py-2 text-[#fff]`}>Signout</button>
        </div>
        <div className=" mobile px-8 md:px-16 w-full h-full justify-center  lg:-mt-16 items-end flex flex-col">
            <div className="mx-auto w-[14rem] sm:w-[16rem]">
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
