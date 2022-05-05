import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { img, name, description, price, quantity, suppiler } = item;
  // add new quantity hooks
  const [newQuantity, setNewQuantity] = useState(0);

  // get items by id
  useEffect(() => {
    const url = `http://localhost:5000/items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setNewQuantity(data.quantity);
      });
  }, []);

  // ---handle delivered---
  const handleDelivered = () => {
    if (quantity) {
      const dropQuantity = newQuantity - 1;
      if (dropQuantity !== -1) {
        setNewQuantity(dropQuantity);
      }
    }
  };

  // console.log(item);
  // console.log(quantity);
  // console.log("NEw q", newQuantity);

  // --- handle add quantity ---
  const handleAddQuantity = (e) => {
    e.preventDefault();
    const addQuantity = parseInt(e.target.addQuantityField.value);
    if (addQuantity > 0) {
      const newAddQuantity = newQuantity + addQuantity;
      setNewQuantity(newAddQuantity);
    }
  };

  // ---update quantity---
  useEffect(() => {
    const url = `http://localhost:5000/updateQuantity/${id}`;
    if (newQuantity && quantity) {
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [newQuantity]);

  return (
    <div className="">
      <div className="book-detail">
        {/* ---right side ---- */}
        <div className="book-detail-right-side">
          <img src={img} alt="book-img" className="" />
        </div>

        {/* --- restock quantity ----- */}
        <form className="restock-box" onSubmit={handleAddQuantity}>
          <h4>ADD QUANTITY</h4>
          <input
            type="number"
            className="p-2"
            name="addQuantityField"
            id="addQuantityField"
            placeholder="Enter quantity"
          />
          <input
            className="restock-btn w-75 m-2 fw-bold"
            type="submit"
            value="Restock item"
          />
        </form>

        {/* --- left side ---  */}
        <div className="book-detail-left-side m-2">
          <h2>{name}</h2>
          <p className="w-75 mx-auto">{description}</p>
          <h5>
            Price: <span className="text-danger fw-bold">{price}</span>
          </h5>
          <h5>
            Quantity:{" "}
            <span className="text-danger fw-bold fs-4">
              {newQuantity === 0
                ? "Stock not available"
                : newQuantity
                ? newQuantity
                : quantity}
            </span>
          </h5>
          <h6>Supplier: {suppiler}</h6>

          <div className="btn-box">
            <button onClick={handleDelivered} className="delivered-btn">
              Delivered
            </button>
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
