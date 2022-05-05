import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./AddItems.css";

const AddItems = () => {
  const [user] = useAuthState(auth);
  // ---add item in db---
  const handleAddItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const suppiler = e.target.suppiler.value;
    // -------=---------
    // console.log(
    //   name,
    //   email,
    //   description,
    //   photoUrl,
    //   price,
    //   quantity,
    //   suppiler
    // );
    const item = {
      img: img,
      name: name,
      email: email,
      description: description,
      price: price,
      quantity: quantity,
      suppiler: suppiler,
    };

    // --------=--------------
    const url = `https://ryan-books-store.herokuapp.com/addItem`;
    // const url = `http://localhost:5000/addItem`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Item added");
        }
      });
  };

  return (
    <div>
      {" "}
      {/* ---add from start here--- */}{" "}
      <form onSubmit={handleAddItem} className="add-form-container">
        <h1 className="text-info text-uppercase my-3"> Add Item </h1>{" "}
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
          value={user?.email}
          className="add-field"
          name="email"
          id="email"
          required
          readOnly
          placeholder="Enter email"
        />
        {/* ---description--- */}
        <textarea
          cols="30"
          rows="3"
          className="add-field"
          name="description"
          id="description"
          required
          placeholder="Description"
          maxLength="200"
        ></textarea>
        {/* ----end description--- */}
        <input
          type="text"
          className="add-field"
          name="img"
          id="img"
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
        />{" "}
        {/* ---submit btn--- */}{" "}
        <input type="submit" className="item-add-btn" value="Add" />
      </form>{" "}
      {/* ---add form end here--- */}{" "}
    </div>
  );
};

export default AddItems;
