import React from 'react'
import { addComment } from '@/app/action';


const CommentForm = () => {

  return (
    <form action={addComment} className="comment-container-form">
        <textarea name="comment" required id="comment" className='comment-form-input' />
        <div className="absolute border-red border-[2px] rounded-lg inset-1 -z-5"></div>
        <button className='comment-form-button'>Comment</button>
    </form>  
  )
}

export default CommentForm;
