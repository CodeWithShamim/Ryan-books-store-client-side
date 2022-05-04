import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { img, name, description, author } = item;

  // get items by id
  useEffect(() => {
    const url = `http://localhost:5000/items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <div className="book-detail">
        <img src={img} alt="book-img" />
        <h5>{name}</h5>
        <p>{description}</p>
        <h6>{author}</h6>
      </div>
      <Link to="/manage-inventory">
        <button className="submit-btn">Manage inventory</button>
      </Link>
    </div>
  );
};

export default Inventory;
