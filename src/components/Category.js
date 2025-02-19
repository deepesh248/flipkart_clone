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
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Top Wear <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Men's Top Wear </a></li>
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
            </ul></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Bottom Wear <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Men's Bottom Wear </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Jeans </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Trousers </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Trackpants </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Shorts</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Cargos </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Threefourths </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Pyjamas & Loungepants </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Dhoti </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Ethnic Pyjama</a></li>
                </ul></a></li>
                <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Ethnic <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Women Ethnic </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Sarees </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Kurtas & Kurties </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Kurta Sets & Salwar Suits </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Dresses </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Dress Materials </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Gowns</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Lehenga Cholis </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Leggings & Patialas </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Palazzos & Shararas </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Blouse </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Dupatta</a></li>
            </ul></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men Footwear <img className={style.iconCat} src={arrow} alt="arrow"/> <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Men Footwear </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Sports Shoes </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Casual Shoes </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Sandals & Floaters </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Slippers & Flip Flops</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Formal Shoes </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Ethnic Shoes </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Care </a></li>
            </ul></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Footwear <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Women Footwear </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Flats </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Heels </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Wedges </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Slipper Flip Flops </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Casual Shoes </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Sports Shoes</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Ballerinas </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Ethnic Shoes </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Sneakers </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Walking Shoes </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Boots</a></li>
            </ul></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Watches and Accessories <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Watches and Accessories </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men & Women Watches</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men & Women Sunglasses</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Wallets </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men & Women Belts</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men & Women Jewellery</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Precious Articles </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kids Accessories </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Fashion Jewellery </a></li>
            </ul></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Western <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Women Western </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Tops </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Dresses </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women T-shirts & Polo T-shirts </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Jeaps </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Nighties & Night Dresses </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Nightsuit</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Track Pants </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Trouser</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Jumpsuit </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women ShapeWear </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Sports Bra</a></li>
            </ul></a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bags, Suitcases & Luggage <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Bags, Suitcases & Luggage</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bags & Backpacks</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Suitcases & Trolleys</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Dufflebags</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Rucksacks</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Handbags</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Sling bags</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women's Clutches & Wallets</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Messenger Bags</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Travel Accessories</a></li>
            </ul>
            </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kids <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Kids</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Girls Dresses</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys & Girls T-shirts</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys & Girls Combosets</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys & Girls Ethnic Wear</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys & Girls Jeans</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys & Girls Shorts</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys & Girls Trackpants</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys & Girls Innerwear</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Infant Wear</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kids Slippers Flip Flops</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kids Sports Shoes</a></li>
            </ul>
            </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Essentials <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Essentials</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Briefs & Trunks</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Vests</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Boxers</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Lingerie Sets</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Bra</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Panty</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Sarees</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Kurtas</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Kurta Sets & Salwar Suits</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys Innerwear</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Girls Innerwear</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Slippers Flip Flops</a></li>
            </ul>
            </a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Winter <img className={style.iconCat} src={arrow} alt="arrow"/><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
              <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Winter</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Jackets</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Sweatshirts</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Sweaters</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Thermals</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women’s Jackets</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women's Sweatshirts</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women’s Sweaters & Cardigans</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women's Shrugs</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kids Sweatshirts</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women Kurtas</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Boys Innerwear</a></li>
              <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kids Jackets</a></li>
            </ul>
            </a></li>
              </ul>
              
            </div>
          </li>
          <li className={`${style.dropdown} ${style.categoryList}`}>
            <span className={style.category}>
              <img src={electronics} alt="electronics" />
              <div>Electronics&nbsp; <img className={style.icon} src={arrow} alt="arrow"/></div>
            </span>
            <div className={style.dropdownContainer}>
            <ul className={style.dropdownUl}> 
               <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Audio
                    <img className={style.iconCat} src={arrow} alt="arrow" /><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Audio</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bluetooth Headphones</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Wired Headphones</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">True Wireless Earbuds</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bluetooth Speakers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Soundbars</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Home Theatres</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">TV Streaming Device</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Remote Control</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">DTH Set Top Box</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Headphones Pouch & Case Covers</a></li>
