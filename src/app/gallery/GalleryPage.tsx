"use client";
import Album from '@/components/Albums/Album';
import UploadAlbumPhotosModal from "@/components/uploadAlbumPhoto/UploadAlbumPhotosModal";
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';


const GalleryPage = ({ children }: Readonly<{
  children: React.ReactNode
}>) => {
  const isCommentModalOpen = useSelector((state: RootState) => (state.modal.isCommentModalOpen));
  const isUploadAlbumPhotoModalOpen = useSelector((state: RootState) => (state.modal.isUploadPhotoModalOpen));

  return (
    <main className='pt-[35dvh] lg:pt-[40dvh] rela tive overflow-hidden -z-20 min-h-screen'>
      `<div className="mobile container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 max-w-[1440px]  w-full justify-center">
          <Album />
          <Album />
          <Album />
          <Album />
          <Album />
        </div>
      </div>`      
      <div className={`${!isCommentModalOpen && "hidden"} absolute left-0 top-[10dvh] z-[600]`}>  
        {children}
      </div>
      <div className={`${!isUploadAlbumPhotoModalOpen && "hidden"} absolute left-0 top-[10dvh] z-[600]`}>  
        <UploadAlbumPhotosModal />
      </div>
    </main> 
  )
}

export default GalleryPage;

