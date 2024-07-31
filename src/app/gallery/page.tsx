"use client";
import Album from '@/components/Albums/Album';
import CommentsModal from "@/components/comments/CommentsModal";
import UploadAlbumPhotosModal from "@/components/uploadPhoto/UploadAlbumPhotosModal";
import { RootState } from '@/lib/store';
import { useDispatch, useSelector } from 'react-redux';

const Gallery = () => {
  const isCommentModalOpen = useSelector((state: RootState) => (state.modal.isCommentModalOpen));
  const isUploadAlbumPhotoModalOpen = useSelector((state: RootState) => (state.modal.isUploadPhotoModalOpen));

  return (
    <main className='pt-[50dvh] -z-20  relat ive overflow-hidden border border-red'>
      `<div className="mobile container mx-auto px-8 md:px-16">
        <div className="flex gap-4 flex-wrap border border-red">
          <Album />
          {/* <div className="mx-auto"> */}
          <Album />

          {/* </div> */}
          <Album />
          <Album />
          <Album />
        </div>
      </div>`      
      <div className={`${!isCommentModalOpen && "hidden"} absolute left-0 top-[10dvh] z-[600]`}>  
        <CommentsModal />
      </div>
      <div className={`${!isUploadAlbumPhotoModalOpen && "hi dden"} absolute left-0 top-[10dvh] z-[600]`}>  
        <UploadAlbumPhotosModal />
      </div>
    </main>
  )
}

export default Gallery;
