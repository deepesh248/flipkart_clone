import "../css/slidingImage.css";
import first from "../resource/sliding image/373914b13f0b4dfb.webp";
import second from "../resource/sliding image/5dbe24535d092e63.webp";
import third from "../resource/sliding image/43b95b106e1f98b6.webp";
import fourth from "../resource/sliding image/d2b59b1a3fa1c4d0.webp";
import fifth from "../resource/sliding image/201f71ee60cd9f3b.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SlidingImage() {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
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
          <SwiperSlide>
            <a href="##">
              <img src={fifth} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="##">
              <img src={first} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="##">
              <img src={second} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="##">
              <img src={third} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="##">
              <img src={fourth} alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SlidingImage;
