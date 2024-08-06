import Modal from '../Modal';
import AlbumPhotoCarousel from '../Albums/AlbumPhotoCarousel';
import CommentsModalCloseBtn from './CommentsModalCloseBtn';
import CommentSection from './CommentSection';
// import CommentSection fro./Commentsion';
// import CommentSection from './CommentSection';


const CommentsModal = () => {
  
  return (
    
    <Modal>
      <CommentsModalCloseBtn /> 
      <div className=" relative z-20 bg-greenBg   h-[85dvh] border-[4px] border-red rounded-xl px-4">
        <div className="h-full mt- w-full  justify-center items-center gap -2 rounded-xl flex flex-col mx-auto">
            <AlbumPhotoCarousel />
            <CommentSection />
        </div>
      </div>  
    </Modal>

  )
}

export default CommentsModal;