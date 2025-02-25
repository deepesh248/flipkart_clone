import style from "../css/productContainerThree.module.css";
import ProductTwo from "./ProductTwo";
import arrow from "../resource/icon/sidearrow.png";

function ProductContainerThree(props) {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <a href="##">
            <p>{props.title}</p> <img src={arrow} alt="" />
          </a>
        </div>
        <div className={style.productContainer}>
          {console.log(props.products[0])}
          {props.products[0].map((list) => {
            return <ProductTwo product={list} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductContainerThree;
