import React from "react";
import Banner from "../Banner/Banner";
import FeaturedBooks from "../FeaturedBooks/FeaturedBooks";
import InventoryItems from "../InventoryItems/InventoryItems";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InventoryItems></InventoryItems>
      <FeaturedBooks></FeaturedBooks>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
