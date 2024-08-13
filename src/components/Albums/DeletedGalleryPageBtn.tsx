"use client"

import React from 'react'
import Image from "next/image";
import CommentIcon from "/public/CommentIcon.svg";
import DeleteIcon from "/public/DeleteIcon.svg";

import { useDeleteAlbumMutation, useGetDeletedAlbumQuery, useRestoreAlbumMutation } from '@/lib/features/api/albumApiSlice';
import { useDispatch } from 'react-redux';
import { updateDeletedAlbumsFromBtn, updateShouldUpdateDeletedPageBol } from '@/lib/features/store/newAlbum/newAlbum';
// import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryActionCreatorResult, QueryDefinition } from '@reduxjs/toolkit/query/react';

const DeletedGalleryPageBtn = (albumId: string) => {
    const [ deleteAlbum ] = useDeleteAlbumMutation();
    const [ restoreAlbum ] = useRestoreAlbumMutation();
    const dispatch = useDispatch();
    // const {data, refetch} = useGetDeletedAlbumQuery(albumId, { refetchOnMountOrArgChange: true });

  return (
    <>
      <div className="flex w-full h-[28%] mb-1 justify-between pt-1">
                  <div 
                    onClick={() => {
                      console.log("restored", albumId);
                      dispatch(updateShouldUpdateDeletedPageBol(false));
                      dispatch(updateDeletedAlbumsFromBtn(albumId));
                      restoreAlbum(albumId);
                      // refetch();
                    }} 
                    className=" cursor-pointer flex items-center justify-center px-1 py-1 bg-blueBg">
                    <p>Restore</p>
                    {/* <Image 
                      title='Comments' 
                      width={100} 
                      height={100} 
                      className='w-[4rem] h-[3rem] bl-3d-effect hover:brightness-105 duration-300 transition-all cursor-pointer bg-greyBg  p-2 rounded-xl ' src={CommentIcon} alt='Comment Icon' /> */}
                  </div>

                  <div                    
                    onClick={async () => {
                        console.log("deleted", albumId);
                        // const url = `http://localhost:3000/api/album/delete?albumId=${albumId}`;
                        // const res = await fetch(url, {
                        //   method: "DELETE"
                        // });
                        // const data = await res.json();
                        // console.log(data, "from ")
                      dispatch(updateShouldUpdateDeletedPageBol(false));
                      dispatch(updateDeletedAlbumsFromBtn(albumId))
                      const deletedAlbum = await deleteAlbum(albumId).unwrap();
                      console.log(deletedAlbum, "from del btn")
                      // setTimeout(() => {
                      //   refetch();

                      // }, 7000);
                    }}
                    className="cursor-pointer flex items-center justify-center px-1 py-1 bg-blueBg">
                    {/* <Image 
                      title='Delete Album' 
                      aria-label='Delete Album' 
                      width={100} 
                      height={100} 
                      className='w-[4rem] h-[3rem] bl-3d-effect hover:brightness-105 duration-300 transition-all cursor-pointer bg-greyBg  p-2 rounded-xl danger ' src={DeleteIcon} alt='Comment Icon' /> */}
                    <p>Permanently</p>
                  </div>
              </div>
    </>
  )
}

export default DeletedGalleryPageBtn;
