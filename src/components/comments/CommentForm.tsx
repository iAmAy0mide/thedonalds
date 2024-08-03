import React from 'react'

const CommentForm = () => {
  return (
    <form className="comment-container-form">
        <textarea name="comment" id="comment" className='comment-form-input' />
        <div className="absolute border-red border-[2px] rounded-lg inset-1 -z-5"></div>
        <button className='comment-form-button'>Comment</button>
    </form>  
  )
}

export default CommentForm
