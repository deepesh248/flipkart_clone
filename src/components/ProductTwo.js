import style from "../css/product.module.css";
import style2 from "../css/productTwo.module.css";

function ProductTwo(props) {
  return (
    <>
      <div className={`${style.product} ${style2.product}`}>
        <a href="##">
          <img src={props.product[0]} alt="" />
          <p>{props.product[1]}</p>
          <h4>{props.product[2]}</h4>
        </a>
      </div>
    </>
  );
}

export default ProductTwo;
