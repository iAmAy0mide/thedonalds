import React from 'react';
import CommentIcon from "/public/CommentIcon.svg";
import DeleteIcon from "/public/DeleteIcon.svg";
import Human from "/public/human.svg"
import AlbumFolderIcon from "/public/AlbumFolderIcon.svg";
import Image from 'next/image';
import { Alex_Brush } from 'next/font/google';

const Album: React.FC = () => {
  return (
    <div className='relative w-[20rem] h-[25rem]' style={{ backgroundImage: ` ${Human.src}`}}>
        <div className="absolute inset-0 bg-albumOverlay">
            <div className="flex flex-col w-full "></div>
            <div className="flex w-full justify-between">
                <div className="bg-greyBg rounded-xl p-2 w-10">
                    <Image width={100} height={100} src={CommentIcon} alt='Comment Icon' />
                </div>
                <div className="bg-greyBg rounded-xl p-2 w-10">
                    <Image width={100} height={100} src={DeleteIcon} alt='Comment Icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Album;
