import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '@/lib/features/auth/authSlice';
import { setLoginModalStatus } from '@/lib/features/auth/authSlice';

    
const LoginForm = () => {
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const dispatch = useDispatch();

  return (
    <div className='glassy-white border relative border-[#ccc] max -w-[25rem] min-w-[20rem] sm:min-w-[25rem] rounded-xl p-4 flex flex-col'>
      <p className='mb-4'>d0nalds</p>
      <div className="flex flex-col input-shadow justify-between rounded-xl bg-[#77A8A3] px-4 py-2  mb-4 relative overflow-hidden h-[5rem] bg-blend-luminosity to-red">
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
      </div> 
      <div className="flex flex-col input-shadow justify-between rounded-xl bg-[#77A8A3] px-4 py-2 relative overflow-hidden h-[5rem] bg-blend-luminosity to-red">
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
      </div>
      <div className="flex w-full justify-end mt-4">
        <button 
          onClick={() => {
            if (password === "d0nalds") {
              dispatch(setLoginModalStatus(false));
              dispatch(setIsLoggedIn(true));
              router.push("gallery");
              return
            } else {
              alert("Password is incorrect!")
            }
            
          }} 
          type="submit" 
          className='px-8 py-3 action text-[#fff] rounded-xl shadow-inner '>
          Login
        </button>
      </div>
      
    </div>
  )
}

export default LoginForm
