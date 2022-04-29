import React from "react";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  return (
    <div>
      <p>copyright &copy; {getYear}</p>
    </div>
  );
};

export default Footer;
