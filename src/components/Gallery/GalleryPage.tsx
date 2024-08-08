"use client";
import Album from '@/components/Albums/Album';
import UploadAlbumPhotosModal from "@/components/uploadAlbumPhoto/UploadAlbumPhotosModal";
import { RootState } from '@/lib/store';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';
import { useSelector } from 'react-redux';
import Albums from '../Albums/Albums';


const GalleryPage = (props: { album: any; children: React.ReactNode; }) => {
  const isCommentModalOpen = useSelector((state: RootState) => (state.modal.isCommentModalOpen));
  const isUploadAlbumPhotoModalOpen = useSelector((state: RootState) => (state.modal.isUploadPhotoModalOpen));

  console.log(props.album, "from Gallery")
  return (
    <main className='pt-[12rem] md:pt-[13rem] lg:pt-[14rem] rela tive overflow-hidden -z-20 min-h-screen'>
      `<div className="mobile container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 max-w-[1440px]  w-full justify-center">
          <Albums albums={props.album} />
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

// { children }: Readonly<{ children: React.ReactNode }>

export default GalleryPage;

