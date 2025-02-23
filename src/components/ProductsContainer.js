import style from "../css/productContainer.module.css";
import Product from "./Product";
import React, { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import flight from '../resource/ads/ec9bba198c534edb.webp'
import watch from '../resource/product/-original-imagxrhetgfuebnn.jpeg'
import speaker from '../resource/product/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg'
import pc from '../resource/product/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg'
import trimmer from '../resource/product/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg'
import proj from '../resource/product/zeb-pixaplay-63-zeb-mlp-7-13-05-zeb-pixaplay-63-zeb-mlp-7-led-original-imah8r9fgjfs27jh.jpeg'
import headset from '../resource/product/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg'
import bwatch from '../resource/product/boatWatch.jpeg'
import camera from '../resource/product/kids-camera-mini-rechargeable-and-shockproof-camera-creative-diy-original-imag5h7gdjzrvzdr.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductContainer() {
    const [swiperRef, setSwiperRef] = useState(null);

  const [slides] = useState([
    <Product image={headset} pname="Best Truewireless Headset" price="Grab Now"  />,
    <Product image={watch} pname="Fastrack Smartwatch" price="From ₹1,399"  />,
    <Product image={speaker} pname="Best Selling Mobile Speaker" price="From ₹499"  />,
    <Product image={pc} pname="Monitors" price="From ₹7,949"  />,
    <Product image={trimmer} pname="Best of Shavers" price="From ₹1,649"  />,
    <Product image={proj} pname="Projectors" price="From ₹9,999"  />,
    <Product image={bwatch} pname="Boat Smartwatches" price="From ₹999"  />,
    <Product image={camera} pname="Top Mirrorless Camera" price="Shop Now!"  />,
  ]);

  return (
    <>
      < div className={style.productContainer}>
        <Swiper
          className={style.container}
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={6}
          spaceBetween={30}
          navigation={true}
          virtual
              >
                  <h1 className={style.heading}>Best of Electronic</h1>
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
              
                  <a className={style.ads} href="##"><img className={style.img} src={flight} alt="" /></a>
        
      </div>
    </>
  );
}

export default ProductContainer;
