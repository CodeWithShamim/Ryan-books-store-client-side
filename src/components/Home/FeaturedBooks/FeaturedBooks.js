import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import "./FeaturedBooks.css";

const FeaturedBooks = () => {
  const [featured, setFeatured] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const loadFeatured = async () => {
      setLoader(true);
      const { data } = await axios(
        "https://ryan-books-store.herokuapp.com/getFeatured"
      );
      setFeatured(data);
      setLoader(false);
      console.log(data);
    };
    loadFeatured();
  }, []);

  return (
    <div className="container mt-5">
      {loader ? (
        <Loading />
      ) : (
        <>
          {" "}
          <h2>Featured Books: {featured.length}</h2>
        </>
      )}
    </div>
  );
};

export default FeaturedBooks;
