import React from 'react'

const UploadAlbumForm = () => {
  

  return (
    <form className="flex flex-col sm:mt-6 ">
        <p className='text-[#fff] mb -1'>Album Name</p>
        <input type="text" name="album-name" id="album-name" className='h-9 px-2 rounded-md outline-none border-0 ' />
        <button className='upload-album-button'>Add Album</button>
    </form>
  )
}

export default UploadAlbumForm
