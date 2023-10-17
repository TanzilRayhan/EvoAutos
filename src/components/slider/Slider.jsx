//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
    <div className='max-w-5xl spaceGrotesk mx-auto text-center'>
    <h1 className=' text-5xl text-center font-bold pt-5'>Welcome To EvoAutos</h1>
    <p className='font-semibold pt-5 pb-10'>
An automotive brand shop is a retail establishment dedicated to showcasing and selling vehicles from a specific automotive brand. The showroom often features a range of vehicles, from compact cars to SUVs and luxury vehicles, allowing potential buyers to get a firsthand look at the design, performance, and innovations of the brand. Knowledgeable staff members are usually present to assist customers, providing information, answering questions, and facilitating test drives.</p>
    </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='max-h-cover brightness-75' src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770" alt="" /> </SwiperSlide>
        <SwiperSlide><img className='max-h-cover brightness-75' src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1856" alt="" /></SwiperSlide>
        <SwiperSlide><img className='max-h-cover brightness-75' src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1769" alt="" /></SwiperSlide>
        <SwiperSlide><img className='max-h-cover brightness-75' src="https://images.unsplash.com/photo-1617814065893-00757125efab?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1932" alt="" /></SwiperSlide>       
      </Swiper>
    </>
  );
}

export default Slider;