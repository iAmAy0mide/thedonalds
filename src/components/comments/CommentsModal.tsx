"use client";
import Image from 'next/image';
import React from 'react';
import { useRef, useState } from 'react';
import Human from "/public/human.svg";
import { useDispatch } from 'react-redux';
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import { EffectCoverflow, Pagination } from 'swiper/modules';

const CommentsModal: React.FC = () => {
  return (
    <div className={`w-[100dvw] px-4 pt-4 mx-auto relative h-[90dvh]`}>
      <div className="absolute inset-0 glassy-green  z-[5]"></div>
      <div className=" relative z-20 bg-greenBg  h-[85dvh] border-[4px] border-red rounded-xl px-4">
          <div className="h-full mt- w-full  justify-center items-center gap -2 rounded-xl flex flex-col mx-auto">
              <div className="bg-red w-full  h-[25%] flex gap-2 bg-re d">
                <div className="">
                  <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='  w-[10rem]' />
                </div>
                <div className="">
                  <Image width={100} height={100} className=' w-[10rem]' src={Human} alt='' aria-label='' title='Photo Album Display' />
                </div>
              </div>
              <div className="bg-actionBg rounded-xl h-[50%] sm:max-w-[35rem] md:max-w-[38rem]  w-full mt-2">
                <h1>hshdjhd sd</h1>
              </div>  
              <div className="bg-actionBg rounded-xl h-[20%] w-full mt-2">
                  <h1>hshdjhd sd</h1>
              </div>  
          </div>
      </div>   

      
    </div>
  )
}

export default CommentsModal;

// <div className={`w-[100dvw] px-4 pt-4 mx-auto relative h-[90dvh]`}>
    {/* <div className="absolute inset-0 glassy-green  z-[5]"></div> */}
    {/* <Swiper></Swiper> */}
    {/* <div className=" relative z-20 bg-greenBg  h-[85dvh] border-[4px] border-red rounded-xl px-4">
        <div className="bg-r ed h-[14rem] mt-20 w-[full] justify-center gap-2 rounded-xl flex items-center overflow-x-auto whitespace-nowrap">
            <div className="h-[20rem] relative flex">
            <svg className="circle-top" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="50" />
            </svg>
                <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className=' w-[10rem]' />
                <Image width={100} height={100} className='w-[8rem]' src={Human} alt='' aria-label='' title='Photo Album Display' />
                <Image width={100} height={100} className='w-[8rem]' src={Human} alt='' aria-label='' title='Photo Album Display' />
                <Image width={100} height={100} className='w-[8rem]' src={Human} alt='' aria-label='' title='Photo Album Display' />
                <Image width={100} height={100} className='w-[8rem]' src={Human} alt='' aria-label='' title='Photo Album Display' />
                <Image width={100} height={100} className='w-[8rem]' src={Human} alt='' aria-label='' title='Photo Album Display' />
                <Image width={100} height={100}  src={Human} alt='' aria-label='' title='Photo Album Display' className='w-[8rem] -t op' />
                <Image width={100} height={100}  src={Human} alt='' aria-label='' title='Photo Album Display' className='w-[8rem] -t op' />
                <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-[8rem] -t op' />
            <svg className="circle-bottom" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="50" />
            </svg>
            </div>
           
        </div>
    </div>      */}
{/* </div> */}















 {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="bg-red h-[20rem] swiper w-[30rem] "
      >
        <SwiperSlide className="swiper-slide">
          <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full img' />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full img' />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full img' />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full img' />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full img' />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full' />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full' />
        </SwiperSlide>
      
      </Swiper> */}