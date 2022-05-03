import React from "react";
import "./InventoryItem.css";
import img from "../../../images/banner/3.jpg";
import { useNavigate } from "react-router-dom";

const InventoryItem = ({ item }) => {
  const { id, name, description, price, author } = item;
  const navigate = useNavigate();

  const handleInventory = () => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="item-container">
      <img src={img} alt="book-img" className="img-fluid" />
      <h4>{name}</h4>
      <p>{description}</p>
      <h5>{price}</h5>
      <p>{author}</p>
      <button className="submit-btn" onClick={handleInventory}>
        Details
      </button>
    </div>
  );
};

export default InventoryItem;
