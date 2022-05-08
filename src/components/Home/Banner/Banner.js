import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/1.jpg";
import banner2 from "../../../images/banner/2.jpg";
import banner3 from "../../../images/banner/3.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <h2 className="title">Welcome To Ryan Books Store</h2>
            <p className="description">
              We believe that reading books are essential to a healthy culture.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h2 className="title">Your Books From The Best Writer</h2>
            <p className="description">
              Many people, myself among them, feel better at the mere sight of a
              book.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2 className="title">You Are Your Best Thing.</h2>
            <p className="description">
              The library is inhabited by spirits that come out of the pages at
              night.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
