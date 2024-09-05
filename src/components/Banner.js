import "./Banner.css";
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
	return (
		<>
			<Swiper
              className="banner"
              slidesPerView={1}>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
		</>
	)
}