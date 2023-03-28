import React from "react";
import user3 from "../../images/netflixlogo.png";

import "./MenuBar.css";

const MenuBar = () => {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <img src={user3} alt="Logo" style={{ width: "90px" }} />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/AboutUs">About Us</a>
          </li>
          <li>
            <a href="/ContactUs">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
