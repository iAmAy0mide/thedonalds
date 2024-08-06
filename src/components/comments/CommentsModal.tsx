// "use client"
import Image from 'next/image';
import Human from "/public/human.svg";
import { useDispatch } from 'react-redux';
import { setCommentModalStatus } from '@/lib/features/modal/modalSlice';
import Modal from '../Modal';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { getComments } from '@/app/action';
import useComments from '@/hooks/useComments';
import AlbumPhotoCarousel from '../Albums/AlbumPhotoCarousel';
import Comments from './Comments';
import CommentsModalCloseBtn from './CommentsModalCloseBtn';
import CommentSection from './CommentSection';



const CommentsModal = () => {
  // const dispatch = useDispatch();
  
  async function usde() {
    "use server"
  }

 
  
  return (
    
    <Modal>
      <CommentsModalCloseBtn /> 
      <div className=" relative z-20 bg-greenBg   h-[85dvh] border-[4px] border-red rounded-xl px-4">
        <div className="h-full mt- w-full  justify-center items-center gap -2 rounded-xl flex flex-col mx-auto">
            <AlbumPhotoCarousel />
            <CommentSection />
        </div>
      </div>  
    </Modal>

  )
}

export default CommentsModal;

export const dynamic = "force-dynamic"

 {/* <div className="rounded-lg relative self-start  mx-auto w-full sm:w-[70%] p-1 bg-deepBlue">
                  <div className=" h-[4rem] w-[4rem] rounded-lg float-left mr-2">
                    <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full rounded-lg float-left' />
                  </div>
                  <p className="comment-text">How many times were you frustrated while looking
                  out for a good collection of programming / algorithm provide well written, well thought and well algorithm provide well written, well thought and well algorithm provide well written, well thought and well.
                  </p>
                </div> */}



                // { children }: Readonly<{
                //   children: React.ReactNode
                // }>