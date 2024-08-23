"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Spinner from "/public/spinner.gif";

import CommentForm from "./CommentForm";
import UserIcon from "/public/user-profile-icon.png"
import Human from "/public/human.svg";


interface Icom {
  comment: string;
  _id: string;
}


const Comments: React.FC<IComments> = ({ comments }) => {
  const [famComments, setFamComments] = useState<Icom[]>(comments);
  // console.log(famComments, "from famComments");
  // console.log(comments, "from famComments - comments");

  useEffect(() => {
    if (Array.isArray(comments)) {
      setFamComments(comments);
    }
  }, [comments]);
  

  return (
    <>
      <div className="bg-actionBg rounded-xl h-[50%] p-1 sm:max-w-[35rem] space-y-2 flex flex-col items-center  md:max-w-[38rem] overflow-auto  w-full mt-2">

      {
        !famComments ? (
          <div className="mx-auto w-[2rem]">
            <Image
              src={Spinner}
              width={100}
              height={100}
              alt="Loading Spinner"
              className="w-full"
              unoptimized
            />
          </div>
        ) : Array.isArray(famComments) && famComments.length === 0 ? (
          <p className="text-[1.5rem] text-center">Whoops! No comments.</p>
        ) : Array.isArray(famComments) ? (
          famComments.map((c: { _id: React.Key; comment: string }) => (
            <div key={c._id} className="rounded-lg relative self-start mx-auto w-full sm:w-[70%] p-1 bg-deepBlue">
              <div className="h-[4rem] w-[4rem] rounded-lg float-left mr-2">
                <Image
                  width={100}
                  height={100}
                  src={UserIcon}
                  alt="" 
                  className="w-full rounded-lg float-left"
                />
              </div>
              <p className="comment-text overflow-clip">{c.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-[1.5rem] text-center"> </p>
        )
      }
      </div>
      <CommentForm setFamComments={setFamComments} />
    </>
  )
}

export default Comments;

export const dynamic = "force-dynamic";

interface ICom {
  comments: {
    _id: string;
    comment: string;
  }[]
}
