"use client"

import React, { useEffect, useState } from 'react';

import Human from "/public/human.svg";
import Album from './Album';

import GalleryHomeBtns from "./GalleryHomeBtns";
import { formattedDate } from '@/utils/uploadthing';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/features/store';

const Albums: React.FC<IAlbumsProps> = ({ albums, renderButtons }) => {
  const [aAlbum, setAalbum] = useState<IAlbumData[]>(albums);
  // const updatedDeletedAlbums = useSelector((state: RootState) => state.updatedAlbums.updatedDeletedAlbums);

  // console.log(albums, "from alubum")
  // console.log(updatedAlbums, "from ups alubum")

  useEffect(() => {
    setAalbum(albums);
  }, [aAlbum, albums]);

  
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

export const dynamic = "force-dynamic";