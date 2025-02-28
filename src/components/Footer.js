import style from "../css/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faStar, faGift, faQuestion } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import payment from '../resource/icon/payment-method-c454fb.svg'

function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.upper}>
          <div>
            <h2>ABOUT</h2>
            <a href="##">Contact Us</a>
            <a href="##">About Us</a>
            <a href="##">Careers</a>
            <a href="##">FlipKart Stories</a>
            <a href="##">Press</a>
            <a href="##">Coporate Information</a>
          </div>
          <div>
            <h2>GROUP COMPANIES</h2>
            <a href="##">Myntra</a>
            <a href="##">Cleartrip</a>
            <a href="##">Shopsy</a>
          </div>
          <div>
            <h2>HELP</h2>
            <a href="##">Payments</a>
            <a href="##">Shipping</a>
            <a href="##">Cancellation & Returns</a>
            <a href="##">FAQ</a>
          </div>
          <div>
            <h2>CONSUMER POLICY</h2>
            <a href="##">Cancellation & Returns</a>
            <a href="##">Terms Of Use</a>
            <a href="##">Security</a>
            <a href="##">Privacy</a>
            <a href="##">Sitemap</a>
            <a href="##">Grievance Redressal</a>
            <a href="##">EPR Compliance</a>
                  </div>
                  <div className={style.line}></div>
          <div>
            <h2>Mail Us:</h2>
            <p>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103. Kamataka, India
            </p>
            <div className={style.social}>
              <h2>Social</h2>
              <div>
                <a href="##">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="##">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="##">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="##">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2>Registered Office Address:</h2>
            <p>
              Flipkart Intemet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India <br /> CIN :
              U51109KA2012PTC066107 <br /> Telephone: 044-45614700/044-67415800
            </p>
          </div>
              </div>
              <div className={style.lower}>
                  <div>
                      <div className={style.bline}></div>
                      <div className={style.content}>
                          <a href="##"><FontAwesomeIcon className={style.icon} icon={faStore} /> Become a Seller</a>
                          <a href="##"><FontAwesomeIcon className={style.icon} icon={faStar} /> Advertise</a>
                          <a href="##"><FontAwesomeIcon className={style.icon} icon={faGift} /> Gift Cards</a>
                          <a href="##"><FontAwesomeIcon className={style.icon} icon={faQuestion} /> Help Center</a>
                          <p>© 2007-2025 Flipkart.com</p>
                          <img src={payment} alt="payment" />
                      </div>
                  </div>
              </div>
      </div>
    </>
  );
}

export default Footer;
