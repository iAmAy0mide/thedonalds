import CommentsModal from "@/components/comments/CommentsModal";
import GalleryPage from '../../components/Gallery/GalleryPage';
import CommentSection from "@/components/comments/CommentSection";

const Gallery = async () => {

  async function ser() {
    "use server"
  }
  
  const res = await fetch("http://localhost:3000/api/album", { cache: "no-cache" }) 
  const album = await res.json();

  // console.log(album);
  // console.log(Array.isArray(album), "client");
  // const albumPhoto
  

  return (
    <>
      <GalleryPage album={album}> 
        <CommentsModal />
        {/* <CommentsModal children={<CommentSection currentAlbumId={""} />} />  */}
      </GalleryPage>
    </> 
  )
}

export default Gallery;

