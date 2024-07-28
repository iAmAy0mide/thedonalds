"use client";
import { setLoginModalStatus } from '@/lib/features/auth/authSlice';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '@/lib/features/auth/authSlice';

const LoginModal = () => {
    const [isCorrectPassword, setIsCorrectPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("")
    const router = useRouter();
    const dispatch = useDispatch();
    // const navigate = 
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoginModalOpen);

  return (
    <div className='glassy-white w-[25rem] rounded-xl p-4 flex flex-col'>
      <p className='mb-4'>d0nalds</p>
      <div className="flex flex-col justify-between rounded-xl bg-[#77A8A3] px-4 py-2  mb-4 relative overflow-hidden h-[5rem] bg-blend-luminosity to-red">
        <label 
            htmlFor='name' 
            className=" text-[#fff] text-sm"
        >Name</label>
        <input 
            type="text" 
            name="name" 
            id="name"
            className='w-full h-[80%] text-[#022440] bg-[#77A8A3] outline-none border-0 mt-2'
         />
      </div>
      <div className="flex flex-col justify-between rounded-xl bg-[#77A8A3] px-4 py-2 relative overflow-hidden h-[5rem] bg-blend-luminosity to-red">
        <label 
            htmlFor='password' 
            className="text-[#fff] text-sm"
        >Password</label>
        <input
            type="text" 
            name="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full h-[80%] text-[#022440] bg-[#77A8A3] outline-none border-0 mt-2'
         />
      </div>
      <div className="flex w-full justify-end mt-4">
        <button 
          onClick={() => {
            if (password === "d0nalds") {
              dispatch(setLoginModalStatus(false));
              dispatch(setIsLoggedIn(true));
              router.replace("gallery");
              return
            } else {
              alert("Password is incorrect!")
            }
            
          }} 
          type="submit" 
          className='px-8 py-3 action text-[#fff] rounded-xl shadow-inner '>
        {/* <button type="submit" className='px-8 py-3 bg-actionBg text-[#fff] rounded-xl shadow-inner '> */}
          Login
        </button>
      </div>
      
    </div>
  )
}

export default LoginModal
