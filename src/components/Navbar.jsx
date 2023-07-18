import React from "react";
import logo from "../assets/freeskout.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="freeshout" className="logo_img" />
        </div>
        <div className="nav_options">
          <ul className="nav_list">
            <li className="nav_items">BRANDS</li>
            <li className="nav_items">INFLUENCERS</li>
            <li className="nav_items">PRICING</li>
            <li className="nav_items">BLOGS</li>
            <li className="nav_items">CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
