import { useState } from "react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function SmallBanner() {
  return (
    <div className="center">
      <Swiper
        className="small-banner"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        speed={2000}
        navigation={true}
        style={{ "--swiper-navigation-color": "#737373" }}
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>

      </Swiper>
    </div>
  );
}
