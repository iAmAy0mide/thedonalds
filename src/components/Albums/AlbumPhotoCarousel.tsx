import Image from "next/image";
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide}  from "swiper/react";

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
    const [slidesPerView, setSlidePerview] = useState<number>(2);
    const { currentAlbumId } = useAlbumContext();
    const { data: albumPhotos } = useGetAlbumPhotosQuery(currentAlbumId, {refetchOnMountOrArgChange: true });

    console.log(albumPhotos, "from albums components")
    // useEffect(() => {
    //   const sw = window.document
    // }, []);


  return (
    <div className="mx-auto  bg-red rounded-xl flex justify-center  album-resp-mobile  md: px- 16 max-w-[30rem] max-sm:max-w-[2 5rem] w-full h-[10rem]  p-1">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        // slidesPerView={slidesPerView} 
        // slidesPerView={2}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 90,
          stretch: 2,
          // stretch: 0,
          depth: 10,
          // depth: 100,
          modifier: 20,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySw iper w-full bg-deep Blue" 
      >

        {/* {
          !albumPhotos ? (<LoadingSpinner />) : 
            Array.isArray(albumPhotos) && (
              albumPhotos.map((a) => (
                <SwiperSlide key={a.image.url} className=" bg-ac tionBg">
                    <Image width={100} height={100} alt={""} src={a.image.url} className="w-full " />
                </SwiperSlide>
              ))
            )          
        } */}
        <SwiperSlide className="bg-ac tionBg">
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
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default AlbumPhotoCarousel;
