import style from '../css/productContainerFive.module.css'
import ProductContainerThree from './ProductContainerThree'
import { useState } from "react";

import sofabed from "../resource/product/-original-imagm9ckhma9u8a3.jpeg";
import mattresses from "../resource/product/6-48-75-skbnnldb75x48x06-bonnell-spring-peps-original-imaevnpjqz2mwyrz.jpeg";
import bed from "../resource/product/king-na-rosewood-sheesham-bkwl05nhbs0401d1p-flipkart-perfect-original-imaf97cwhvgnwg95.jpeg";
import sofa from "../resource/product/left-facing-180-34-aqua-blue-241-3-polyester-80-steffan-l-sheped-original-imagf9zer8ptqhrh.jpeg";
import shoes from "../resource/product/-original-imagn9na9ysruzgs.jpeg";
import wdress from "../resource/product/l-aa-0171white-pink-floral-yoke-dress-aayu-original-imaggd2hszpruetz.jpeg";
import skirt from "../resource/product/xl-1-sfskrt3086-sassafras-original-imafuhwxfds8hgpm.jpeg";
import pant from "../resource/product/xxl-men-s-track-pant-bharath-fashion-original-imagrgymtx7knp7m.jpeg";
import airfresher from "../resource/product/10-godreg-aer-frshner-gel-skynex-original-imagegfwhgxpukvj.jpeg";
import glove from "../resource/product/free-arm-gy-auto-hub-original-imafvsutr6gkvsuf.jpeg";
import carcover from "../resource/product/no-volkswagen-polo-white-navy-blue-uk-blue-original-imagcyuepru6tvkj.jpeg";
import helmet from "../resource/product/sba-1-cesar-sba-1-cesar-full-face-steelbird-original-imafxyhzwrhqyvcx.jpeg";
import frontwashing from "../resource/product/-original-imah2d6gj2butauy.jpeg";
import doubledoorfridge from "../resource/product/-original-imah2gh9duncmhmk.jpeg";
import singledoorfridge from "../resource/product/-original-imah7yvayuuhuaxc.jpeg";
import washingmachine from "../resource/product/-original-imahf5wfbdc7kzh7.jpeg";



function ProductContainerFive() {
    const products = useState([
        [mattresses, "Mattresses", "Special Offer"],
        [sofa, "Sofa & Sectional", "Min. 50% Off"],
        [bed, "Beds", "Min. 40% Off"],
        [sofabed, "Sofa Beds", "Min. 50% Off"],
    ]);
    
    const products2 = useState([
        [helmet, "Helmet", "From ₹699"],
        [glove, "Riding Glove", "Upto 80% Off"],
        [carcover, "Car Body Cover", "From ₹299"],
        [airfresher, "Car Air Fresher", "From ₹199"],
      ]);

      const products1 = useState([
        [shoes, "Puma, Adidas & reebok", "Min. 40% Off"],
        [wdress, "Women Dress", "50%-80% Off"],
        [skirt, "Women's Skirts", "Upto 70% Off"],
        [pant, "United Colors", "Upto 80% Off"],
      ]);
    
      const products3 = useState([
        [singledoorfridge, "Single Door Refrigerators", "From ₹7,240"],
        [doubledoorfridge, "Double Door Refrigerators", "From ₹16,129"],
        [washingmachine, "Washing Machine", "Buy Now"],
        [frontwashing, " Front Load Washing Machine", "Buy Now"],
      ]);
    return (
        <>
            <div className={style.container}>
            <ProductContainerThree products={products1} title="Fashion Top Deals" />
            <ProductContainerThree products={products2} title="Vehicles Accessories" />
            <ProductContainerThree products={products3} title="Top Deal On Appliances" />
            </div>
        </>
    )
}

export default ProductContainerFive;