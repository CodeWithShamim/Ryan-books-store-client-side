import React from "react";
import Banner from "../Banner/Banner";
import FeaturedBooks from "../FeaturedBooks/FeaturedBooks";
import InventoryItems from "../InventoryItems/InventoryItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InventoryItems></InventoryItems>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
};

export default Home;
