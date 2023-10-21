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
        <SwiperSlide ><img className='relative max-h-cover brightness-50' src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="hero-content absolute text-center text-neutral-content">
            <div className="max-w-3xl">
              <div className=" spaceGrotesk mx-auto px-5 lg:px-0 text-center">
                <h1 className="text-2xl lg:text-6xl text-center font-bold py-5 text-white">
                  Welcome To EvoAutos
                </h1>
                <p className="text-xs lg:text-base font-semibold pt-5 pb-10 text-grey-300">
                  An automotive brand shop is a retail establishment dedicated to
                  showcasing and selling vehicles from a specific automotive
                  brand. The showroom often features a range of vehicles, from
                  compact cars to SUVs and luxury vehicles, allowing potential
                  buyers to get a firsthand look at the design, performance, and
                  innovations of the brand.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><img className='max-h-cover brightness-50' src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1856" alt="" />
          <div className="hero-content absolute text-center text-neutral-content">
            <div className="max-w-3xl">
              <div className=" spaceGrotesk mx-auto px-5 lg:px-0 text-center">
                <h1 className="text-2xl lg:text-6xl text-center font-bold py-5 text-white">
                  Welcome To EvoAutos
                </h1>
                <p className="text-xs lg:text-base font-semibold pt-5 pb-10 text-grey-300">
                  An automotive brand shop is a retail establishment dedicated to
                  showcasing and selling vehicles from a specific automotive
                  brand. The showroom often features a range of vehicles, from
                  compact cars to SUVs and luxury vehicles, allowing potential
                  buyers to get a firsthand look at the design, performance, and
                  innovations of the brand.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><img className='max-h-cover brightness-50' src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1769" alt="" />
          <div className="hero-content absolute text-center text-neutral-content">
            <div className="max-w-3xl">
              <div className=" spaceGrotesk mx-auto px-5 lg:px-0 text-center">
                <h1 className="text-2xl lg:text-6xl text-center font-bold py-5 text-white">
                  Welcome To EvoAutos
                </h1>
                <p className="text-xs lg:text-base font-semibold pt-5 pb-10 text-grey-300">
                  An automotive brand shop is a retail establishment dedicated to
                  showcasing and selling vehicles from a specific automotive
                  brand. The showroom often features a range of vehicles, from
                  compact cars to SUVs and luxury vehicles, allowing potential
                  buyers to get a firsthand look at the design, performance, and
                  innovations of the brand.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
