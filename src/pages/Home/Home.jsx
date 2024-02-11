import React from "react";
import Showcase from "./Showcase/Showcase";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import LatestProducts from "./LatestProducts/LatestProducts";
import Service from "./Servise/Service";

const Home = () => {
  return (
    <div>
      <Showcase />
      <FeaturedProducts />
      <LatestProducts />
      <Service />
    </div>
  );
};

export default Home;
