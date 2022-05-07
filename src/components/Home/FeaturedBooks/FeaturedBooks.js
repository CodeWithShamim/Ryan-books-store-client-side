import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import "./FeaturedBooks.css";

const FeaturedBooks = () => {
  const [featureds, setFeatureds] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const loadFeatured = async () => {
      setLoader(true);
      const { data } = await axios(
        "https://ryan-books-store.herokuapp.com/getFeatured"
      );
      setFeatureds(data);
      setLoader(false);
      console.log(data);
    };
    loadFeatured();
  }, []);

  return (
    <div className=" featured-main-container p-1 p-md-5">
      {loader ? (
        <Loading />
      ) : (
        <>
          <h2 className="pt-5 pt-md-0">Featured Books</h2>
          <div className="featured-container mt-5">
            {featureds.map(({ _id, img, name, price, suppiler }) => (
              <div
                className="featured-item"
                key={_id}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img src={img} alt="featured-img" className="img-fluid" />
                <p className="text-danger mt-2 mb-0">Best book</p>
                <p className="my-0 fs-5">{name}</p>
                <p className="my-0 text-secondary">{suppiler}</p>
                <p className="fw-bold fs-5">{price}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedBooks;
