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
    <div className="mx-auto  bg-red rounded-xl flex justify-center items-center mobile px-8 md:px-16 max-w-[14rem] h-[10rem] w-full">
      {/* <h1 className="text-xl text-center">Album Photos</h1> */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide
          className=""
        >
            <Image onClick={() => {
              alert("Image clicked")
            }} width={100} height={100} alt={""} src={Human} className="w-[10rem]" />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} src={Human} />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={100} height={100} alt={""} src={Human} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AlbumPhotoCarousel;
