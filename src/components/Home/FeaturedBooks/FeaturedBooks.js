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
    <div className="container featured-main-container">
      {loader ? (
        <Loading />
      ) : (
        <>
          <h2>Featured Books</h2>
          <div className="featured-container mt-5">
            {featureds.map(({ _id, img, name, price, suppiler }) => (
              <div className="featured-item" key={_id}>
                <img src={img} alt="featured-img" />
                <p className="mt-2 fw-light fs-5">{name}</p>
                <p className="">{suppiler}</p>
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
