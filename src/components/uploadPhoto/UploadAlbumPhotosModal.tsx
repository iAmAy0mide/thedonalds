"use client";
import { setUploadPhotoModalStatus } from '@/lib/features/modal/modalSlice';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { Uploader } from '@/utils/uploadthing';
import { useState } from 'react';


const UploadAlbumPhotosModal = () => {
  const [isMaxUpload, setIsMaxUpload] = useState<boolean>(false);
  
  const dispatch = useDispatch();

  return (
    <Modal>
       <button onClick={() => {
        dispatch(setUploadPhotoModalStatus(false));
      }} title='Close' aria-label='Close upload modal button' className="close-modal-button">Close</button>
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
                <div className="w-[4rem] h-[4rem] bg-[#7B85E1] rounded-xl"></div>
                <div className="w-[4rem] h-[4rem] bg-[#1b3653] rounded-xl"></div>
                <div className="w-[4rem] h-[4rem] bg-[#EC032A] rounded-xl"></div>
              </div>
            </div>
            <div className="uploading-cont">
              <div className="rounded-xl flex justify-center items-center w-[18rem] h-[12rem] upload-container mb-2 mt-4 sm:mr-6">
                <div className={`w-full flex-1 cursor-pointer  h-full flex justify-center items-center`} onClick={() => {

                }}>
                  <Uploader 
                    className='bg-blu eBg  self-end w-full h-full basis-min-content'
                    appearance={{
                      button: {
                        padding: "13px 4px",
                        marginTop: "5px",
                        marginBottom: "-36px",
                        backgroundColor: "#04A998",
                        boxShadow: "3px 3px 3px rgba(255, 255, 255, 0.332)  inset, -3px -3px 3px rgba(255, 255, 255, 0.332) inset" 
                      },
                      uploadIcon: {
                        width: "6rem",
                        marginTop: "-50px",
                        
                      },
                      label: {
                        marginTop: "8px",
                        color: "#04A998",
                        fontSize: "16px"
                      },
                      allowedContent: {
                        color: "#ccc",
                      }
                    }}
                    endpoint='imageUploader'
                    onClientUploadComplete={(res) => {
                      console.log("Files", res); 
                      alert("Upload complete");                    
                    }}
                    onUploadError={(error: Error) => {
                      alert(`ERROR! ${error.message}` );
                    }}
                  />
                </div>
                  {/* <input hidden type="file" name="upload-image" id="upload-image" />
                  <label htmlFor='upload-image' className="text-[#fff] cursor-pointer brightness-110 glassy-blu bg-[#1b3 653] text-green rounded-3xl px-10 py-1 text-[1.2rem] ">Upload Photo</label> */}
              </div>
              <form className="flex flex-col sm:mt-6 ">
                <p className='text-[#fff] mb -1'>Album Name</p>
                <input type="text" name="album-name" id="album-name" className='h-8 px-2 w -[10rem] rounded-md outline-none border-0 ' />
                <button className='bg-actionBg green-3d-effect hover:brightness-95 duration-300 transition-all brightness-110 justify-self-start w-[6rem] mt-3 px-2 py-1  text-[#fff] rounded-md text-sm'>Add Album</button>
              </form>
            </div>
          
          </div>
        </div>
      </div>
   </Modal>

)
}
// </div>

export default UploadAlbumPhotosModal;
