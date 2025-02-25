import style from "../css/product.module.css";

function Product(props) {
  return (
    <>
      <div className={style.product}>
        <a href="##">
          <img src={props.image} alt="" />
          <p>{props.pname} </p>
          <h4>{props.price}</h4>
        </a>
      </div>
    </>
  );
}

export default Product;
