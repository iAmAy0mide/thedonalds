"use client";
import { setUploadPhotoModalStatus } from '@/lib/features/modal/modalSlice';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';


const UploadAlbumPhotosModal = () => {
  const dispatch = useDispatch();

  return (
    <Modal>
       {/* <button onClick={() => {
        dispatch(setUploadPhotoModalStatus(false));
      }} title='Close' aria-label='Close comment modal button' className="close-modal-button">Close</button> */}
      <div className=" relative z-20 bg-greenBg  h-[85dvh] border-[4px] border-red rounded-xl px-4">
        <div className="sm:max-w-[35rem]  w-full h-full flex justify-center items-center  mx-auto ">

          <div className="flex flex-col basis-min-content sm:flex-r ow gap-0 items-center">
            <div className="flex max-w-full  w-full h-auto">
              {/* <div className="w-[5rem] h-[4rem] bg-actionBg rounded-xl mr-2"></div> */}
              <div className="flex flex-wrap  gap-2 w-full">
                <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
                <div className="w-[4rem] h-[4rem] bg-actionBg rounded-xl"></div>
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
              <div className="rounded-xl flex justify-center items-center w-[18rem] h-[12rem] bg-[#7B85E1]  mb-2 mt-4 sm:mr-6 ">
                  <p className="text-[#fff] brightness-110 glassy-blu bg-[#1b3653] rounded-3xl px-10 py-1 text-[1.2rem] ">Upload Photo</p>
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
   </Modal>

)
}
// </div>

export default UploadAlbumPhotosModal;
