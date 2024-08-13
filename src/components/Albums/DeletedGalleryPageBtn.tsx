"use client"

import React from 'react'
import Image from "next/image";
import PermDel from "/public/perm-delete.svg";
import Restore from "/public/restore-illust.svg";

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
            // console.log("restored", albumId);
            dispatch(updateShouldUpdateDeletedPageBol(false));
            dispatch(updateDeletedAlbumsFromBtn(albumId));
            restoreAlbum(albumId);
          }} 

          className=" cursor-pointer rounded-xl flex items-center justify-center">
          <Image 
            title='Restore Album' 
            aria-label='Restore Album' 
            width={100} 
            height={100} 
            className='w-[4rem] h-[3rem] bl-3d-effect hover:brightness-105 duration-300 transition-all cursor-pointer bg-greyBg rounded-xl ' src={Restore} alt='Comment Icon' />
        </div>

        <div                    
          onClick={async () => {
            // console.log("deleted", albumId);
            dispatch(updateShouldUpdateDeletedPageBol(false));
            dispatch(updateDeletedAlbumsFromBtn(albumId))
            const deletedAlbum = await deleteAlbum(albumId).unwrap();
            // console.log(deletedAlbum, "from del btn")
          }}
          className="cursor-pointer flex items-center justify-center">
          <Image 
            title='Delete Album Permanently' 
            aria-label='Delete Album Permanently' 
            width={100} 
            height={100} 
            className='w-[4rem] h-[3rem] bl-3d-effect hover:brightness-105 duration-300 transition-all cursor-pointer bg-greyBg rounded-xl danger2 ' src={PermDel} alt='Comment Icon' />
        </div>
      </div>
    </>
  )
}

export default DeletedGalleryPageBtn;
