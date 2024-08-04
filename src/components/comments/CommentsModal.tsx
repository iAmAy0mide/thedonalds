import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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



const CommentsModal: React.FC = () => {
  const dispatch = useDispatch();
  const [famComment, setFamComment] = useState< any[] >([]);

  const { comments, getAllComments } = useComments();

  // useEffect(() => {
  //   async function getAllComment() {
      
  //     comments = await getComments();
  //     setFamComment(comments);

  //     console.log(comments);
      
  //   }

  //   getAllComment();
  // }, []);
  let commenta: any[]  = [];
  // commenta = comments;
  useEffect(() => {
    // getAllComment();
    // setFamComment(comments)
    // commenta = comments;
  }, []);

  
  return (
    
    <Modal> 
      <button onClick={() => {
        dispatch(setCommentModalStatus(false));
      }} title='Close' aria-label='Close comment modal button' className="close-modal-button">Close</button>
      <div className=" relative z-20 bg-greenBg   h-[85dvh] border-[4px] border-red rounded-xl px-4">
          <div className="h-full mt- w-full  justify-center items-center gap -2 rounded-xl flex flex-col mx-auto">

              <div className="bg-red w-full basis-min-content  h-[25%] flex gap-2 bg-re d ">
                <div className="h-full">
                  <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='' />
                </div>
                <div className="h-[8rem]">
                  <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='' />
                </div>  
              </div>

              {/* <div className="bg-actionBg rounded-xl h-[50%] p-1 sm:max-w-[35rem] space-y-2 flex flex-col items-center  md:max-w-[38rem] overflow-auto  w-full mt-2">
                
                {
                  comments.map((c) => (
                    <>
                      <Comment profilePic={Human} comment={c.comment} key={c._id} />
                    </>
                  ))
                }
               
              </div>   */}
              <Comments />
              <CommentForm />
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