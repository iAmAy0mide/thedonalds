import React, { useEffect, useState } from 'react';

import Human from "/public/human.svg";
import Album from './Album';

import { formattedDate } from '@/utils/uploadthing';

const Albums: React.FC<IAlbumsProps> = ({ albums, renderButtons }) => {
  const [aAlbum, setAalbum] = useState<IAlbumData[]>(albums);

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