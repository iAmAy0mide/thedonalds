"use client";
import {FormEvent, useState, useActionState, useRef} from 'react';
import { addComment } from '@/app/action';
import { getComments } from '@/app/action';
import CommentButton from './CommentButton';
import useComments from '@/hooks/useComments';
import { useDispatch } from 'react-redux';
import { setCommentModalStatus } from '@/lib/features/modal/modalSlice';



const CommentForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  // const [state, action, isPending] = useActionState(addComment, null);
  // const { getAllComments } = useComments();
  // const [comment, setComment] = useState<string>("");

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const res = await fetch("/api/comments", {
  //     method: "POST",
  //     body: JSON.stringify(comment),
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   });
    
  //   if (res.ok) {
  //     setComment("");
  //     getAllComments();
  //   }
  // }

  const handleSubmit = async (formData: FormData) => {
      await addComment(formData);
      ref.current?.reset();
      setTimeout(async () => {
        
        // dispatch(setCommentModalStatus(false));
        const res = await fetch("/api/comments", { cache: "no-cache"});
        const parsedRes = await res.json()
        const data = parsedRes[0]
        console.log(parsedRes);
        
        alert("sub")
      }, 300)
  }

  return (
    <form ref={ref} action={handleSubmit} className="comment-container-form">
        <textarea 
          name="comment" 
          required id="comment" 
          className='comment-form-input' />
        <div className="absolute border-red border-[2px] rounded-lg inset-1 -z-5"></div>
        <button className={`comment-form-button`}>Comment</button>
    </form>  
  )
}

export default CommentForm;

interface IForm {
  formData: FormData
}