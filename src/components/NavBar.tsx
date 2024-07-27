import React from 'react'
import Image from "next/image";
import Logo from "/public/Logo.svg"
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='w-full h-[20rem] flex flex-col  mx-auto fixed top-0 pt-4 bg-mainB'>
        <div className="mobile px-8 md:px-16 flex w-full justify-end">            
            <button className='bg-authBg  rounded-sm px-8 py-3 text-[#fff]'>Login</button>
        </div>
        <div className=" mobile px-8 md:px-16 w-full h-full jus justify-center -mt-10 items-end flex flex-col">
            <div className="mx-auto w-[14rem]">
                <Image alt='' width={100} height={100} src={Logo} className='w-full' />
            </div>
        </div>
      
    </nav>
  )
}

export default NavBar
