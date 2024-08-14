"use client"

import React from 'react'
import Image from "next/image";
import Recycle from "/public/recycle_icon.svg";
import DeleteIcon from "/public/DeleteIcon.svg";
import Caution3 from "/public/caution_2.svg";

import { useDeleteAlbumMutation, useRestoreAlbumMutation } from '@/lib/features/api/albumApiSlice';
import { useDispatch } from 'react-redux';
import { updateDeletedAlbumsFromBtn, updateShouldUpdateDeletedPageBol } from '@/lib/features/store/newAlbum/newAlbum';

const DeletedGalleryPageBtn = (albumId: string) => {
    const [ deleteAlbum ] = useDeleteAlbumMutation();
    const [ restoreAlbum ] = useRestoreAlbumMutation();
    const dispatch = useDispatch();

  return (
    <>
      <div className="flex w-full h-[28%] bg -red mb-1 justify-between pt-1">
        <div 
          onClick={() => {
            dispatch(updateShouldUpdateDeletedPageBol(false));
            dispatch(updateDeletedAlbumsFromBtn(albumId));
            restoreAlbum(albumId);
          }} 

          className="cursor-pointer flex bl-3d-effect hover:brightness-105 duration-300 transition-all rounded-xl danger2 w-[4rem] h-[3rem]  bg-greyBg items-center relative justify-center p-2">
          <Image 
            title='Restore Album' 
            aria-label='Restore Album' 
            width={100} 
            height={100} 
            className='w-full rounded-xl ' 
            src={Recycle} alt='Comment Icon' />
        </div>

        <div                    
          onClick={async () => {
            dispatch(updateShouldUpdateDeletedPageBol(false));
            dispatch(updateDeletedAlbumsFromBtn(albumId))
            const deletedAlbum = await deleteAlbum(albumId).unwrap();
          }}
          className="cursor-pointer flex bl-3d-effect hover:brightness-105 duration-300 transition-all rounded-xl danger2 w-[4rem] h-[3rem] bg-greyBg items-center relative justify-center p-2">
          <Image 
            title='Delete Album Permanently' 
            aria-label='Delete Album Permanently' 
            width={100} 
            height={100} 
            className='w-[2rem] h-[2rem] ' src={DeleteIcon} alt='Comment icon' />
            <div className="absolute w-[1.2rem] h-[1.2rem] top-1 right-2 ">
              <Image 
                title='Delete Album Permanently' 
                aria-label='Delete Album Permanently' 
                width={100} 
                height={100} 
                className='w-full' src={Caution3} alt='Caution or danger icon' />
            </div>
        </div>
      </div>
    </>
  )
}

export default DeletedGalleryPageBtn;