</ul>

                  </a>
                                </li>
                                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Electronics GST Store
                    
                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Cameras & Accessories
                    <img className={style.iconCat} src={arrow} alt="arrow" /><ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Cameras & Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">DSLR & Mirrorless</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Sports & Action</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Point & Shoot</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Instant Cameras</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Camcorders</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Camera Tripods</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Camera Lenses</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Drone</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Flashes</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gimbals</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Binoculars</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Other Camera Accessories</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Computer Peripherals
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Computer Peripherals</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Printers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Monitors</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Projectors</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Portable Projectors</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Ink Cartridges</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Ink Bottles</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Receipt Printers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Lamination Machines</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Note Counting Machines</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Barcode Scanners</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Currency Detectors</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Gaming
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Gaming</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gaming Consoles</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gaming Mouse</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gaming Keyboards</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gamepads</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Accessory Kits</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gaming Accessories Combo</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gaming Mousepads</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Membership Cards</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Controllers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Other Gaming Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gaming Components</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Health & Personal Care
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Health & Personal Care</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Trimmers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Shavers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Hair Straighteners</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Hair Dryers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Epilators</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Glucometers and Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Blood Pressure Monitors</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Digital Thermometers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Weighing Scales</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Nebulizers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Vaporizers</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Laptop Accessories
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Laptop Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mouse</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Laptop Keyboards</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Router</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Data Cards</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">UPS</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">USB Gadgets</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Security Software</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Laptop Battery</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Laptop Adapter</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Wireless USB Adapter</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Processor</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Other Accessories</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Laptop and Desktop
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Laptop and Desktop</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Laptops</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gaming Laptops</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Desktop PCs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All In One PCs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mini PCs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Tower PCs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">PC Finder</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Mobile Accessory
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Mobile Accessory</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Plain</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Designer</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Screen Guards</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Camera Lens Protectors</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Tablet Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile Cable</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile Charging & Mobile Charger</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile Pouches</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile Flash</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile Holder</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile USB Gadget</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile Accessories Combos</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Powerbank
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Powerbank</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Powerbank</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Smart Home Automation
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Smart Home Automation</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Assistants</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Lights</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Cameras</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Switches</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Door Locks</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Sensors & Alarms</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Smart Wearables
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Smart Wearables</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Bands</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Glasses</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Watches</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Trackers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Smart Rings</a></li>
</ul>

                  </a>
                </li>
                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Storage
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Storage</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile Memory Card</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Computer Storage Pendrive</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mobile Storage Pendrive</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">External Hard Drive</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Internal Hard Drive</a></li>
</ul>

                  </a>
                                </li>
                                <li className={style.dropdownList}>
                  <a className={style.dropdownCat} href="##">
                    Tablets
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Tablets</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Tablets With Call Facility</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Tablets Without Call Facility</a></li>
</ul>

                  </a>
                </li>
              </ul>
              </div>
          </li>
          <li className={`${style.dropdown} ${style.categoryList}`}>
            <span className={style.category}>
              <img src={furniture} alt="home & furniture" />
              <div>Home & Furniture&nbsp; <img className={style.icon} src={arrow} alt="arrow"/></div>
            </span>
            <div className={style.dropdownContainer}>
              <ul className={style.dropdownUl}> 
              <li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Home Furnishings
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Home Furnishings</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bed Linens & Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bath Linen</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Floor Coverings</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Covers & Protectors</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cushions & Pillows</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kitchen Linen Sets</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Table Linen Sets</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Sofa & Curtain Fabrics</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Branded Collections</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Furniture
  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Living Room Furniture
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Living Room Furniture</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Sofa Sets & Sectionals</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">TV Units</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Dining Sets</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Sofa Beds</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Recliners</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Living Room Chairs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cabinet Drawers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bookshelves</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Shoe Racks</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Kitchen & Dining
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Kitchen & Dining</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cookware</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Knives, Choppers & Cutters</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Stoves & Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Kitchen Tools</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Tableware & Dinnerware</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Containers & Kitchen Storage</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Barware</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Hand Juicers & Grinders</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Disposable Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Outdoor Cooking</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Bedroom Furniture
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Bedroom Furniture</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Beds</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Wardrobes</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Side Tables</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">TV Units</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Office Tables</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Office Chairs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bookshelves</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bar Cabinets</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bar Stools</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Rocking Chairs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Benches</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Space Saving Furniture
  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Home Decor
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Home Decor</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Lightings</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Stickers & Wallpapers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Paintings & Posters</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Clocks</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Showpieces & Decoratives</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Wall Decor</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Flowers & Vases</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Home Fragrances</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Windchimes & Dream Catchers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Photo Frames & Albums</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Diyas, Candles & Holders</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Festive & Gifting</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Tools & Utility
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Tools & Utility</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Hand Tools</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Power Tools</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Measuring Tools</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Home Storage & Organizers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Umbrellas</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Appliance Trolley & Stands</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cloth Dryer Stand</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Appliance Filter & Cartridges</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Laundry Organization</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Lock & Security</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Fire & Personal Safety</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Paint Supplies & Equipment</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Work Space Furniture
  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Kids Furniture
  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Lightings & Electricals
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Lightings & Electricals</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bulbs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Emergency Lights</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Torches</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Tubelights</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Extension Cords</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Outdoor Lamps</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Batteries</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Electrical Wire</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Electrical Socket</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Electric Door Bell</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Solar Lights, Panels & Batteries</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Electrical Hardware</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Cleaning & Bath
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Cleaning & Bath</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Mops</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cleaning Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Household Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Air Fresheners</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cleaning Gloves</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Liquid Detergents</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Taps & Faucets</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Toothbrush Holder</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bathroom Rack & Shelves</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Shower Heads</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bath & Kitchen Fittings</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bathroom Accessories</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Pet & Gardening
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Pet & Gardening</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Plant Seeds</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Soil & Manure</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Pots & Planters</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Plant & Planters</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Garden Tool Set</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Watering Equipments</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Dog Essentials</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cat Essentials</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Fish & Aquatic</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Pet Grooming & Hygiene</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Pet Toys</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Pet Health & Safety</a></li>
</ul>

  </a>
