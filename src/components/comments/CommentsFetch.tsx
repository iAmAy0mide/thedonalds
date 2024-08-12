"use client";

import { useSelector } from "react-redux";
import { updateCurrentAlbumCommentId } from "@/lib/features/store/commentId/commentId";

import { getComments } from "@/app/action";
import Comments from "./Comments";
import { RootState } from "@/lib/features/store";
import { useGetCommentsByIdQuery } from "@/lib/features/api/commentsApiSlice";
import { useEffect } from "react";
import { useAlbumContext } from "@/hooks/AlbumContext";

interface IT {
  currentAlbumId: string
}
// interface IComments {
//   comments: {
//     _id: string;
//     comment: string;
//   }[]
// }

const CommentsFetch: React.FC = () => {
    // const comments = await getComments();
    // const currentAlbumId: string = useSelector((state: RootState) => (state.comment.commentId));
    const { currentAlbumId } = useAlbumContext();

    // console.log({currentAlbumId}, "from cfetch")
    const { data } = useGetCommentsByIdQuery(currentAlbumId, {refetchOnMountOrArgChange: true });
    const comments = data as unknown as  {
      _id: string;
      comment: string;
  }[] 
    // const comments = com?.comments
    // console.log(comments, "fr"); 
    
    // const [getCommentsById, { data: comments, }] = useGetCommentsByIdMutation();

    // let comments: { _id: string; comment: string; }[] = []
    // async function getComByID() {
    //   const res = await fetch(`/api/comments/commentId?commentId=${currentAlbumId}`, { cache: "no-cache"});
    //   comments = await res.json();
    // }
      // await fetch(`/api/comments/commentId/${currentAlbumId}`, { cache: "no-cache"});
   


    
      // useEffect(() => {
      //   refetch();
      //   console.log("refetched comments")

      // }, [currentAlbumId, comments]);


    const URL = process.env.environment === "prod" ? 'https://thedonalds.vercel.app' : "http://localhost:3000";    

    // const res = await fetch(`${URL}/api/comments/commentId/${currentAlbumId}`, { cache: "no-cache"});
    // const comments = await res.json();
    // console.log(comments, "from commentPage");  
    

  return (
    <>   
        <Comments comments={comments} />      
    </>    
  )
}

export default CommentsFetch;

export const dynamic = "force-dynamic"


interface Id {
  albumId: string;
}
