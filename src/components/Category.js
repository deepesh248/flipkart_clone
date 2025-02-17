import fashion from "../resource/category/0d75b34f7d8fbcb3.png";
import wheelers from "../resource/category/05d708653beff580.png";
import mobiles from "../resource/category/22fddf3c7da4c4f4.png";
import electronics from "../resource/category/69c6589653afdb9a.png";
import kilos from "../resource/category/29327f40e9c4d26b.png";
import appliances from "../resource/category/0139228b2f7eb413.jpg";
import flight from "../resource/category/71050627a56b4693.png";
import furniture from "../resource/category/ab7e2b022a4587dd.jpg";
import toys from "../resource/category/dff3f7adcf3a90c6.png";
import arrow from '../resource/icon/down-arrow.png'
import style from '../css/category.module.css'


function Category() {
  return (
    <>
      <div className={style.container}>
        <ul className={style.ul}>
          <li className={style.categoryList}>
            <a className={style.category} href="##">
              <img src={kilos} alt="kilos" />
              Kilos
            </a>
          </li>
          <li className={style.categoryList}>
            <a className={style.category} href="##">
              <img src={mobiles} alt="mobiles" />
              Mobiles
            </a>
          </li>
          <li className={`${style.dropdown} ${style.categoryList}`}>
            <span className={style.category}>
              <img src={fashion} alt="fashion" />
              <div>Fashion&nbsp; <img className={style.icon} src={arrow} alt="arrow"/></div>
            </span>
            <div className={style.dropdownContainer}>
            <ul className={style.dropdownUl}> 
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Bottom Wear <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Top Wear <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men Footwear <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Footwear <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Watches and Accessories <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Western <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bags, Suitcases & Luggage <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kids <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Essentials <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Winter <img className={style.iconCat} src={arrow} alt="arrow"/></a></li>
              </ul>
              <ul className={`${style.dropdownUl} ${style.dropdownSubUl} ${style.fashion}`}> 
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">More in Men's Top Wear </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's T-Shirts </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Casual Shirts </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Formal Shirt </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Kurtas</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Ethnic Sets </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Blazers </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Raincoat </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Windcheaters </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Suit</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Fabrics</a></li>
            </ul>
            </div>
          </li>
          <li className={`${style.dropdown} ${style.categoryList}`}>
            <span className={style.category}>
              <img src={electronics} alt="electronics" />
              <div>Electronics&nbsp; <img className={style.icon} src={arrow} alt="arrow"/></div>
            </span>
          </li>
          <li className={`${style.dropdown} ${style.categoryList}`}>
            <span className={style.category}>
              <img src={furniture} alt="home & furniture" />
              <div>Home & Furniture&nbsp; <img className={style.icon} src={arrow} alt="arrow"/></div>
            </span>
          </li>
          <li className={style.categoryList}>
            <a className={style.category} href="##">
              <img src={appliances} alt="appliances" />
              Appliances
            </a>
          </li>
          <li className={style.categoryList}>
            <a className={style.category} href="##">
              <img src={flight} alt="flight bookings" />
              Flight Bookings
            </a>
          </li>
          <li className={`${style.dropdown} ${style.categoryList}`}>
            <span className={style.category}>
              <img src={toys} alt="beauty, toys & more" />
              <div>Beauty, Toys & More&nbsp; <img className={style.icon} src={arrow} alt="arrow"/></div>
            </span>
          </li>
          <li className={`${style.dropdown} ${style.categoryList}`}>
            <span className={style.category}>
              <img src={wheelers} alt="two wheelers" />
              <div>Two Wheelers &nbsp;<img className={style.icon} src={arrow} alt="arrow"/></div>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Category;
