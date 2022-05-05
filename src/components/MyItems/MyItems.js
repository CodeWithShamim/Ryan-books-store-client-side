import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "./MyItem/MyItem";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  // ---get item by email---
  useEffect(() => {
    const url = `https://ryan-books-store.herokuapp.com/getItemByEmail?email=${user?.email}`;
    // const url = `http://localhost:5000/getItemByEmail?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);

  console.log(myItems);

  return (
    <div className="">
      {myItems.map((myItem) => (
        <MyItem key={myItem._id} myItem={myItem}></MyItem>
      ))}
    </div>
  );
};

export default MyItems;
