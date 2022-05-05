import React from "react";
import "./AddItems.css";

const AddItems = () => {
  // ---add item in db---
  const handleAddItem = (e) => {
    e.preventDefault();
    const bookName = e.target.name.value;
    const email = e.target.email.value;
    const description = e.target.description.value;
    const photoUrl = e.target.photoUrl.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const suppiler = e.target.suppiler.value;
    // -------=---------
    console.log(
      bookName,
      email,
      description,
      photoUrl,
      price,
      quantity,
      suppiler
    );
  };

  return (
    <div className="container my-3">
      {/* ---add from start here--- */}
      <form onSubmit={handleAddItem} className="add-form-container">
        <h1 className="text-info text-uppercase my-3">Add Item</h1>
        <input
          type="text"
          className="add-field"
          name="name"
          id="name"
          required
          placeholder="book name"
        />
        <input
          type="email"
          className="add-field"
          name="email"
          id="email"
          required
          placeholder="Enter email"
        />
        <input
          type="text"
          className="add-field"
          name="description"
          id="description"
          required
          placeholder="Description"
        />
        <input
          type="text"
          className="add-field"
          name="photoUrl"
          id="photoUrl"
          required
          placeholder="Photo url"
        />
        <input
          type="number"
          className="add-field"
          name="price"
          id="price"
          required
          placeholder="Price"
        />
        <input
          type="number"
          className="add-field"
          name="quantity"
          id="quantity"
          required
          placeholder="Quantity"
        />
        <input
          type="text"
          className="add-field"
          name="suppiler"
          id="suppiler"
          required
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
