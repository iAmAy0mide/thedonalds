"use client"

import React, { useEffect, useState } from 'react';

import Human from "/public/human.svg";
import Album from './Album';

import GalleryHomeBtns from "./GalleryHomeBtns";
import { formattedDate } from '@/utils/uploadthing';

const Albums: React.FC<IAlbumsProps> = ({ albums, renderButtons }) => {
  const [aAlbum, setAalbum] = useState<IAlbumData[]>(albums)

  console.log(albums, "from alubum")

  // useEffect(() => {
  //   setAalbum(albums)
  // }, [aAlbum, albums])

  // // Handle when data is 'undefined' . Re-renders when available
  // useEffect(()=> {

  // }, [aAlbum, albums]);
  
  // if (!albums) return;
  
  return (
    <>
      {
        aAlbum?.map((album) => (
            <Album 
                key={album._id} 
                albumId={album._id}
                albumName={album.albumName} 
                createdAt={formattedDate(album.createdAt)} 
                coverImage={album.album[0]?.image.url || Human} 
                renderButtons={() => renderButtons(album._id)}               
            />
        ))
      }
    </>
  )
}

export default Albums;



// useEffect(() => {

//   (async function fert() {
//     const res = await fetch("http://localhost:3000/api/album", { cache: "no-cache" }) 
//     const album = await res.json();
//     console.log(album, "from update");
    
//     setAalbum(album);
//   })
//   console.log("albums updated...")
// }, [aAlbum])