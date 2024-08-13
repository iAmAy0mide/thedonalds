"use client";


import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Albums from '../Albums/Albums';
import { RootState } from '@/lib/features/store';
import UploadAlbumPhotosModal from "@/components/uploadAlbumPhoto/UploadAlbumPhotosModal";
import GalleryHomeBtns from '../Albums/GalleryHomeBtns';
import { updateAlbumPage } from '@/lib/features/store/newAlbum/newAlbum';


const GalleryPage = (props: { albums: IAlbumData[]; children: React.ReactNode; }) => {
  const [albums, setAlbums] = useState<IAlbumData[]>(props.albums);

  const updatedAlbums = useSelector((state: RootState) => state.updatedAlbums.updatedAlbums);

  const isCommentModalOpen = useSelector((state: RootState) => (state.modal.isCommentModalOpen));
  const isUploadAlbumPhotoModalOpen = useSelector((state: RootState) => (state.modal.isUploadPhotoModalOpen));
  // const dispatch = useDispatch();

  // console.log(updatedAlbums, 'from GPage');


  // useEffect(()=> {
  //   console.log("update worked!")
  // }, [randomString]);
 


  useEffect(() => {

    isCommentModalOpen || isUploadAlbumPhotoModalOpen
    ? (document.documentElement.style.overflow = 'hidden')
    : (document.documentElement.style.overflow = 'auto'); 
    
  }, [ isCommentModalOpen, isUploadAlbumPhotoModalOpen ]); 

  // useEffect(()=> {
  //   console.log("update worked!");
  //   console.log(updatedAlbums);
  //   dispatch(updateAlbumPage(albums));
  // }, [albums, updatedAlbums, dispatch]);

  // if (albums && albums.length > 0) {
  //   dispatch(updateAlbumPage(albums));
  // }

  // useEffect(() => {
  //   dispatch(updateAlbumPage(albums));
  // }, [dispatch, albums]);

  return (
    <main className='pt-[12rem] md:pt-[13rem] lg:pt-[14rem]  overflow-hidden -z-20 min-h-screen'>
      `<div className="mobile container relative mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 max-w-[1440px]  w-full justify-center">
          <Albums albums={updatedAlbums} renderButtons={GalleryHomeBtns} />
        </div>
      </div>     
      <div className={`${!isCommentModalOpen && "hidden"} absolute left-0 top-[10dvh] z-[600]`}>  
        {props.children}
      </div>
      <div className={`${!isUploadAlbumPhotoModalOpen && "hidden"} absolute left-0 top-[10dvh] z-[600]`}>  
        <UploadAlbumPhotosModal />
      </div>
    </main> 
  )
}


export default GalleryPage;


export const dynamic = "force-dynamic";