import Album from '@/components/Albums/Album';
import CommentsModal from "@/components/comments/CommentsModal"
import UploadAlbumPhotosModal from "@/components/uploadPhoto/UploadAlbumPhotosModal";
import React from 'react'

const Gallery = () => {
  return (
    <main className='pt-[50dvh] -z-20 mobile container mx-auto px-8 md:px-16'>
      <div className="flex gap-4 flex-wrap">
        <Album />
        {/* <div className="mx-auto"> */}
        <Album />

        {/* </div> */}
        <Album />
        <Album />
        <Album />
      </div>
      <div className="absolute left-0 top-[10dvh] z-[600]">  
        <CommentsModal />
      </div>
      <div className="absolute left-0 top-[10dvh] z-[600]">  
        {/* <UploadAlbumPhotosModal /> */}
      </div>
    </main>
  )
}

export default Gallery;
