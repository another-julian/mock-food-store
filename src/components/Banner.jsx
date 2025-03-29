import React from "react";
import "../styles/banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://res.cloudinary.com/dm5h3shoc/image/upload/v1743205440/hero_img_wuktwz.jpg"
        alt="Restaurant Banner"
        className="banner-image"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div className="banner-content">
        <h2 className="banner-title">Welcome to Our Restaurant</h2>
        <p className="banner-text">Experience the best cuisine in town</p>
        <button className="banner-button">Explore Menu</button>
      </div>
    </div>
  );
};

export default Banner;
