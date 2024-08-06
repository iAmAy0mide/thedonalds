"use client";
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';

// @ts-ignore
const UploadAlbumForm: any = ({setAlbumPhotos, albumPhotos}) => {
  const [albumName, setAlbumName] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();



    const albumData = {
      albumName,
      album: albumPhotos
        .filter((photo: IUploadedImage) => photo.name !== "" && photo.url !== "")
        .map((photo: IUploadedImage) => ({ image: { url: photo.url } }))    
    }

    console.log(albumData.album);
    try {
      const res = await fetch("/api/album", {
        method: "POST",
        body: JSON.stringify(albumData),
        headers: {
          "Content-Type": "application/json"
        }
      });

      setAlbumPhotos([{
        name: "",
        url: ""
      }]);
      setAlbumName("");      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:mt-6 ">
        <p className='text-[#fff] text-lg -mb-1'>Album Name</p>
        <input type="text" value={albumName} onChange={(e) => setAlbumName(e.target.value)} required name="albumName" id="albumName" className='h-9 px-2 rounded-md outline-none border-0 ' />
        <button className='upload-album-button'>Create Album</button>
    </form>
  )
}

export default UploadAlbumForm;
