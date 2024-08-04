"use client";
import useComments from '@/hooks/useComments';
import React from 'react'

const CommentButton = () => {
    const { comments, getAllComment } = useComments();

  return (
    <button onClick={() => {
        alert("CLicked");
        getAllComment();
        
    }} className='comment-form-button'>Comment</button>
  )
}

export default CommentButton;
