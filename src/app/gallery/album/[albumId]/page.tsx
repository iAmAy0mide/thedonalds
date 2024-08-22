"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from 'react';

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

import { useGetAlbumPhotosQuery } from "@/lib/features/api/albumApiSlice";
import LoadingSpinner from "@/components/UI/LoadingSpinner"; 


type ParamsType = {
    albumId: string;
}

interface AlbumProps {
    params: ParamsType;
    searchParams: { albumName?: string };
}

const Album: React.FC<AlbumProps> = ({ params, searchParams }) => {

    const currentAlbumId = params.albumId;
    const albumName = searchParams.albumName;

    const { data } = useGetAlbumPhotosQuery(currentAlbumId, {refetchOnMountOrArgChange: true });
    const [thumbnailPosition, setThumbNailPosition] = useState<any>("left");

    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth < 648) {
              setThumbNailPosition("bottom")
          } else {
              setThumbNailPosition("left");
          }
      }

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("rezize", handleResize);
    }, []);

    const albumPhotos: { original: string; thumbnail: string }[] = (data && data[1] || []).map((i: any) => (
      { 
        original: i.image.url,
        thumbnail: i.image.url,
      }
    ));


    const images = [
        {
          original: "/wedding-d.jpg",
          thumbnail: "/wedding-d.jpg",
        },
        {
          original: "/wedding-e.jpg",
          thumbnail: "/wedding-e.jpg",
        },
        {
          original: "/wedding-s.jpg",
          thumbnail: "/wedding-s.jpg",
        },
        {
          original: "/wedding-v.jpg",
          thumbnail: "/wedding-v.jpg",
        },
        {
          original: "/wedding-sh.jpg",
          thumbnail: "/wedding-sh.jpg",
        },
        {
          original: "/wedding-v.jpg",
          thumbnail: "/wedding-v.jpg",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];
      
    return (
        <main className="max-w-[48rem] w-full flex justify-center items-center max-sm:pt-[10rem] mx-auto pt-[14rem] min-h-[100dvh] max-lg:px-2 over flow-x-hidden relative">
          { !albumPhotos[0] && <div className="-mt-[30rem]"><LoadingSpinner /></div> }
          <div className="max-sm:mt-[3rem] mb-10">
            <ImageGallery items={albumPhotos} thumbnailPosition={thumbnailPosition} />
          </div>
          <div className="absolute text-xl glassy-blue text-[#fff] rounded-lg p-2 left-[50%] -translate-x-[50%] top-[32%] lg:top-[37%]">{albumName}</div>
        </main>
    );
}

export default Album;
