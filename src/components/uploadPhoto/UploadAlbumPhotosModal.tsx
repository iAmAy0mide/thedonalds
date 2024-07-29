import React from 'react';

const UploadAlbumPhotosModal = () => {
  return (
    <div className={`w-[100dvw] px-4 pt-4 mx-auto relative h-[90dvh]`}>
        <div className="absolute inset-0 glassy-green  z-[5]"></div>
        <div className=" relative z-20 bg-greenBg  h-[85dvh] border-[4px] border-red rounded-xl px-4">
          <div className="sm:max-w-[35rem]  w-full h-full flex flex-col justify-center items-center  border border-red  mx-auto ">

            <div className="flex flex-col sm:flex-r ow gap-0">

              <div className="flex flex-wrap overflow-scr oll  border border-red max-w-full w-full ">
                {/* <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div> */}
                <div className="flex flex-wrap gap-2 w-full overflow-y-scroll max-h-[8rem]">
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                  <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row  mx-auto ">
                <div className="rounded-xl flex justify-center items-center w-[18rem] h-[12rem] bg-[#7B 85E1] glassy-blue-gradient mb-2 mt-6 ">
                    <p className="text-[#fff] shadow brightness-110  shadow-[#fff] glassy-blu bg-actionBg rounded-3xl px-10 py-1 text-[1.5rem] ">Upload Photo</p>
                </div>
                <div className="flex flex-col sm:mt-6 ">
                  <p className='text-[#fff] mb -1'>Album Name</p>
                  <input type="text" name="album-name" id="album-name" className='h-8 px-2 w -[10rem] rounded-md outline-none border-0 ' />
                  <button className='bg-actionBg brightness-110 justify-self-start w-[6rem] mt-4 px-2 py-1  text-[#fff] rounded-md text-sm'>Add Album</button>
                </div>
              </div>
            
            </div>
          </div>
        </div>
    </div>
  )
}

export default UploadAlbumPhotosModal;
