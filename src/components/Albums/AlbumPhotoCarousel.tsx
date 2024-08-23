import Image from "next/image";
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide}  from "swiper/react";
import Wedding from "/public/wedding-e.jpg";
import Wedding2 from "/public/wedding-d.jpg";
import Wedding3 from "/public/wedding-e.jpg";
import Wedding4 from "/public/wedding-s.jpg";
import Wedding5 from "/public/wedding-sh.jpg";
import Wedding6 from "/public/wedding-v.jpg";
import Wedding7 from "/public/wedding-f.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, FreeMode } from "swiper/modules";
import Human from "/public/human.svg";
import { useAlbumContext } from "@/hooks/AlbumContext";
import { useGetAlbumPhotosQuery } from "@/lib/features/api/albumApiSlice";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useRouter } from "next/navigation";


const AlbumPhotoCarousel = () => {

    const [slidesPerView, setSlidePerview] = useState<number>(3);
    const { currentAlbumId } = useAlbumContext();
    const { data  } = useGetAlbumPhotosQuery(currentAlbumId, {refetchOnMountOrArgChange: true });  

    const albumName: string = data &&  data[0].albumName;
    const albumPhotos = data && data[1] || [];
    const albumId: string = currentAlbumId;
    
    useEffect(() => {

      const handleResize = () => {

        const screenWidth = window.innerWidth;
  
        if (screenWidth <= 435) {
          setSlidePerview(2);
          return
        }
        
        if (screenWidth <= 388) {
          setSlidePerview(2);
          return
        }
  
          setSlidePerview(3);
     
      }

    handleResize();
       
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
      
    }, []);

    const router = useRouter();


  return (
    <div className="mx-auto relative  bg-red rounded-xl flex justify-center  album-resp-mobile items-center  md: px- 16 max-w-[30rem] w-full h-[10rem]  p-1">
      <button 
        onClick={() => {
          router.push(`/gallery/album/${albumId}?albumName=${albumName}`);
        }}
        className="absolute transition-all duration-300 hover:brightness-90  z-[100] rounded-lg T3d-effect px-2 py-1 text-[#fff] bg-actionBg text-sm top-1 right-2">View Album</button>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full flex justify-center items-center rounded-lg cursor-pointer" 
      >

        {
          !albumPhotos ? (<LoadingSpinner />) : 
            Array.isArray(albumPhotos) && (
              albumPhotos.map((a) => (
                <SwiperSlide key={a.image.url} className=" h-[9.8rem] ">
                  <div className="w-full h-[9.8rem]">
                    <Image priority width={100} height={100} alt={"album photo"} src={a.image.url} className="w-fit" />
                  </div>
                </SwiperSlide>
              ))
            )          
        }
      </Swiper> 
    </div>
  )
}

export default AlbumPhotoCarousel;
