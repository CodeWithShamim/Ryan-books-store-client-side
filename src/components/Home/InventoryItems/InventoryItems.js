import React, { useEffect, useState } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);
  return (
    <div className="inventory-main-items">
      <h1 className="mt-5">Inventory book items</h1>
      <div className="inventory-items-container container">
        {items.map((item) => (
          <InventoryItem key={item.id} item={item}></InventoryItem>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;