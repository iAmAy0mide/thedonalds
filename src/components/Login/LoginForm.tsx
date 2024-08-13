import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModalStatus } from '@/lib/features/store/auth/authSlice';
import { signIn } from 'next-auth/react';
import Image from "next/image";
import Star from "/public/Star.svg";
import GoogleLogo from "/public/google-logo.webp"

    
const LoginForm = () => {
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const dispatch = useDispatch();

  return (
    <div className='glassy-white-sm-menu glassy-whit e-sm-menu backdrop-brightness-105 border-[2px] relative border-[#ccc] max -w-[25rem] min-w-[20rem] sm:min-w-[25rem] rounded-xl p-4 flex flex-col'>
   
      <div className="flex w-full flex-col justify-center items-center ">
        {/* <div 
          onClick={() => {
              dispatch(setLoginModalStatus(false));
              signIn("google")
            
          }} 
          className='px-8 py-3 flex mb-4 action text-[#fff] rounded-xl shadow-inner '>
           <div className="w-[2rem]">
            <Image
              width={100}
              height={100}
              alt=''
              src={Star}
              className=''
            />
          </div> <p>Google</p> 
        </div> */}
        <div 
          onClick={() => {
              dispatch(setLoginModalStatus(false));
              signIn("google")
            
          }} 
          className='px-8 py-3 flex action justify-between w-f text-[#fff] rounded-xl'>
          <div className="w-[4rem] mr-4">
            <Image
              width={100}
              height={100}
              alt=''
              src={GoogleLogo}
              className=''
            />
          </div> <p>Github</p> 
        </div>
      </div>
      
    </div>
  )
}

export default LoginForm

   {/* <p className='mb-4'>d0nalds</p> */}
      {/* <div className="flex flex-col input-shadow justify-between rounded-xl bg-[#77A8A3] px-4 py-2  mb-4 relative overflow-hidden h-[5rem] bg-blend-luminosity to-red">
        <label 
            htmlFor='name' 
            className=" text-[#fff] text-sm"
        >Name</label>
        <input 
            type="text" 
            name="name" 
            id="name"
            className='w-full h-[80%]  text-[#022440] px-2 rounded-xl bg-[#77A8A3] outline-none border-0 mt-2'
         />
      </div>  */}
      {/* <div className="flex flex-col input-shadow justify-between rounded-xl bg-[#77A8A3] px-4 py-2 relative overflow-hidden h-[5rem] bg-blend-luminosity to-red">
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
            className='w-full h-[80%]  text-[#022440] px-2 rounded-xl bg-[#77A8A3] outline-none border-0 mt-2'
         />
      </div> */}