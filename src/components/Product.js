import style from "../css/product.module.css"
import img from '../resource/product/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg'

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
    )
}

export default Product;