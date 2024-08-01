"use client";
import { useState } from 'react';

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



const isLoggedInUser = localStorage.getItem("isLoggedIn");

// const isLoggedInUserBool = JSON.parse(isLoggedInUser)


const NavBar = () => {
    const [isCLicked, setIsClicked] = useState<boolean>(true);
    const router = useRouter()
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.auth.isLoginModalOpen);
    const isLoginSuccess = useSelector((state: RootState) => state.auth.isLoggedIn);
    const [showSmallScreenOptions, setShowSmallScreenOptions] = useState<boolean>(false);
    const pathName = usePathname();

    if (isLoggedInUser !== "true") {
        router.replace("/");
    }

    if (isLoggedInUser === "true" && pathName === "/") {
        router.replace("/gallery");
    }
    

  return (
    <header className="fixed w-full mx-auto z-50 h-[15rem] top-0 pt-1  bg-[#303A39] mobile px-8 md:px-16">    
        <nav className='w-full h-full  flex flex-col justify-between max-w-[1440px] mx-auto'>
            <div className="flex w-full justify-end h-[15%]">            
                <button
                    onClick={() => {
                        dispatch(setLoginModalStatus(true));
                    }}
                className={`${isLoginSuccess && "hidden"} auth-button`}>Login</button>
                <button
                    onClick={() => {
                        router.replace("/");
                        dispatch(signOut());
                    }}
                className={`${!isLoginSuccess && "hidden"} auth-button`}>Signout</button>
            </div>

            <div className="mx-auto w-[18rem] sm:w-[21rem] mb-4">
                <Image alt='' width={100} height={100} priority src={Logo} className='w-full' />
            </div>

            <div className={`w-full ${!isLoginSuccess && "hidden" }  relative flex justify-end md:hidden`}>
                <div onClick={() => {
                    setShowSmallScreenOptions(!showSmallScreenOptions);                    
                }} 
                className="w-[4rem] -mr-3 cursor-pointer" title='Menu' aria-label='Menu'>
                    <BsGrid3X3Gap  className='w-full text-actionBg text-[2.3rem]' />
                </div>
                <div className={`${!showSmallScreenOptions  && "hidden"} top-[100%] right-0 absolute  glassy-white border border-[#fff] rounded-xl p-2 text-[#fff]  flex  flex-col`}>                  
                        <button onClick={() => {
                            dispatch(setUploadPhotoModalStatus(true));
                        }} className='upload-button'>Upload</button>
                        <button onClick={() => {
                            dispatch(setUploadPhotoModalStatus(true));
                        }} className='deleted-gallery-button mt-4'>Deleted Gallery</button>
                </div>
            </div>

            <div className={`${!isLoginSuccess && "hidden"} w-full h-[15%]`}>
                <div className={` hidden h-full gap-2 md:flex w-full justify-end text-[#fff]  rounded-xl`}>
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

export default NavBar


// <div className="mobile px-8 md:px-16 flex w-full justify-end">            
//             <button
//                 // aria-label="Increment value"
//                 onClick={() => {
//                     dispatch(setLoginModalStatus(true));
//                 }}
//              className={`${isLoginSuccess && "hid den"} bg-red hover:brightness-90  rounded-xl px-6 py-2 text-[#fff]`}>Login</button>
//             <button
//                 // aria-label="Increment value"
//                 onClick={() => {
//                     router.replace("/");
//                     dispatch(signOut());
//                 }}
//              className={`${!isLoginSuccess && "hid den"} text-sm max-sm:px-4 max-sm:py-1 bg-red hover:brightness-90  rounded-xl px-6 py-2 text-[#fff]`}>Signout</button>
//         </div>


// 2
{/* <div className="mx-auto w-[12rem] sm:w-[14rem]">
                <Image alt='' width={100} height={100} priority src={Logo} className='w-full' />
            </div> */}

            // 3

{/* <div className={`${!isLoginSuccess && "hidden"}  mobile px-8 md:px-16 flex w-full justify-end text-[#fff]  rounded-xl`}>
    <button onClick={() => {
        dispatch(setUploadPhotoModalStatus(true));
    }} className='rounded-xl px-6 py-1 hover:brightness-90 bg-actionBg shadow-sm'>Upload</button>
    <button onClick={() => {
        dispatch(setUploadPhotoModalStatus(true));
    }} className='rounded-xl px-6 py-1 hover:brightness-90 bg-[#000] shadow-sm'>Deleted Gallery</button>
</div> */}
{/* <div className={`${!isModalOpen && "hidden"} absolute left-[50%] -translate-x-[50%] top-[30dvh] `}>

    <LoginModal />
</div> */}