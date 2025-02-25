import logo from "../resource/logo/fkheaderlogo_exploreplus-44005d.svg";
import search from "../resource/icon/magnifying-glass.png";
import StyleNav from "../css/navbar.module.css";
import profile from "../resource/icon/profile-52e0dc.svg";
import arrow from "../resource/icon/down-arrow.png";
import myProfile from "../resource/icon/profile-52e0dc(1).svg";
import fkplus from "../resource/icon/fkplus-4ff29a.svg";
import order from "../resource/icon/orders-bfe8c4.svg";
import wishlists from "../resource/icon/wishlist.svg";
import rewards from "../resource/icon/rewards-fbd212.svg";
import giftcard from "../resource/icon/giftCard-bd87e1.svg";
import cart from "../resource/icon/header_cart-eed150.svg";
import store from "../resource/icon/Store-9eeae2.svg";
import dots from "../resource/icon/header_3verticalDots-ea7819.svg";
import adverise from "../resource/icon/advertise-298691.svg";
import notification from "../resource/icon/notificationPreferences-cfffaf.svg";
import download from "../resource/icon/downloadApp-2ea657.svg";
import helpcenter from "../resource/icon/helpcenter-7d90c0.svg";
import React, { useState } from "react";

function Navbar() {
  const [lists] = useState([
    "mobiles",
    "shoes",
    "t shirts",
    "laptops",
    "watches",
    "tv",
    "sarees",
  ]);
  const [loginDropDown] = useState([
    "My Profile",
    "Flipkart Plus Zone",
    "Orders",
    "Wishlists",
    "Rewards",
    "Gift Cards",
  ]);
  const icons = [myProfile, fkplus, order, wishlists, rewards, giftcard];
  const [help] = useState([
    "Notificaton Preferences",
    "24X7 Customer Care",
    "Advertise",
    "Download App",
  ]);
  const helpIcons = [notification, helpcenter, adverise, download];
  return (
    <>
      <div className={`${StyleNav.nav} ${StyleNav.cursor}`}>
        {/* Flipkart logo */}
        <a href="##">
          <img src={logo} alt="logo" />
        </a>

        {/* search bar section */}
        <div>
          {/* search bar */}
          <div className={`${StyleNav.align} ${StyleNav.searchBar}`}>
            <img className={StyleNav.icon} src={search} alt="search" />
            <input
              onBlur={() => hideList("searchList")}
              onFocus={() => showList("searchList")}
              className={StyleNav.searchInput}
              type="text"
              placeholder="Search for Products, Brands and More"
            />
          </div>
          {/* search bar drop down list */}
          <div
            className={`${StyleNav.alignV} ${StyleNav.searchList} ${StyleNav.border}`}
            id="searchList"
          >
            <input
              className={`${StyleNav.searchInput} ${StyleNav.btnSearchBar} ${StyleNav.headingSearchBar}`}
              placeholder="Discover More"
              disabled
            />
            {lists.map((list) => (
              <button
                className={`${StyleNav.searchInput} ${StyleNav.btnSearchBar}`}
              >
                <img
                  className={`${StyleNav.icon} ${StyleNav.align}`}
                  src={search}
                  alt="search"
                />
                {list}
              </button>
            ))}
          </div>
        </div>

        {/* login section */}
        <div className={`${StyleNav.loginsec} ${StyleNav.dropdown}`}>
          {/* login */}
          <div
            className={`${StyleNav.align} ${StyleNav.cursor} ${StyleNav.login}`}
          >
            <img className={StyleNav.icon} src={profile} alt="" />
            Login
            <img
              className={`${StyleNav.icon} ${StyleNav.arrow} ${arrow}`}
              src={arrow}
              alt=""
            />
          </div>
          {/* login dropdown */}
          <div
            className={`${StyleNav.border} ${StyleNav.dropdowncontent}`}
            id="loginList"
          >
            <div className={`${StyleNav.alignV} `} id="insideLoginList">
              <p className={StyleNav.signup}>
                New customer? &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <a className={StyleNav.signuplink} href="##">
                  Sign Up
                </a>
              </p>
              {loginDropDown.map((list, index) => (
                <a
                  href="##"
                  className={`${StyleNav.loginDrop} ${StyleNav.btnSearchBar}`}
                >
                  <img
                    className={`${StyleNav.icon} ${StyleNav.align}`}
                    src={icons[index]}
                    alt="login drop down"
                  />
                  {list}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* cart section */}
        <div className={`${StyleNav.align} ${StyleNav.cart}`}>
          <a className={`${StyleNav.link} ${StyleNav.align}`} href="##">
            <img className={StyleNav.icon} src={cart} alt="cart" />
            Cart
          </a>
        </div>

        {/* seller section */}
        <div className={`${StyleNav.align} ${StyleNav.store}`}>
          <a className={`${StyleNav.link} ${StyleNav.align}`} href="##">
            <img className={StyleNav.icon} src={store} alt="cart" />
            Become a Seller
          </a>
        </div>

        {/* help section */}
        <div
          className={`${StyleNav.align} ${StyleNav.helpLink} ${StyleNav.alignV} ${StyleNav.dropdown}`}
        >
          <img src={dots} className={`${StyleNav.helpDot} `} alt="help links" />
          <div
            className={`${StyleNav.border} ${StyleNav.dropdowncontent} ${StyleNav.helpdropdown}`}
          >
            <div className={`${StyleNav.alignV} `}>
              {help.map((list, index) => (
                <a
                  href="##"
                  className={`${StyleNav.loginDrop} ${StyleNav.btnSearchBar} ${StyleNav.helpDrop}  `}
                >
                  <img
                    className={`${StyleNav.icon} ${StyleNav.align} `}
                    src={helpIcons[index]}
                    alt="help drop down"
                  />
                  {list}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function hideList(id) {
  document.getElementById(id).style.display = "none";
}

function showList(id) {
  document.getElementById(id).style.display = "inline";
}

export default Navbar;
