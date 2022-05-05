import React from "react";
import "./AddItems.css";

const AddItems = () => {
  return (
    <div className="container my-3">
      <h1 className="text-info text-uppercase mt-4 mb-3">Add Item</h1>

      {/* ---add from start here--- */}
      <form className="add-form-container">
        <input
          type="text"
          className="add-field"
          name="name"
          id="name"
          placeholder="book name"
        />
        <input
          type="email"
          className="add-field"
          name="email"
          id="email"
          placeholder="Enter email"
        />
        <input
          type="text"
          className="add-field"
          name="description"
          id="description"
          placeholder="Description"
        />
        <input
          type="text"
          className="add-field"
          name="photoUrl"
          id="photoUrl"
          placeholder="Photo url"
        />
        <input
          type="number"
          className="add-field"
          name="price"
          id="price"
          placeholder="Price"
        />
        <input
          type="number"
          className="add-field"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
        />
        <input
          type="text"
          className="add-field"
          name="suppiler"
          id="suppiler"
          placeholder="Suppiler name"
        />
        {/* ---submit btn--- */}
        <input type="submit" className="item-add-btn" value="Add" />
      </form>
      {/* ---add form end here--- */}
    </div>
  );
};

export default AddItems;
