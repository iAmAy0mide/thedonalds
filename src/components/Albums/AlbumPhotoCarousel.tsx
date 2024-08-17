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

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Human from "/public/human.svg";
import { useAlbumContext } from "@/hooks/AlbumContext";
import { useGetAlbumPhotosQuery } from "@/lib/features/api/albumApiSlice";
import LoadingSpinner from "../UI/LoadingSpinner";

const AlbumPhotoCarousel = () => {
    const [slidesPerView, setSlidePerview] = useState<number>(3);
    const [centeredSlides, SetCenteredSlides] = useState<boolean>(true);
    const { currentAlbumId } = useAlbumContext();
    const { data: albumPhotos } = useGetAlbumPhotosQuery(currentAlbumId, {refetchOnMountOrArgChange: true });


    
    
    useEffect(() => {

      const handleResize = () => {

        const screenWidth = window.innerWidth;
        console.log(screenWidth)
  
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


  return (
    <div className="mx-auto  bg-red rounded-xl flex justify-center  album-resp-mobile items-center  md: px- 16 max-w-[30rem] max-sm:max-w-[2 5rem] w-full h-[10rem]  p-1">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={centeredSlides}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 90,
          stretch: 2,
          depth: 10,
          modifier: 20,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full bg-deep Blue" 
      >

        {/* {
          !albumPhotos ? (<LoadingSpinner />) : 
            Array.isArray(albumPhotos) && (
              albumPhotos.map((a) => (
                <SwiperSlide key={a.image.url} className=" bg-ac tionBg">
                    <Image priority width={100} height={100} alt={""} src={a.image.url} className="w-full " />
                </SwiperSlide>
              )) [0.2rem]
            )          
        } */}
<SwiperSlide className="bg-ac tionBg">
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
      </Swiper>
    </div>
  )
}

export default AlbumPhotoCarousel;

{/* <SwiperSlide className="bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full max-sm:h-full" />
</SwiperSlide>
<SwiperSlide className="bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full " />
</SwiperSlide>
<SwiperSlide className=" bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full " />
</SwiperSlide>
<SwiperSlide className="bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full  " />
</SwiperSlide>
<SwiperSlide className=" bg-ac tionBg">
    <Image width={100} height={100} alt={""} src={Human} className="w-full " />
</SwiperSlide> */}