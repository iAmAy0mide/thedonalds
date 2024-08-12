"use client"

import CommentsModal from "@/components/comments/CommentsModal";
import GalleryPage from '../../components/Gallery/GalleryPage';
import { useGetAlbumsQuery } from "@/lib/features/api/albumApiSlice";
import { useEffect } from "react";

const Gallery =  () => {
  
  // const res = await fetch("http://localhost:3000/api/album", { cache: "no-cache" }) 
  // const albums = await res.json();

  const { data: albums, refetch } = useGetAlbumsQuery(undefined, { refetchOnMountOrArgChange: true });

  console.log(albums, "from rtk gal");
  

  return (
    <>{albums && (
      <GalleryPage albums={albums}> 
        <CommentsModal />
      </GalleryPage>
     )}
    </> 
  )
}

export default Gallery;
export const dynamic = "force-dynamic";