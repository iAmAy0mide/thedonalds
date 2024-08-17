"use client";

import { setUploadPhotoModalStatus } from "@/lib/features/store/modal/modalSlice";
import { useDispatch } from "react-redux";
import Close from "/public/close.svg";
import Image from "next/image";

const UploadAlbumPhotoCloseBtn = () => {
    const dispatch = useDispatch();

  return (
    <button onClick={() => {
      dispatch(setUploadPhotoModalStatus(false));
    }} title='Close' aria-label='Close comment modal button' className=" close-modal-button">
      <Image
        width={100}
        height={100}
        src={Close}
        alt="Icon to close modal"
        className='w-full rounded-full  h-full bg-actionBg  p-1'
      />
    </button>
  )
}

export default UploadAlbumPhotoCloseBtn;
