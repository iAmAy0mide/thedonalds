// import React from 'react'

// const AlbumPhotoCarousel = () => {
//   return (
//     <div>
//       <h1>Albums Carousel</h1>
//     </div> 
//   )
// }

// export default AlbumPhotoCarousel

import { Swiper, SwiperSlide}  from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Human from "/public/human.svg";

const AlbumPhotoCarousel = () => {
  return (
    <div className="mx-auto  bg-red rounded-xl flex justify-center  album-resp-mobile  md: px- 16 max-w-[30rem] max-sm:max-w-[20rem] w-full h-[10rem]  p-1">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 90,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySw iper w-full" 
      >
        <SwiperSlide>
            <Image width={100} height={100} alt={""} src={Human} className="w-full " />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full  h-f ull" src={Human}  />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full  h-f ull" src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full" src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full  h-f ull" src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full" src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full  h-f ull" src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full" src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full  h-f ull" src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} className="w-full" src={Human} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AlbumPhotoCarousel;
