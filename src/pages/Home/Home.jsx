import React from "react";
import Showcase from "./Showcase/Showcase";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import LatestProducts from "./LatestProducts/LatestProducts";
import Service from "./Servise/Service";
import ItalianSofa from "./ItalianSofa/ItalianSofa";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import DiscountItems from "./DiscountItems/DiscuntItems";
import TopCategories from "./TopCategories/TopCategories";
import Newsletter from "./Newsletter/Newsletter";
import Partners from "./Partners/Partners";
import Blog from "./Blog/Blog";

const Home = () => {
  return (
    <div>
      <Showcase />
      <FeaturedProducts />
      <LatestProducts />
      <Service />
      <ItalianSofa />
      <TrendingProducts />
      <DiscountItems />
      <TopCategories />
      <Newsletter />
      <Partners />
      <Blog/>
    </div>
  );
};

export default Home;
