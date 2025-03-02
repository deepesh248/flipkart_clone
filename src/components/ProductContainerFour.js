import smartphone from "../resource/ads/smartphone.png";
import ProductContainerThree from "./ProductContainerThree";
import style from "../css/productContainerFour.module.css";
import { useState } from "react";
import sofabed from "../resource/product/-original-imagm9ckhma9u8a3.jpeg";
import mattresses from "../resource/product/6-48-75-skbnnldb75x48x06-bonnell-spring-peps-original-imaevnpjqz2mwyrz.jpeg";
import bed from "../resource/product/king-na-rosewood-sheesham-bkwl05nhbs0401d1p-flipkart-perfect-original-imaf97cwhvgnwg95.jpeg";
import sofa from "../resource/product/left-facing-180-34-aqua-blue-241-3-polyester-80-steffan-l-sheped-original-imagf9zer8ptqhrh.jpeg";

function ProductContainerFour() {
  const products = useState([
    [mattresses, "Mattresses", "Special Offer"],
    [sofa, "Sofa & Sectional", "Min. 50% Off"],
    [bed, "Beds", "Min. 40% Off"],
    [sofabed, "Sofa Beds", "Min. 50% Off"],
  ]);
  return (
    <>
      <div className={style.container}>
        <ProductContainerThree products={products} title="Furniture Deals" />
        <div className={style.img}>
          <a href="##"><img src={smartphone} alt="smartphone" /></a>
        </div>
      </div>
    </>
  );
}

export default ProductContainerFour;
