"use client";

import Albums from '@/components/Albums/Albums';
import DeletedGalleryPageBtn from '@/components/Albums/DeletedGalleryPageBtn';
import { useGetDeletedAlbumQuery } from '@/lib/features/api/albumApiSlice';
import { RootState } from '@/lib/features/store';
import { updateDeletedAlbums } from '@/lib/features/store/newAlbum/newAlbum';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "/public/spinner.gif";
import Image from "next/image";
import LoadingSpinner from '@/components/UI/LoadingSpinner';
// import React, { useEffect } from 'react';


const DeletedGallery =  () => {
    const { data: deletedAlbums, refetch } = useGetDeletedAlbumQuery(undefined, { refetchOnMountOrArgChange: true }); 
    // const res = await fetch("http://localhost:3000/api/album/deleted-album", { cache: "no-cache" });
    // const deletedAlbums = await res.json();
    // console.log(deletedAlbums, "from deleted");
    const updatedDeletedAlbum = useSelector((state: RootState) => state.updatedAlbums.updatedDeletedAlbums);
    const shouldUpdate = useSelector((state: RootState) => state.updatedAlbums.shouldUpdateDeletedPage);
    const dispatch = useDispatch();

    useEffect(() => {

      if (shouldUpdate) {
        dispatch(updateDeletedAlbums(deletedAlbums));
      }
    }, [deletedAlbums]);
    
  return (
    <>
      {
        !deletedAlbums ? (
          <LoadingSpinner />
        ) : !deletedAlbums[0] ? <h1 className='mx-auto text-[2rem] mt-[10rem] text-actionBg'>Currently empty</h1> : (
          <main className='pt-[12rem] md:pt-[13rem] lg:pt-[14rem] rela tive overflow-hidden -z-20 min-h-screen'>
            .<div className="mobile container mx-auto px-8 md:px-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 max-w-[1440px]  w-full justify-center"> 
                <Albums albums={updatedDeletedAlbum} renderButtons={DeletedGalleryPageBtn}  />
              </div>
            </div> 
          </main>
        )
      }
    </>
  )
}

export default DeletedGallery;

export const dynamic = "force-dynamic";