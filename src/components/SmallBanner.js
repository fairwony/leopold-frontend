import "./SmallBanner.css";
import "./Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

export default function SmallBanner() {
  const [isMousedOver, setIsMousedOver] = useState(true);

  function handleMouseOver(){
    setIsMousedOver(true);
  }

  function handleMouseOur(){
    setIsMousedOver(true);
  }



  return (
    <div className="center">
      <Swiper
        className="samll-banner"
        modules={[Navigation]}
        spaceBetween={-50}
        slidesPerView={3}
        speed={1000}
        loop={true}
        loopAddBlankSlides={1}
        navigation={true}
        style={{
          "--swiper-navigation-size": "30px",
          "--swiper-theme-color": "#aeaeae",
          width: "1009px",
          margin: "-300px 0px 0px 780px",
          position:"relative"
        }}
      >
        <SwiperSlide className="small-banner">
        <img
            style={{ width: "260px", height: "260px", borderRadius: "10px", position:"relative" }}
            src="images\Home\미니 슬라이드1.jpg"
            alt="slide1"
          ></img>
           <div className="information-box"></div>
        </SwiperSlide>
        
        <SwiperSlide  className="small-banner">
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="images\Home\미니 슬라이드2.jpg"
            alt="slide2"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="\images\Home\미니 슬라이드 3.jpg"
            alt="slide3"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="\images\Home\미니 슬라이드4.jpg"
            alt="slide4"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="\images\Home\미니 슬라이드5.jpg"
            alt="slide5"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="\images\Home\미니 슬라이드6.jpg"
            alt="slide6"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="\images\Home\미니 슬라이드7.jpg"
            alt="slide7"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="\images\Home\미니 슬라이드8.jpg"
            alt="slide8"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="\images\Home\미니 슬라이드9.jpg"
            alt="slide9"
          ></img>
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "260px", height: "260px", borderRadius: "10px" }}
            src="\images\Home\미니 슬라이드 10.jpg"
            alt="slide10"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
