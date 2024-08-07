"use client";
import { useState, useEffect } from 'react';

import Image from "next/image";
// import Logo from "/public/Logo.svg";
import LogoTwo from "/public/Logo2.svg";
import Logo from "/public/Logo.svg";
import LoginModal from './Login/LoginModal';
import OptionIcon from "/public/options-icon.svg";
import Menu from "/public/menu2.png";

import { FiMoreVertical, FiMenu, FiTool  } from 'react-icons/fi';
import { FaTh, FaGripHorizontal } from 'react-icons/fa';
import { MdApps } from 'react-icons/md';
import { BsGrid3X3Gap } from 'react-icons/bs';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/lib/store';
import { setUploadPhotoModalStatus } from '@/lib/features/modal/modalSlice';
import { setLoginModalStatus, signOut } from '@/lib/features/auth/authSlice';



const getAuthStatus = (key: string): boolean => {
    if (typeof window !== 'undefined') {
        const item = localStorage.getItem("isLoggedIn");
        return item ? JSON.parse(item) : false;
    }
    return false;
}

const isLoggedInUser: boolean = getAuthStatus("isLoggedIn");


const NavBar = () => {

    const router = useRouter()
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.auth.isLoginModalOpen);
    const isLoginSuccess = useSelector((state: RootState) => state.auth.isLoggedIn);
    const [showSmallScreenOptions, setShowSmallScreenOptions] = useState<boolean>(false);
    const pathName = usePathname();


    
    // useEffect(() => {

    //     if (isLoginSuccess !== true) {
    //         router.replace("/");
    //     }
    
    //     if (isLoginSuccess === true && pathName === "/") { 
    //         router.replace("/gallery");
    //     } 
    // }, [isLoginSuccess, isLoggedInUser]);
    if (typeof window !== "undefined") {

        if (isLoginSuccess !== true) {
            router.replace("/");
        }
    
        if (isLoginSuccess === true && pathName === "/") { 
            router.replace("/gallery");
        }
    }
    
    
    console.log({isLoginSuccess});
    

  return (
    <header className="fixed w-full mx-auto z-50 h-[11rem] md:h-[12rem] lg:h-[14rem] md:pb-2 top-0 pt-1  bg-[#303 A39] glassy-dark mobile px-8 md:px-16">    
        <nav className='w-full h-full relative flex justify-end max-w-[1440px] mx-a uto duration-300 transition-all'>
            

            <div className="mx-auto w-[18rem] absolute left-[50%] -translate-x-[50%] top-[24%] lg:top-[20%] sm:w-[21rem] mb-4">
            {/* <div className="mx-auto w-[18rem] sm:w-[21rem] mb-4"> */}
                <Image alt='' width={100} height={100} priority src={Logo} className='w-full' />
            </div>
            <div className="flex  h-[2.22rem] lg:-order-1">            
            {/* <div className="flex w-full justify-end h-[15%]">             */}
                <button
                    onClick={() => {
                        dispatch(setLoginModalStatus(true));
                    }}
                className={`${isLoggedInUser && "hidden"} red-3d-effect auth-button`}>Login</button>
                <button
                    onClick={() => {
                        router.replace("/");
                        dispatch(signOut());
                    }}
                className={`${!isLoggedInUser && "hidden"} red-3d-effect auth-button`}>Signout</button>
            </div>
            <div className={`w-f ull ${!isLoginSuccess && "hid den" } sm-menu-show-button`}>
                <div onClick={() => {
                        setShowSmallScreenOptions(!showSmallScreenOptions);                    
                    }} 
                className="w-[4rem] -mr-3 cursor-pointer" title='Menu' aria-label='Menu'>
                    <BsGrid3X3Gap  className='w-full text-actionBg text-[2.3rem]' />
                </div>
                <div className={`${!showSmallScreenOptions  && "hidden"} sm-menu-option`}>               
                        <button onClick={() => {
                            dispatch(setUploadPhotoModalStatus(true));
                        }} className='upload-button'>Upload</button>
                        <button onClick={() => {
                            dispatch(setUploadPhotoModalStatus(true));
                        }} className='deleted-gallery-button mt-4'>Deleted Gallery</button>
                </div>
            </div>

            <div className={`${isLoginSuccess && "hid den"} blk h-[23%]`}>
                <div className={`md-opt ion h-full gap-2 md:flex w-full justify-end text-[#fff]  rounded-xl`}>
                    <button onClick={() => {
                        dispatch(setUploadPhotoModalStatus(true));
                    }} className='upload-button'>Upload</button>
                    <button onClick={() => {
                        dispatch(setUploadPhotoModalStatus(true));
                    }} className='deleted-gallery-button'>Deleted Gallery</button>
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

{/* <header className="fixed w-full mx-auto z-50 h-[15rem] md:pb-2 top-0 pt-1  bg-[#303 A39] glassy-dark mobile px-8 md:px-16">    
        <nav className='w-full h-full  flex flex-col justify-between max-w-[1440px] mx-auto duration-300 transition-all'>
            <div className="flex w-full justify-end h-[15%]">            
                <button
                    onClick={() => {
                        dispatch(setLoginModalStatus(true));
                    }}
                className={`${isLoggedInUser && "hidden"} red-3d-effect auth-button`}>Login</button>
                <button
                    onClick={() => {
                        router.replace("/");
                        dispatch(signOut());
                    }}
                className={`${!isLoggedInUser && "hidden"} red-3d-effect auth-button`}>Signout</button>
            </div>

            <div className="mx-auto w-[18rem] sm:w-[21rem] mb-4">
                <Image alt='' width={100} height={100} priority src={Logo} className='w-full' />
            </div>

            <div className={`w-full ${!isLoginSuccess && "hidden" } sm-menu-show-button`}>
                <div onClick={() => {
                    setShowSmallScreenOptions(!showSmallScreenOptions);                    
                }} 
                className="w-[4rem] -mr-3 cursor-pointer" title='Menu' aria-label='Menu'>
                    <BsGrid3X3Gap  className='w-full text-actionBg text-[2.3rem]' />
                </div>
                <div className={`${!showSmallScreenOptions  && "hidden"} sm-menu-option`}>                  
                        <button onClick={() => {
                            dispatch(setUploadPhotoModalStatus(true));
                        }} className='upload-button'>Upload</button>
                        <button onClick={() => {
                            dispatch(setUploadPhotoModalStatus(true));
                        }} className='deleted-gallery-button mt-4'>Deleted Gallery</button>
                </div>
            </div>

            <div className={`${isLoginSuccess && "hidden"} w-full h-[15%]`}>
                <div className={`md-opt ion h-full gap-2 md:flex w-full justify-end text-[#fff]  rounded-xl`}>
                    <button onClick={() => {
                        dispatch(setUploadPhotoModalStatus(true));
                    }} className='upload-button'>Upload</button>
                    <button onClick={() => {
                        dispatch(setUploadPhotoModalStatus(true));
                    }} className='deleted-gallery-button'>Deleted Gallery</button>
                </div>
            </div>

            <div className={`${!isModalOpen && "hidden"} absolute left-[50%] -translate-x-[50%] top-[30dvh] `}>
                <LoginModal />
            </div>
            
        </nav>
    </header> */}