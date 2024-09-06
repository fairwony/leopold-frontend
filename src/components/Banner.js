import { useState } from "react";
import "./Banner.css";
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Banner() {
  
	return (
		<>
			<Swiper
              className="banner"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              
              autoplay={{
                delay: 100,
                disableOnInteraction: false
              }}
              speed={500}
              pagination={{clickable: true}}
              >
                <SwiperSlide><img src='images\Home\슬라이드1.png'></img></SwiperSlide>
                <SwiperSlide><img src='images\Home\슬라이드2.png'></img></SwiperSlide>
                <SwiperSlide><img src='images\Home\슬라이드3.jpg'></img></SwiperSlide>
            </Swiper>
		</>
	)
}