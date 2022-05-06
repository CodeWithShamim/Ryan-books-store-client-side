import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyItem.css";

const MyItem = ({ myItem }) => {
  const { _id, img, name, description, price, quantity, suppiler } = myItem;
  const navigate = useNavigate();

  const handleInventory = () => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div className="item-container rounded mt-4 myitem-box">
      <div className="left-side">
        <img src={img} alt="book-img" className="img-fluid" />
      </div>
      <div className="right-side">
        <h3>{name}</h3>
        <p>{description}</p>
        <h5>
          Price: <span className="text-info fw-bold">{price}</span>
        </h5>
        <h5>
          Quantity: <span className="text-info fw-bold">{quantity}</span>
        </h5>
        <p>{suppiler}</p>
        <button
          className="update-btn fw-bold px-5 py-2 rounded bg-transparent text-light border-light"
          onClick={handleInventory}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default MyItem;
