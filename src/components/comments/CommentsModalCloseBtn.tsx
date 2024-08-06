"use client"
import { setCommentModalStatus } from '@/lib/features/modal/modalSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const CommentsModalCloseBtn = () => {
    const dispatch = useDispatch();

  return (
    <button onClick={() => {
        dispatch(setCommentModalStatus(false));
      }} title='Close' aria-label='Close comment modal button' className="close-modal-button">Close</button>
  )
}

export default CommentsModalCloseBtn;
