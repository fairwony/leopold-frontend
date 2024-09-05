import "./Banner.css";
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
	return (
		<>
			<Swiper
              className="banner"
              slidesPerView={1}>
                <SwiperSlide className="slide1"></SwiperSlide>
                <SwiperSlide className="slide2"></SwiperSlide>
                <SwiperSlide className="slide3"></SwiperSlide>
            </Swiper>
		</>
	)
}