</li>

              </ul>
              </div>
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
            <div className={style.dropdownContainer}>
              <ul className={style.dropdownUl}> 
              <li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Beauty & Personal Care
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Beauty & Personal Care</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bath & Oral Care</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Personal Hygiene</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Eye Makeup</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Face</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Lip Makeup</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Hair Care</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bath Essentials</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women's Personal Hygiene</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Body & Skin Care</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Top Brand Deals</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Men's Grooming
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Men's Grooming</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Face Washes</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Beard Oils</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Hair Styling</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Shaving Essentials</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Aftershave</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Face Creams & Face Packs</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Soaps & Bodywashes</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Men's Grooming Combos</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Wellness</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Food & Drinks
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Food & Drinks</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Nuts & Dry Fruits</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cooking Essentials</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Breakfast Items</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Snacks Corner</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Jams, Spreads & Honey</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Ready to Cook & Eat</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Chocolates</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baking Essentials</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Sweets Store</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Top Brand Deals</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Nutrition & Health Care
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Nutrition & Health Care</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Ayurvedic Supplements</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Health Drinks</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Vitamin Supplements</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Protein Supplements</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Women's Safety</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Home Medicines</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Home Medical Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Healthcare Combos</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Professional Medical Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Top Brand Deals</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Baby Care
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Baby Care</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Diapers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Wipes</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Bath & Grooming</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Gift Sets & Combo</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Medical & Health Care</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Nursing & Breast Feeding</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Feeding Bottles, Utensils & Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Food</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Bedding</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Gear</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Top Brand Deals</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Toys & School Supplies
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Toys & School Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Remote Control Toys</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Soft Toys</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Puzzles</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Board Games</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Learning & Educational Toys</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cars & Vehicles</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Baby Toys</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gifting Toys</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">School Bags & Backpacks</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">School Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Top Brand Deals</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Sports & Fitness
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Sports & Fitness</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Badminton</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cricket</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Cycling</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Football</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Fitness Equipments</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Supports</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Shakers & Sippers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Gym Gloves</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Dumbbells</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Yoga</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Top Brand Deals</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Books
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Books</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Test prep</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Academics</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Literature & Fiction</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Non Fiction</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Young Readers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Audio Books</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Music
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Music</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Musical Instruments</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Music & TV Shows</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Acoustic Guitars</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Keys and Synthesizer</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Microphones</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Studio and Stage Equipment</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">String Instruments</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Indian Instruments</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Wind Instruments</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Musical Keyboards</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Stationery & Office Supplies
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Stationery & Office Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Pens & Gift Sets</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Notebooks & Diaries</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Art Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Calculators</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Keychains</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Card Holders</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Desk Organizers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Office Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Office Equipments</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Party Supplies</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Top Brand Deals</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Auto Accessories
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Auto Accessories</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Bike Essentials</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Car & Bike Covers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Car Air Freshener</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Car Bluetooth Device</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Car Lubricant</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Vehicle Washing & Cleaning Products</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Tyres</a></li>
</ul>

  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Safety & Hygiene Essentials
                    <img className={style.iconCat} src={arrow} alt="arrow" />
                    <ul className={`${style.dropdownUl} ${style.dropdownSubUl}`}> 
  <li className={style.dropdownList}><a className={` ${style.dropdownCat} ${style.dropdownHeading}`} href="##">More in Safety & Hygiene Essentials</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">View All</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Sanitizers</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Hand Wash</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">PPE Kits</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Face Shields</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">LIV Sterilizer Box</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Safety Goggles</a></li>
  <li className={style.dropdownList}><a className={style.dropdownCat} href="##">Vitamins for Immunity</a></li>
</ul>

  </a>
</li>

              </ul>
              </div>
          </li>
          <li className={`${style.dropdown} ${style.categoryList}`}>
            <span className={style.category}>
              <img src={wheelers} alt="two wheelers" />
              <div>Two Wheelers &nbsp;<img className={style.icon} src={arrow} alt="arrow"/></div>
            </span>
            <div className={style.dropdownContainer}>
              <ul className={style.dropdownUl}> 
                <li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Petrol Vehicles
    
  </a>
</li>
<li className={style.dropdownList}>
  <a className={style.dropdownCat} href="##">
    Electric Vehicles
    
  </a>
</li>

              </ul>
              </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Category;
