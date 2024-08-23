"use client";
import { useState, useEffect } from 'react';

import GoogleLogo from "/public/google-logo.webp"
import Image from "next/image";
import Logo from "/public/Logo.svg";
import LoginModal from './Login/LoginModal';


import { FiMoreVertical, FiMenu, FiTool  } from 'react-icons/fi';
import { FaTh, FaGripHorizontal } from 'react-icons/fa';
import { MdApps } from 'react-icons/md';
import { BsGrid3X3Gap } from 'react-icons/bs';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/lib/features/store';
import { setUploadPhotoModalStatus } from '@/lib/features/store/modal/modalSlice';
import { setLoginModalStatus } from '@/lib/features/store/auth/authSlice';

import { useSession } from 'next-auth/react';
import { signOut, signIn } from 'next-auth/react';


const NavBar = () => {
    const { data: session } = useSession();

    const router = useRouter();
    const pathName = usePathname();
    const dispatch = useDispatch();
    const isLoginSuccess = session ? true : false;
    const isModalOpen = useSelector((state: RootState) => state.auth.isLoginModalOpen);
    const [showSmallScreenOptions, setShowSmallScreenOptions] = useState<boolean>(false);

    useEffect(() => {
        !session && router.replace("/");
    }, [session]);

    const cBtnName = pathName === "/gallery" ? "Deleted Album" : "Gallery";
    const redirectTo = cBtnName === "Deleted Album" ? "/deleted-album" : "/gallery";

  return (
    <header className="fixed w-full mx-auto z-50 h-[11rem] md:h-[12rem] lg:h-[14rem] md:pb-2 top-0 pt-1  bg-[#303 A39] glassy-dark mobile px-8 md:px-16">    
        <nav className='w-full h-full relative flex justify-end max-w-[1440px] mx-a uto duration-300 transition-all'>
            

            <div className="mx-auto w-[18rem] absolute left-[50%] -translate-x-[50%] top-[24%] lg:top-[28%] sm:w-[21rem] mb-4">
                <Image alt='' width={100} height={100} priority src={Logo} className='w-full' />
            </div>
            <div className="flex  h-[2.22rem] lg:-order-1">            
                <button
                    onClick={() => {
                        dispatch(setLoginModalStatus(true));
                        // signIn("google")
                    }}
                className={`${isLoginSuccess && "hidden"} T3d-effect auth-button`}>Login</button>
                <button
                    onClick={() => {
                        router.replace("/");
                        signOut()
                    }}
                className={`${!isLoginSuccess && "hidden"} T3d-effect auth-button`}>Signout</button>
            </div>
            <div className={`w-f ull ${!isLoginSuccess && "hidden" } sm-menu-show-button`}>
                <div onClick={() => {
                        setShowSmallScreenOptions(!showSmallScreenOptions);                    
                    }} 
                className="w-[4rem] -mr-3 cursor-pointer" title='Menu' aria-label='Menu'>
                    <BsGrid3X3Gap  className='w-full text-actionBg text-[2.3rem]' />
                </div>
                <div className={`${!showSmallScreenOptions  && "hidden"}  sm-menu-option`}>               
                        <button onClick={() => {
                            dispatch(setUploadPhotoModalStatus(true));
                        }} className='upload-button'>Upload</button>
                        <button onClick={() => {
                            router.push(redirectTo)
                        }} className='deleted-gallery-button border-[2px] mt-4'>{cBtnName}</button>
                </div>
            </div>

            <div className={`${!isLoginSuccess && "hidden"} ml-[0.57rem] blk h-[23%]`}>
                <div className={`md-opt ion h-full gap-2 md:flex w-full justify-end text-[#fff]  rounded-xl`}>
                    <button onClick={() => { 
                        console.log("clicked")
                        dispatch(setUploadPhotoModalStatus(true));
                    }} className='upload-button'>Upload</button>
                    <button onClick={() => {
                         router.push(redirectTo)
                    }} className='deleted-gallery-button'>{cBtnName}</button>
                </div>
            </div>

            <div className={`${!isModalOpen && "hidden"} absolute left-[50%] -translate-x-[50%] top-[30dvh] `}>
                <LoginModal />
            </div>
            
        </nav>
    </header>
  )
}

export default NavBar; 
