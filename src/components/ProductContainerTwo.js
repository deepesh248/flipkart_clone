import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import Product from "./Product";
import style from "../css/productContainerTwo.module.css";
import style2 from "../css/productContainer.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//image import
import coffee from "../resource/product/-original-imagbwf3wvhzfh5z.jpeg";
import mic from "../resource/product/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg";
import pencil from "../resource/product/119766-flair-original-imag9nzubznagufg.jpeg";
import cycle from "../resource/product/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg";
import batman from "../resource/product/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg";
import treadmill from "../resource/product/ft098-steel-motorized-ft98-steel-motorized-motorized-fitkit-original-imafuerskytashcz.jpeg";
import puzzle from "../resource/product/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg";
import book from "../resource/product/then-she-was-gone-original-imah4hz2mhrfgkpy.jpeg";

function ProductContainerTwo() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides] = useState([
    <Product image={coffee} pname="Coffee Powder" price="Upto 80% Off" />,
    <Product image={pencil} pname="Top Selling Stationery" price="From ₹49" />,
    <Product image={cycle} pname="Geared Cycles" price="Up to 70% Off" />,
    <Product
      image={batman}
      pname="Best of Action Toys"
      price="Up tp 70% Off"
    />,
    <Product image={mic} pname="Microphones" price="Up to 70% Off" />,
    <Product
      image={treadmill}
      pname="Treadmill, Excercise Bikes DT"
      price="Up to 70% Off"
    />,
    <Product image={puzzle} pname="Puzzles" price="FromUp to 40% Off" />,
    <Product image={book} pname="Fiction Books" price="From ₹49" />,
  ]);
  return (
    <>
      <div className={style2.productContainer}>
        <Swiper
          className={`${style2.container} ${style.container}`}
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={7}
          spaceBetween={30}
          navigation={true}
          virtual
        >
          <h1 className={style2.heading}>Beauty, Food, Toys & more</h1>
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductContainerTwo;
