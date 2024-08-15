"use client";
import Modal from '../Modal';
import AlbumPhotoCarousel from '../Albums/AlbumPhotoCarousel';
import CommentsModalCloseBtn from './CommentsModalCloseBtn';
import CommentSection from './CommentSection';
import { RootState } from '@/lib/features/store';
import { useSelector } from 'react-redux';
import { AlbumContextProvider } from '@/hooks/AlbumContext';
// import CommentSection fro./Commentsion';
// import CommentSection from './CommentSection';


const CommentsModal = () => {

  const currentAlbumId: string = useSelector((state: RootState) => (state.comment.commentId));

  // console.log({currentAlbumId}, "from modal")
  
  return (
    
    <Modal>
      <CommentsModalCloseBtn /> 
      <AlbumContextProvider currentAlbumId={currentAlbumId}>
        <div className=" relative z-20 bg-greenBg   h-[85dvh] border-[4px] border-red rounded-xl px-4">
          <div className="h-full mt- w-full py-1  justify-center items-center gap -2 rounded-xl flex flex-col mx-auto">
              <AlbumPhotoCarousel />
              <CommentSection />
          </div>
        </div>  
      </AlbumContextProvider>
    </Modal>

  )
}

export default CommentsModal;