"use client";
import { setCommentModalStatus } from '@/lib/features/modal/modalSlice';
import { Dispatch } from '@reduxjs/toolkit/react';
import React from 'react';
import { useDispatch } from 'react-redux';

const Button: React.FC = ({ }) => {
    const dispatch = useDispatch();
  return (
    <button onClick={() => {
        alert("CLosed comment")
        dispatch(setCommentModalStatus(false));
      }} title='Close' aria-label='Close comment modal button' className="close-modal-button">Close</button>
    // <button onClick={() => {
    //     dispatch(setCommentModalStatus(false));
    //   }} title='Close' aria-label='Close comment modal button' className="close-modal-button">Close</button>
  )
}

export default Button;


interface IModalFn {
    dispatchMtd: Dispatch;
}