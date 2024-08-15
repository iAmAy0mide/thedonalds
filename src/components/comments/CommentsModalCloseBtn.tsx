"use client"
import { setCommentModalStatus } from '@/lib/features/store/modal/modalSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import CloseIcon from "/public/close_icon.svg";
import Close from "/public/close.svg";
import Image from "next/image";

const CommentsModalCloseBtn = () => {
    const dispatch = useDispatch();

  return (
    <button onClick={() => {
        dispatch(setCommentModalStatus(false));
      }} title='Close' aria-label='Close comment modal button' className=" close-modal-button">
        <Image
          width={100}
          height={100}
          src={Close}
          alt="Icon to close modal"
          className='w-full rounded-full  bg-actionBg  p-1'
        />
      </button>
  )
}

export default CommentsModalCloseBtn;
