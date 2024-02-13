import { Link } from "react-router-dom";
import { featuredProducts } from "../../../data/Main-Data/data";
import FeaturedCard from "./Components/FeaturedCard";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto max-w-1200 px-4 pb-[70px] pt-[130px]  ">
      <h1 className="text-5xl text-navyBlue font-bold text-center mb-[48px]">
        Featured Products
      </h1>
      <Slider {...settings}>
        {featuredProducts.map((card) => (
          <Link to={`singleproduct/${card.id}`} key={card.id}>
          <FeaturedCard
            img={card.img}
            title={card.title}
            price={card.price}
            code={card.code}
          />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
