"use client";
import { useRef } from 'react';
import { addComment } from '@/app/action';



const CommentForm = ({ setFamComments }: IFormProp) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
      await addComment(formData);
      ref.current?.reset();

      const res = await fetch("/api/comments", { cache: "no-cache"});
      const data = await res.json();
      console.log(data, "from form"); 
      if (data.error) {
        alert("Sorry, An error occured. Please try again.");
      } else {
        setFamComments(() => [...data]);
      }
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

interface IFormProp {
  setFamComments: React.Dispatch<React.SetStateAction<{
    id: string;
    comment: string;
}[]>>
}