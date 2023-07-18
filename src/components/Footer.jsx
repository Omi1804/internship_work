import React from "react";
import "./footer.css";
import img from "../assets/wave-top.png";
import img1 from "../assets/wave-mid.png";
import img2 from "../assets/wave-bot.png";

const Footer = () => {
  return (
    <div className="footer waveWrapper">
      <div className="wave waveTop">
        <img src={img} alt="" />
      </div>
      <div className="wave waveMid">
        <img src={img1} alt="" />
      </div>
      <div className="wave waveBot">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Footer;
