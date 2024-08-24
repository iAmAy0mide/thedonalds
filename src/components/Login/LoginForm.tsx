
import Image from "next/image";

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { signIn } from 'next-auth/react';

import { setLoginModalStatus } from '@/lib/features/store/auth/authSlice';
import GoogleLogo2 from "/public/logo_google.svg";
import Close from "/public/close.svg";

    
const LoginForm = () => {
  
    const router = useRouter();
    const dispatch = useDispatch();

  return (
    <div className='glassy-white -sm-menu relative border-[2px] border-[#ccc] min-w-[20rem] sm:min-w-[25rem] rounded-xl p-4 flex flex-col overflow-hidden'>
      <div className="absolute bg-[#fff] h-[120%] w-4 -rotate-45 left-4"></div>
      <div className="absolute bg-[#fff] h-[30rem] w-8 -top-20 rotate-50 right-[18%] sm:right-[24%]"></div>
      <div className="absolute bg-[#fff] h-[30rem] w-1 -top-20 rotate-50 right-[14%] sm:right-[21%]"></div>
      <button title="Close" onClick={() => dispatch(setLoginModalStatus(false))} className="absolute -right-3 -top-3 bg  pt-4 pb-2 pl-2 pr-4 rounded-full w-[3rem]  brightness-200 hover:brightness-150 transition-all duration-300">
        <Image 
          alt=""
          src={Close}
          width={100}
          height={100}
        />
      </button>
      <div className="flex w-full flex-col justify-center items-center pb-6">
        <p className='text-[2rem] font-bold text-[#ccc] mb-8 place-self-start'>Login</p>
        <div 
          onClick={async () => {
              dispatch(setLoginModalStatus(false));
              signIn('google', { callbackUrl: '/gallery' });            
          }} 
          className='px-10 relative  flex cursor-pointer glassy-green-login justify-between items-center text-[#fff] rounded-xl overflow-hidden mt-4 sm:mt-10'>
          <div className="absolute bg-[#fff] h-[6rem] w-4 -rotate-45 left-4"></div>
          <div className="w-[2.5rem]">
            <Image
              width={100}
              height={100}
              alt='google logo'
              src={GoogleLogo2}
            />
          </div> <p className='text-2xl -ml-1 login font-extrabold'>oogle</p> 
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