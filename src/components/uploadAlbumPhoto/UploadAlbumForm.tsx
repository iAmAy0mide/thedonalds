import React, { Dispatch, SetStateAction } from 'react';

const UploadAlbumForm: React.FC<IUProp> = ({setAlbumPhotos}) => {
  

  return (
    <form action={} className="flex flex-col sm:mt-6 ">
        <p className='text-[#fff] mb -1'>Album Name</p>
        <input type="text" name="album-name" id="album-name" className='h-9 px-2 rounded-md outline-none border-0 ' />
        <button className='upload-album-button'>Add Album</button>
    </form>
  )
}

export default UploadAlbumForm;

interface IUProp {
  setAlbumPhotos: Dispatch<SetStateAction<IUploadedImage[]>>
}
