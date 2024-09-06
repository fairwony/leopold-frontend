import { useState } from "react";
import "./Banner.css";
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
	return (
		<>
			<Swiper
              className="banner"
              slidesPerView={1}>
                <SwiperSlide><img src='images\Home\슬라이드1.png'></img></SwiperSlide>
                <SwiperSlide><img src='images\Home\슬라이드2.png'></img></SwiperSlide>
                <SwiperSlide><img src='images\Home\슬라이드3.jpg'></img></SwiperSlide>
            </Swiper>
		</>
	)
}