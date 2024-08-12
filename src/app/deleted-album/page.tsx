// "use client";

import Albums from '@/components/Albums/Albums';
import DeletedGalleryPageBtn from '@/components/Albums/DeletedGalleryPageBtn';
import { useGetDeletedAlbumQuery } from '@/lib/features/api/albumApiSlice';
// import React, { useEffect } from 'react';


const DeletedGallery = async () => {
    // const { data: deletedAlbums, refetch } = useGetDeletedAlbumQuery(undefined, { refetchOnMountOrArgChange: true }); 
    const res = await fetch("http://localhost:3000/api/album/deleted-album", { cache: "no-cache" });
    const deletedAlbums = await res.json();
    // console.log(deletedAlbums, "from deleted")

    // useEffect(() => {
    //   async function fetg() {
    //     const res = await fetch("/api/album/deleted-album");
    //     const data = await res.json();

    //     console.log(data, "from page");
    //   }

    //   fetg()
    // }, []);
    
  return (
    <main className='pt-[12rem] md:pt-[13rem] lg:pt-[14rem] rela tive overflow-hidden -z-20 min-h-screen'>
      `<div className="mobile container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 max-w-[1440px]  w-full justify-center">
          <Albums albums={deletedAlbums} renderButtons={DeletedGalleryPageBtn}  />
        </div>
      </div>  
      
    </main>
  )
}

export default DeletedGallery;

export const dynamic = "force-dynamic";