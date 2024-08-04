import { useState } from 'react';
import Image from "next/image";

import Modal from '../Modal';
import { Uploader } from '@/utils/uploadthing';
import UploadAlbumForm from './UploadAlbumForm';

import { useDispatch } from 'react-redux';
import { setUploadPhotoModalStatus } from '@/lib/features/modal/modalSlice';


const UploadAlbumPhotosModal = () => {
  const [albumPhotos, setAlbumPhotos] = useState<IUploadedImage[]>([
    {
      name: "",
      url: ""
    }
  ]);
  
  const dispatch = useDispatch();
  

  return (
    <Modal>
       <button onClick={() => {
        dispatch(setUploadPhotoModalStatus(false));
      }} title='Close' aria-label='Close upload modal button' className="close-modal-button">Close</button>
      <div className=" relative z-20 bg-greenBg  h-[85dvh] border-[4px] border-red rounded-xl px-4">
        <div className="sm:max-w-[35rem]  w-full h-full flex justify-center items-center  mx-auto ">

          <div className="flex flex-col basis-min-content transition-all duration-500 sm:flex-r ow gap-0 items-center">
            <div className="flex max-w-full  w-full h-auto max-h-[13rem] md:max-h-[16rem] overflow-hidden">
              <div className="flex flex-wrap  gap-2 w-full">
                
               {                
                albumPhotos.map(photo => (
                  photo.name && photo.url ?
                  (<div key={photo.name} className="w-[4rem] h-[4rem] border-[2px] border-deepBlue rounded-xl">
                    <Image className='w-full h-full rounded-xl' width={100} height={100} alt={photo.name} src={photo.url} />
                  </div>) : null
                ))
               }
              </div>
            </div>
            <div className="uploading-cont">
              <div className="rounded-xl flex justify-center items-center w-[18rem] h-[12rem] bg-deepBlue mb-2 mt-3 sm:mr-6">
                <div onClick={() => {
                  return
                }} className={`w-full flex-1 cursor-pointer h-full flex justify-center items-center`}>
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
                      const name = res[0].name;
                      const url = res[0].url;                   
                      setAlbumPhotos((prevState) => [...prevState, {name, url}]);
                    }}
                    onUploadError={(error: Error) => {
                      alert(`ERROR! ${error.message}` );
                    }}
                  />
                </div>
                  {/* <input hidden type="file" name="upload-image" id="upload-image" />
                  <label htmlFor='upload-image' className="text-[#fff] cursor-pointer brightness-110 glassy-blu bg-[#1b3 653] text-green rounded-3xl px-10 py-1 text-[1.2rem] ">Upload Photo</label> */}
              </div>
              <UploadAlbumForm albumPhotos={albumPhotos} setAlbumPhotos={setAlbumPhotos} />
            </div>
          
          </div>
        </div>
      </div>
   </Modal>

)
}
// </div>

export default UploadAlbumPhotosModal;
