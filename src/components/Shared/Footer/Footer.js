import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  return (
    <div className="footer-container py-3">
      <p>copyright &copy; {getYear}</p>
    </div>
  );
};

export default Footer;
