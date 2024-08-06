"use client";

import { setUploadPhotoModalStatus } from "@/lib/features/modal/modalSlice";
import { useDispatch } from "react-redux";

const UploadAlbumPhotoCloseBtn = () => {
    const dispatch = useDispatch();

  return (
    <button onClick={() => {
        dispatch(setUploadPhotoModalStatus(false));
      }} title='Close' aria-label='Close upload modal button' className="close-modal-button">Close</button>
  )
}

export default UploadAlbumPhotoCloseBtn;
