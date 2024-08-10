import CommentsFetch from './CommentsFetch';
import CommentForm from './CommentForm';
import React from 'react';

const CommentSection: React.FC = () => {
  return (
    <>
      <CommentsFetch />
      {/* <CommentForm /> */}
    </>
  )
}

export default CommentSection;

interface IT {
  currentAlbumId: string
}
