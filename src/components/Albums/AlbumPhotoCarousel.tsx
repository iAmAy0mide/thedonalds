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
    const [centeredSlides, SetCenteredSlides] = useState<boolean>(true);
    const { currentAlbumId } = useAlbumContext();
    const { data  } = useGetAlbumPhotosQuery(currentAlbumId, {refetchOnMountOrArgChange: true });  

    const albumName: string = data &&  data[0].albumName;
    const albumPhotos = data && data[1] || [];
    const albumId: string = currentAlbumId;
    
    useEffect(() => {

      const handleResize = () => {

        const screenWidth = window.innerWidth;
  
        if (screenWidth <= 435) {
  
          console.log(slidesPerView, "in check 435");
          setSlidePerview(2);
          SetCenteredSlides(false);
          return
        }
        
        if (screenWidth <= 388) {
          setSlidePerview(2);
          SetCenteredSlides(true);
          return
        }
  
          setSlidePerview(3);
          SetCenteredSlides(true);
     
      }

    handleResize();
       
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
      
    }, []);

    const router = useRouter();


  return (
    <div className="mx-auto relative  bg-red rounded-xl flex justify-center  album-resp-mobile items-center  md: px- 16 max-w-[30rem] max-sm:max-w-[2 5rem] w-full h-[10rem]  p-1">
      <button 
        onClick={() => {
          router.push(`/gallery/album/${albumId}?albumName=${albumName}`);
        }}
        className="absolute  z-[100] rounded-lg T3d-effect px-2 py-1 text-md text-[#fff] bg-actionBg top-1 right-0">View Album</button>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full rounded-lg cursor-pointer" 
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
{/* <SwiperSlide className="bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full max-sm:h-full" />
</SwiperSlide>
<SwiperSlide className="bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full  " />
</SwiperSlide>
<SwiperSlide className="bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full  " />
</SwiperSlide>
<SwiperSlide className="bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full  " />
</SwiperSlide>
<SwiperSlide className=" bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full " />
</SwiperSlide>
*/}
      </Swiper> 
    </div>
  )
}

export default AlbumPhotoCarousel;
