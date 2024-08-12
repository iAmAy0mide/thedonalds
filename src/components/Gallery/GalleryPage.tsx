"use client";


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Albums from '../Albums/Albums';
import { RootState } from '@/lib/features/store';
import UploadAlbumPhotosModal from "@/components/uploadAlbumPhoto/UploadAlbumPhotosModal";
import GalleryHomeBtns from '../Albums/GalleryHomeBtns';


const GalleryPage = (props: { albums: IAlbumData[]; children: React.ReactNode; }) => {
  const [albums, setAlbums] = useState<IAlbumData[]>(props.albums);
  const newAlbum = useSelector((state: RootState) => state.newAlbum.newAlbum);
  const isCommentModalOpen = useSelector((state: RootState) => (state.modal.isCommentModalOpen));
  const isUploadAlbumPhotoModalOpen = useSelector((state: RootState) => (state.modal.isUploadPhotoModalOpen));



  const [shouldRender, setShouldRender] = useState(false);

  console.log(newAlbum, 'from GPage');

  // useEffect(() => {
  //   let newA = newAlbum;
  //   if (newA.length > 0) {
  //         // setAlbums(newAlbum);
  //         setAlbums((prevAlbums) => [...prevAlbums, ...newAlbum]);
  //         console.log("rasnsncn here");
          

  //       newA = [];
  //     }
  // });

  // useEffect(() => {
  //   // if (newAlbum.length > 0) {
  //     setAlbums(newAlbum);
  //     // setAlbums((prevAlbums) => [...prevAlbums, ...newAlbum]);
  //     console.log("rasnsncn here");
      
  //     setShouldRender(true);
  //   // }
  // }, [newAlbum]);

  // useEffect(() => {
  //   // if (shouldRender) {
  //   //   setShouldRender(false);
  //   // }
  // }, [shouldRender]);

  // console.log(newAlbum, "from GPage");
  
  useEffect(() => {
    setAlbums(prevAlbums => {
      const al = [...prevAlbums, ...newAlbum];
      console.log({al})

      return [...prevAlbums, ...newAlbum]
    });
  }, [newAlbum]);
// console.log(newAlbum, "from GPage effect");
// console.log("Updated album...")

  // const currentAlbumId: string = useSelector((state: RootState) => state.comment.commentId);
  // console.log({currentAlbumId}, "from gall")

  useEffect(() => {

    isCommentModalOpen || isUploadAlbumPhotoModalOpen
    ? (document.documentElement.style.overflow = 'hidden')
    : (document.documentElement.style.overflow = 'auto'); 
    
  }, [ isCommentModalOpen, isUploadAlbumPhotoModalOpen ]); 


  return (
    <main className='pt-[12rem] md:pt-[13rem] lg:pt-[14rem] rela tive overflow-hidden -z-20 min-h-screen'>
      `<div className="mobile container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 max-w-[1440px]  w-full justify-center">
          <Albums albums={albums} renderButtons={GalleryHomeBtns} />
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