import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  // ---get item by email---
  useEffect(() => {
    const url = `http://localhost:5000/getItemByEmail?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, []);

  return (
    <div>
      <h1>this is MyItems</h1>
      {myItems.map((myItem) => (
        <h4>{myItem.name}</h4>
      ))}
    </div>
  );
};

export default MyItems;
