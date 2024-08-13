"use client"

import CommentsModal from "@/components/comments/CommentsModal";
import GalleryPage from '../../components/Gallery/GalleryPage';
import { useGetAlbumsQuery } from "@/lib/features/api/albumApiSlice";
import { useEffect, useState } from "react";
import Spinner from "/public/spinner.gif";
import Image from "next/image";
import { RootState } from "@/lib/features/store";
import { useDispatch, useSelector } from "react-redux";
import { updateAlbumPage } from "@/lib/features/store/newAlbum/newAlbum";

const Gallery =  () => {
  
  // const res = await fetch("http://localhost:3000/api/album", { cache: "no-cache" }) 
  // const albums = await res.json();
  
  const updatedAlbums = useSelector((state: RootState) => state.updatedAlbums.updatedAlbums);
  const { data: albums, refetch } = useGetAlbumsQuery(undefined, { refetchOnMountOrArgChange: true });
  const dispatch = useDispatch();
  const shouldUpdate = useSelector((state: RootState) => state.updatedAlbums.shouldUpdate);
  
  // console.log(albums, "from rtk gal");

  useEffect(()=> {
    console.log("update worked!");
    console.log(updatedAlbums);
    // refetch();
    console.log({shouldUpdate}, "above")
    if (shouldUpdate) {
      console.log({shouldUpdate}, "inside")
      dispatch(updateAlbumPage({albums, deleteClicked: false, albumId: ""}));
    }
  }, [albums]);


  return (
    <>{!albums ? (
      <div className="mx-auto mt-[14rem] sm:mt-[18rem] w-[2rem]">
        <Image
          src={Spinner}
          width={100}
          height={100}
          alt="Loading Spinner"
          className="w-full"
        />
      </div>) : (
      <GalleryPage albums={albums}> 
        <CommentsModal />
      </GalleryPage>
     )}
    </> 
  )
}

export default Gallery;
export const dynamic = "force-dynamic";