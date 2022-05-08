import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="reviews-items">
        <p>Testimonial</p>
        <h1>Kinds Words From Customers</h1>
      </div>

      {/* _________carousel card item start__________ */}
      <div className="carousel-card-box container">
        <div className="card">
          <p>
            I’ve read this book online and this is so disappointing the way the
            book ended. Where is the rest of the story.
          </p>

          <div className="review-man">
            <img
              src="https://i.postimg.cc/sDJsdTsV/review1.webp"
              className="img-fluid review-img"
              alt=""
            />
            <p>Sales manager</p>
          </div>
        </div>
        <div className="card">
          <p>
            I’ve read this book online and this is so disappointing the way the
            book ended. Where is the rest of the story.
          </p>

          <div className="review-man">
            <img
              src="https://i.postimg.cc/K8vFZt8t/review2.webp"
              className="img-fluid review-img"
              alt=""
            />
            <p>Sales manager</p>
          </div>
        </div>
        <div className="card">
          <p>
            I’ve read this book online and this is so disappointing the way the
            book ended. Where is the rest of the story.
          </p>
          <div className="review-man">
            <img
              src="https://i.postimg.cc/nhRxMMXg/review3.webp"
              className="img-fluid review-img"
              alt=""
            />
            <p>Sales manager</p>
          </div>
        </div>
      </div>

      {/* _________carousel card item end */}
    </div>
  );
};

export default Reviews;
