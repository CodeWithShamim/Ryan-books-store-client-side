import React from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Id number: {id}</h1>
      <Link to="/manage-inventory">
        <button className="submit-btn">Manage inventory</button>
      </Link>
    </div>
  );
};

export default Inventory;
