import Comments from "./Comments";
import { useGetCommentsByIdQuery } from "@/lib/features/api/commentsApiSlice";
import { useAlbumContext } from "@/hooks/AlbumContext";

const CommentSection: React.FC = () => {
  const { currentAlbumId } = useAlbumContext();

  const { data } = useGetCommentsByIdQuery(currentAlbumId, {refetchOnMountOrArgChange: true });
  const comments = data as unknown as  {
      _id: string;
      comment: string;
  }[];    

  return <Comments comments={comments} />      

}

export default CommentSection;

export const dynamic = "force-dynamic";
