import Image from 'next/image';

import Human from "/public/human.svg";
import CommentIcon from "/public/CommentIcon.svg";
import DeleteIcon from "/public/DeleteIcon.svg";
import AlbumFolderIcon from "/public/AlbumFolderIcon.svg";

import { useDispatch } from 'react-redux';
import { setCommentModalStatus, setUploadPhotoModalStatus } from '@/lib/features/modal/modalSlice';

interface IAlbumProps {
    albumId: String;
    albumName: string;
    createdAt: string;
    coverImage: string
}

const Album: React.FC<IAlbumProps> = ({ albumName, createdAt, coverImage, albumId }) => {
    const dispatch = useDispatch();

    return (
        <div className='relative border bg-[#394c4c] border-deepBlue text-[#fff]  flex flex-col  overflow-hidden h-[18rem]  rounded-xl' >
            <div className="rounded-xl relative  h-[82%]" style={{ backgroundImage: `url(${coverImage})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="absolute bg-albumOverlay rounded-xl  inset-0 z-[5] "></div>
                <div className="flex relative flex-col h-full w-full z-20  p-2">
                    <div className="w-[17em] ">
                        <Image
                            width={100}
                            height={100}
                            src={AlbumFolderIcon}
                            alt='Album Folder Icon'
                            className='w-full'
                        />
                    </div>
                    <div className="absolute bottom-1 glassy-blue px-2 py-4 rounded-xl">
                        <p className="date">{createdAt}</p>
                        <p className="c">{albumName}</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-[28%] mb-1 justify-between pt-1">
                <Image onClick={() => {
                    dispatch(setCommentModalStatus(true))
                }} title='Comments' width={100} height={100} className='w-[4rem] h-[3rem] bl-3d-effect hover:brightness-105 duration-300 transition-all cursor-pointer bg-greyBg  p-2 rounded-xl ' src={CommentIcon} alt='Comment Icon' />
                <Image onClick={() => {
                    dispatch(setUploadPhotoModalStatus(true))
                }} title='Delete Album' aria-label='Delete Album' width={100} height={100} className='w-[4rem] h-[3rem] bl-3d-effect hover:brightness-105 duration-300 transition-all cursor-pointer bg-greyBg  p-2 rounded-xl  ' src={DeleteIcon} alt='Comment Icon' />
            </div>
        </div>
    )
}

export default Album;
