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
        {/* ---right side ---- */}
        <div className="book-detail-right-side">
          <img src={img} alt="book-img" className="" />
        </div>

        {/* --- restock quantity ----- */}
        <form className="restock-box">
          <h4>ADD QUANTITY</h4>
          <input type="text" name="restock-quantity" id="restock-quantity" />
          <input
            className="w-50 m-1 bg-transparent border border-light text-light fw-bold"
            type="submit"
            value="Restock item"
          />
        </form>

        {/* --- left side ---  */}
        <div className="book-detail-left-side m-2">
          <h5>{name}</h5>
          <p className="w-75 mx-auto">{description}</p>
          <h5>
            Price: <span>{price}</span>
          </h5>
          <h5>
            Quantity: <span>{quantity}</span>
          </h5>
          <h6>{suppiler}</h6>

          <div className="btn-box">
            <button className="delivered-btn">Delivered</button>
            <Link to="/manage-inventory">
              <button className="manage-inventory-btn">Manage inventory</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
