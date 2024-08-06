import React from 'react'

const CommentFormBtn = () => {
  return (
    <button onClick={() => {
        setTimeout(() => {

        }, 300)
    }} className={`comment-form-button`}>Comment</button>
  )
}

export default CommentFormBtn
