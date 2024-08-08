import React from 'react';
import Album from './Album';
import Human from "/public/human.svg";
import { formattedDate } from '@/utils/uploadthing';

const Albums: React.FC<IAlbumsProps> = ({ albums }) => {


  return (
    <>
      {
        albums.map((album) => (
            <Album 
                key={album._id} 
                albumId={album._id}
                albumName={album.albumName} 
                createdAt={formattedDate(album.createdAt)} 
                coverImage={album.album[0]?.image.url || Human}                
            />
        ))
      }
    </>
  )
}

export default Albums;
