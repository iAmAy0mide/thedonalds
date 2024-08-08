"use client";

import Image from "next/image";
import React, { useState } from "react";

import CommentForm from "./CommentForm";

import Human from "/public/human.svg";

const Comments: React.FC<ICom> = ({ comments }) => {
  const [famComments, setFamComments] = useState<{
    _id: string;
    comment: string;
  }[]>(comments);
  // console.log(famComments, "from famComments");
  

  return (
    <>
      <div className="bg-actionBg rounded-xl h-[50%] p-1 sm:max-w-[35rem] space-y-2 flex flex-col items-center  md:max-w-[38rem] overflow-auto  w-full mt-2">

        {
          famComments.map((c) => (
          <div key={c._id} className="rounded-lg relative self-start  mx-auto w-full sm:w-[70%] p-1 bg-deepBlue">
            <div className=" h-[4rem] w-[4rem] rounded-lg float-left mr-2">
            <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full rounded-lg float-left' />
            </div>
            <p className="comment-text overflow-clip">{c.comment}</p>
          </div>
          ))
        }
      </div>
      <CommentForm setFamComments={setFamComments} />
    </>
  )
}

export default Comments;


interface ICom {
  comments: {
    _id: string;
    comment: string;
  }[]
}
