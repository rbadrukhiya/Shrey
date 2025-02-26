import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar,Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{delay:1000}}
                scrollbar={{ draggable: true }}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}>

                <SwiperSlide><img src="image/1.jpg" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/2.jpg" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/3.jpg" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/4.webp" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/5.jpg" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/1.jpg" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/2.jpg" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/3.jpg" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/4.webp" alt="" height="100%" width="100%" /></SwiperSlide>
                <SwiperSlide><img src="image/5.jpg" alt="" height="100%" width="100%" /></SwiperSlide>
            </Swiper>
        </>
    )
}
export default Home