import React, { useEffect, useState } from 'react';
import Album from './Album';
import Human from "/public/human.svg";
import { formattedDate } from '@/utils/uploadthing';

const Albums: React.FC<IAlbumsProps> = ({ albums }) => {
  const [aAlbum, setAalbum] = useState<IAlbumData[]>(albums)

  console.log(albums, "from alubum")

  useEffect(() => {

    (async function fert() {
      const res = await fetch("http://localhost:3000/api/album", { cache: "no-cache" }) 
      const album = await res.json();
      console.log(album, "from update");
      
      setAalbum(album);
    })
    console.log("albums updated...")
  }, [aAlbum])


  return (
    <>
      {
        aAlbum.map((album) => (
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
