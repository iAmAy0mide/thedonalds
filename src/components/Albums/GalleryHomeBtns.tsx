"use client";

import DeleteIcon from "/public/DeleteIcon.svg";
import CommentIcon from "/public/CommentIcon.svg";

import Image from "next/image";
import { useDispatch } from 'react-redux';
import { useMoveAlbumToDeletedMutation } from "@/lib/features/api/albumApiSlice";
import { updateCurrentAlbumCommentId } from '@/lib/features/store/commentId/commentId';
import { setCommentModalStatus, setUploadPhotoModalStatus } from '@/lib/features/store/modal/modalSlice';
import { updateAlbumPage, updateAlbumPageFromDeleteBtn, updateShouldUpdateBol } from "@/lib/features/store/newAlbum/newAlbum";


const GalleryHomeBtns = (albumId: string) => {
    const dispatch = useDispatch();
    const [ moveAlbumToDeleted ] = useMoveAlbumToDeletedMutation();
    

    return (
      <>
        <div className="flex w-full h-[28%] mb-1 justify-between pt-1">
          <Image onClick={() => {
              dispatch(setCommentModalStatus(true));
              dispatch(updateCurrentAlbumCommentId(albumId));
          }} title='Comments' width={100} height={100} className='w-[4rem] h-[3rem] bl-3d-effect hover:brightness-105 duration-300 transition-all cursor-pointer bg-greyBg  p-2 rounded-xl ' src={CommentIcon} alt='Comment Icon' />
          <Image onClick={async() => {
            // console.log("Moved to deleted")
            dispatch(updateAlbumPageFromDeleteBtn({ deleteClicked: true, albumId }));
            dispatch(updateShouldUpdateBol(false));
            const result = await moveAlbumToDeleted(albumId).unwrap();
            // console.log(result);
          }} title='Delete Album' aria-label='Delete Album' width={100} height={100} className='w-[4rem] h-[3rem] bl-3d-effect hover:brightness-105 duration-300 transition-all cursor-pointer bg-greyBg  p-2 rounded-xl danger ' src={DeleteIcon} alt='Comment Icon' />
        </div>
      </>
    )
  }

export default GalleryHomeBtns;
