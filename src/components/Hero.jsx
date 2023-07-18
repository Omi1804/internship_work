import React from "react";
import img from "../assets/top-3.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero_content">
        <div className="hero_description">
          <h1 className="title">Discover. Connect. Collaborate.</h1>
          <p className="para">
            An ecosystem for Social media Influencers and Brands.
          </p>
          <div className="buttons">
            <button className="button1">I'M AN INFLUENCER</button>
            <button className="button2">I'M A BRAND</button>
          </div>
        </div>
        <img src={img} alt="" className="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
