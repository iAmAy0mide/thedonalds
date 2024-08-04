"use client";

import {FormEvent, useState, useActionState} from 'react';
import { addComment } from '@/app/action';
import CommentButton from './CommentButton';
import useComments from '@/hooks/useComments';



const CommentForm = () => {
  const { getAllComments } = useComments();
  const [comment, setComment] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    if (res.ok) {
      setComment("");
      getAllComments();
    }
  }
  return (
    <form onSubmit={handleSubmit} className="comment-container-form">
        <textarea 
          name="comment" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} required id="comment" className='comment-form-input' />
        <div className="absolute border-red border-[2px] rounded-lg inset-1 -z-5"></div>
        <button className='comment-form-button'>Comment</button>
    </form>  
  )
}

export default CommentForm;
// const CommentForm = () => {
//   const { comments, getAllComment } = useComments();
//   function h() {
//     setTimeout(() => {

//       // alert("Time Up");
      
//       getAllComment();
//     }, 1000);
//   }
//   return (
//     <form onSubmit={h} action={addComment} className="comment-container-form">
//         <textarea name="comment" required id="comment" className='comment-form-input' />
//         <div className="absolute border-red border-[2px] rounded-lg inset-1 -z-5"></div>
//         {/* <CommentButton /> */}
//         <button className='comment-form-button'>Comment</button>
//     </form>  
//   )
// }

// export default CommentForm;
