import logo from "../resource/logo/fkheaderlogo_exploreplus-44005d.svg";
import search from "../resource/icon/magnifying-glass.png";
import StyleNav from "../css/navbar.module.css";
import React, { useState } from 'react';

function Navbar() {
    const [lists] =
        useState(["mobiles", "shoes", "t shirts", "laptops", "watches", "tv","sarees"]);
  return (
    <>
      <div className={StyleNav.nav}>
        <img src={logo} alt="logo" />
        <div>
          <div className={`${StyleNav.align} ${StyleNav.searchBar}`}>
            <img className={StyleNav.icon} src={search} alt="search" />
            <input
              className={StyleNav.searchInput}
              type="text"
              placeholder="Search for Products, Brands and More"
            />
          </div>
                  <div className={StyleNav.alignV}>
                      <input className={`${StyleNav.searchInput} ${StyleNav.btnSearchBar} ${StyleNav.headingSearchBar}`} placeholder="Discover More" disabled/>
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
      </div>
    </>
  );
}


export default Navbar;
