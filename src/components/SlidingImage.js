import style from "../css/slidingImage.module.css";
import first from "../resource/sliding image/373914b13f0b4dfb.webp";
import second from "../resource/sliding image/5dbe24535d092e63.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

function SlidingImage() {
  return <>
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
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><a className={style.img} href="##"><img src={first} alt="" /></a></SwiperSlide>
        <SwiperSlide><a className={style.img} href="##"><img src={second} alt="" /></a></SwiperSlide>
      </Swiper>
    </div>
  </>;
}

export default SlidingImage;
