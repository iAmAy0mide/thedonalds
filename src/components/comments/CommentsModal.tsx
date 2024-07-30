"use client";
import Image from 'next/image';
import React from 'react';
import Human from "/public/human.svg";
import { useDispatch } from 'react-redux';
import { setCommentModalStatus } from '@/lib/features/modal/modalSlice';
import Modal from '../Modal';

const CommentsModal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    
    <Modal> 
      <button onClick={() => {
        dispatch(setCommentModalStatus(false));
      }} title='Close' aria-label='Close comment modal button' className="absolute -top-[2.5%] rounded-md hover:brightness-90 px-3 py-1 text-[#fff] text-sm bg-actionBg left-0 z-30">Close</button>       
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
    </Modal>

  )
}

// <div className={`w-[100dvw] px-4 pt-4 mx-auto relative h-[90dvh]`}>
      {/* <div onClick={() => { */}
        // dispatch(setCommentModalStatus(false));
      // }} className="absolute"></div>
      {/* <div className="absolute inset-0 glassy-green  z-[5]"></div> */}

export default CommentsModal;
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