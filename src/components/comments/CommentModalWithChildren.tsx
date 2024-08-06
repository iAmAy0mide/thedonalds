import React from 'react'
import CommentsModal from './CommentsModal';
import CommentSection from './Comments';
import AlbumPhotoCarousel from '../Albums/AlbumPhotoCarousel';

const CommentModalWithChildren = () => {
  return (
    <CommentsModal>
        {/* <AlbumPhotoCarousel />
        <CommentSection /> */}
    </CommentsModal>
  )
}

export default CommentModalWithChildren;
// const CommentModalWithChildren = ({AlbumPhotoCarousel,
//     CommentSection}: ICMWC) => {
//   return (
//     <CommentsModal>
//         <AlbumPhotoCarousel />
//         <CommentSection />
//     </CommentsModal>
//   )
// }

// export default CommentModalWithChildren;

interface ICMWC {
    CommentSection:  () => JSX.Element;
    AlbumPhotoCarousel:  () => JSX.Element;
}
