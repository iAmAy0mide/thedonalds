import React from 'react'
import { addComment } from '@/app/action';
import CommentButton from './CommentButton';
import useComments from '@/hooks/useComments';


const CommentForm = () => {
  const { comments, getAllComment } = useComments();
  function h() {
    setTimeout(() => {

      alert("Time Up");
      
      getAllComment();
    }, 1000);
  }
  return (
    <form onSubmit={h} action={addComment} className="comment-container-form">
        <textarea name="comment" required id="comment" className='comment-form-input' />
        <div className="absolute border-red border-[2px] rounded-lg inset-1 -z-5"></div>
        {/* <CommentButton /> */}
        <button className='comment-form-button'>Comment</button>
    </form>  
  )
}

export default CommentForm;
