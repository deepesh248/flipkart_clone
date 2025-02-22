import style from "../css/product.module.css"
import img from '../resource/product/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg'

function Product() {
    return (
        <>
            <div className={style.product}>
                <a href="##">
                    <img src={img} alt="" />
                    <p>Best Truewireless Headset </p>
                    <h4>Grab Now</h4>
            </a>
            </div>
        </>
    )
}

export default Product;