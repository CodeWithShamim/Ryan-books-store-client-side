import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { img, name, description, price, quantity, suppiler } = item;

  // get items by id
  useEffect(() => {
    const url = `http://localhost:5000/items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div className="">
      <div className="book-detail">
        <div className="book-detail-left-side">
          <img src={img} alt="book-img" className="w-50" />
        </div>
        <div className="book-detail-right-side">
          <h5>{name}</h5>
          <p>{description}</p>
          <h5>
            Price: <span>{price}</span>
          </h5>
          <h5>
            Quantity: <span>{quantity}</span>
          </h5>
          <h6>{suppiler}</h6>
        </div>
      </div>
      <Link to="/manage-inventory">
        <button className="submit-btn">Manage inventory</button>
      </Link>
    </div>
  );
};

export default Inventory;
