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
        modules={[Navigation]}
        spaceBetween={-50}
        slidesPerView={3}
        speed={1000}
        loop={true}
        loopAddBlankSlides={1}
        navigation={true}
        style={{ "--swiper-navigation-color": "#737373", width:"1009px"}}
      >
        <SwiperSlide>
          <img style={{width:"260px", height:"260px", borderRadius:"10px"}} src="images\Home\미니 슬라이드1.jpg"></img>
        </SwiperSlide>
        
        <SwiperSlide>
        <img style={{width:"260px", height:"260px", borderRadius:"10px"}} src="images\Home\미니 슬라이드2.jpg"></img>
        </SwiperSlide>
        
        <SwiperSlide>
        <img style={{width:"260px", height:"260px", borderRadius:"10px"}} src="images\Home\미니 슬라이드 3.jpg"></img>
        </SwiperSlide>
        
        <SwiperSlide>
        <img style={{width:"260px", height:"260px", borderRadius:"10px"}} src="images\Home\미니 슬라이드4.jpg"></img>
        </SwiperSlide>
        
        <SwiperSlide>
        <img style={{width:"260px", height:"260px", borderRadius:"10px"}} src="images\Home\미니 슬라이드5.jpg"></img>
        </SwiperSlide>

        <SwiperSlide>
        <img style={{width:"260px", height:"260px", borderRadius:"10px"}} src="images\Home\미니 슬라이드6.jpg"></img>
        </SwiperSlide>

        <SwiperSlide>
        <img style={{width:"260px", height:"260px", borderRadius:"10px"}} src="images\Home\미니 슬라이드7.jpg"></img>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
