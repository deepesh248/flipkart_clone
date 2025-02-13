import logo from "../resource/logo/fkheaderlogo_exploreplus-44005d.svg";
import search from "../resource/icon/magnifying-glass.png";
import StyleNav from "../css/navbar.module.css";
import profile from "../resource/icon/profile-52e0dc.svg";
import arrow from "../resource/icon/down-arrow.png";
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
  return (
    <>
      <div className={`${StyleNav.nav} ${StyleNav.cursor}`}>
        <a href="##"><img src={logo} alt="logo" /></a>
        <div>
          <div className={`${StyleNav.align} ${StyleNav.searchBar}`}>
            <img className={StyleNav.icon} src={search} alt="search" />
            <input
              onBlur={hideList}
              onFocus={showList}
              className={StyleNav.searchInput}
              type="text"
              placeholder="Search for Products, Brands and More"
            />
          </div>
          <div
            className={`${StyleNav.alignV} ${StyleNav.searchList}`}
            id="searchList"
          >
            <input
              className={`${StyleNav.searchInput} ${StyleNav.btnSearchBar} ${StyleNav.headingSearchBar}`}
              placeholder="Discover More"
              disabled
            />
            {lists.map((list, index) => (
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
        <div
          className={`${StyleNav.align} ${StyleNav.cursor}`}
          onMouseOver={rotateUp}
          onMouseOut={rotateDown}
        >
          <img className={StyleNav.icon} src={profile} alt="" />
          Login{" "}
          <img
            id="arrow"
            className={`${StyleNav.icon} ${StyleNav.arrow}`}
            src={arrow}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

function hideList() {
  document.getElementById("searchList").style.display = "none";
}

function showList() {
  document.getElementById("searchList").style.display = "inline";
}

function rotateUp() {
  document.getElementById("arrow").style.transform = "rotate(180deg)";
  document.getElementById("arrow").style.transition = "transform 0.2s";
}

function rotateDown() {
  document.getElementById("arrow").style.transform = "rotate(0deg)";
  document.getElementById("arrow").style.transition = "transform 0.2s";
}

export default Navbar;
