"use client";

import { useEffect } from "react";
import { RootState } from "@/lib/features/store";
import { useDispatch, useSelector } from "react-redux";

import GalleryPage from '../../components/Gallery/GalleryPage';
import CommentsModal from "@/components/comments/CommentsModal";
import { useGetAlbumsQuery } from "@/lib/features/api/albumApiSlice";

import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { updateAlbumPage } from "@/lib/features/store/newAlbum/newAlbum";


const Gallery =  () => {

  const { data: albums } = useGetAlbumsQuery(undefined, { refetchOnMountOrArgChange: true });
  const shouldUpdate = useSelector((state: RootState) => state.updatedAlbums.shouldUpdate);
  const dispatch = useDispatch();
  

  useEffect(()=> {
    if (!Array.isArray(albums)) return;
    if (shouldUpdate) {
      
      dispatch(updateAlbumPage(albums));
    }
  }, [albums]);


  return (
    <>{!albums || !Array.isArray(albums) ? (
        <LoadingSpinner />
      ) : (
      <GalleryPage albums={albums}>
        <CommentsModal />
      </GalleryPage>
     )}
    </> 
  )
}

export default Gallery;
export const dynamic = "force-dynamic";