"use client";

import Comments from "./Comments";
import { useGetCommentsByIdQuery } from "@/lib/features/api/commentsApiSlice";
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
    const { currentAlbumId } = useAlbumContext();

    const { data } = useGetCommentsByIdQuery(currentAlbumId, {refetchOnMountOrArgChange: true });
    const comments = data as unknown as  {
      _id: string;
      comment: string;
  }[] 
      

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
