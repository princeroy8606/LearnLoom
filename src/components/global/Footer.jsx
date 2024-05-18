import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] h-[20rem] bg-white">
      <div className="flex justify-around items-center w-full h-[80%]">
        <div className="footer-logo">
          <h1 className="text-[2rem] font-semibold">LearnLoom</h1>
          <p>Its Yours To Take</p>
        </div>
        <div className="footer-links hidden md:block">
          <p style={{ fontSize: "1.5rem", fontWeight: "300" }}>Navigation</p>
          <h1 to="/">Home</h1>
          <h1 to="/about-us">About Us</h1>
          <h1 to="/services">Services</h1>
        </div>
        <div className="footer-links hidden md:block">
          <p style={{ fontSize: "1.5rem", fontWeight: "300" }}>Contact us</p>
          <p>24 Pasafic Avanue , India, </p>
          <p>princeroy8606@gmail.com</p>
          <p>Ph: 8606340493</p>
        </div>
        <div style={{ width: "fit-content" }}>
          <div className="flex flex-col gap-4" style={{ alignSelf: "flex-end" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: "300" }}>
              Follow us on
            </p>
            <a href="#" className="flex flex-col gap-4">
              <i className="fab fa-facebook">
                {/* <img src={assets.Images.facebook} className="social-icon-img" /> */}
              </i>
            </a>
            <a href="#" className="flex flex-col gap-4">
              <i className="fab fa-twitter">
                {/* <img src={assets.Images.twitter} className="social-icon-img" /> */}
              </i>
            </a>
            <a href="#" className="flex flex-col gap-4">
              <i className="fab fa-instagram">
                {/* <img
                  src={assets.Images.instagram}
                  className="social-icon-img"
                /> */}
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-10 text-sm text-gray-500 flex justify-center items-center border-t border-gray-300">
        <p>2024 LearnLoom Inc. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
