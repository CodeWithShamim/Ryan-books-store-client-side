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
          <img className="img-md-fluid" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h2 className="">You are your best thing.</h2>
            <p>If you don’t like to read, you haven’t found the right book.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="h-50" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h2>And, now that you don’t have to be perfect you can be good.</h2>
            <p>
              Many people, myself among them, feel better at the mere sight of a
              book.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="h-50" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2>A friend may be waiting behind a stranger’s face.</h2>
            <p>
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
