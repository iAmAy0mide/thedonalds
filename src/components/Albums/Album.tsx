import Image from 'next/image';
import AlbumFolderIcon from "/public/AlbumFolderIcon.svg";
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setCommentModalStatus } from '@/lib/features/store/modal/modalSlice';

interface IAlbumProps {
    albumId: String;
    albumName: string;
    createdAt: string;
    coverImage: string
    renderButtons: () => React.ReactNode
}

const Album: React.FC<IAlbumProps> = ({ albumName, createdAt, coverImage, renderButtons }) => {

    const dispatch = useDispatch();
    const pathName = usePathname();

    return (
        <div className='relative border bg-[#394c4c] border-deepBlue text-[#fff]  flex flex-col  overflow-hidden h-[18rem]  rounded-xl' >
            <div onClick={() => {
                if (pathName === "/gallery")  dispatch(setCommentModalStatus(true));
            }} className="rounded-xl relative  h-[82%]" style={{ backgroundImage: `url(${coverImage})`, backgroundPosition: "center", backgroundSize: "cover" }}>
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
            {renderButtons()}
        </div>
    )
}

export default Album;
