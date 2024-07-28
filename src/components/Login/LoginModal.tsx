"use client";
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const LoginModal = () => {
    const [isCorrectPassword, setIsCorrectPassword] = useState<boolean>(false);
    // const router = useRouter();

  return (
    <div className='glassy-white flex flex-col'>
      <div className="flex relative overflow-hidden h-[5rem] bg-blend-luminosity to-red">
        <label 
            htmlFor='name' 
            className="absolute"
        >Name</label>
        <input 
            type="text" 
            name="name" 
            id="name"
            className='w-full h-full'
         />
      </div>
      <div className="flex relative overflow-hidden h-[5rem] bg-blend-luminosity to-red">
        <label 
            htmlFor='password' 
            className="absolute"
        >Password</label>
        <input
            type="text" 
            name="password" 
            id="password"
            className='w-full h-full'
         />
      </div>
      <div className=""></div>
    </div>
  )
}

export default LoginModal
