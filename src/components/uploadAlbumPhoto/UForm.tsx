import { addAlbum } from '@/app/action'
import React from 'react'

const UForm: React.FC<albumData> = ({album, albumName}) => {
    async function addAlbumPhoto() {
        "use server";
        await addAlbum({album, albumName})
    }

  return (
    <form action={addAlbumPhoto} className=''>
      <p className='text-[#fff] mb -1'>Album Name</p>
        <input type="text" required name="albumName" id="albumName" className='h-9 px-2 rounded-md outline-none border-0 ' />
        <button className='upload-album-button'>Add Album</button>
    </form>
  )
}

export default UForm;
