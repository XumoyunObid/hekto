import { useState } from "react";
import { LatestProduct } from "../../../data/Main-Data/data";
import LatestCard from "./Components/LatestProductsCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
};

const LatestProducts = () => {
  const [state, setState] = useState(LatestProduct[0].NewArrival);
  const titles = Object.keys(LatestProduct[0]);
  const [name, setName] = useState(titles[0]);

  const changeTab = (slug) => {
    setState(LatestProduct[0][slug]);
    setName(slug);
  };

  return (
    <div className="container max-w-1200 px-4 pb-[70px] pt-[130px] flex flex-col items-center gap-[50px]">
      <h1 className="text-5xl text-navyBlue font-bold">Latest Products</h1>
      <ul className="flex items-center gap-[58px]">
        {titles.map((item) => (
          <li key={crypto.randomUUID()}>
            <button
              onClick={() => changeTab(item)}
              style={name == item ? { color: "#FB2E86" } : {}}
              className="text-lg"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex gap-[30px] flex-wrap">
          {state.map((item) => (
            <li key={crypto.randomUUID()}>
              <Link to={`latestproduct/${item.id}`}>
                <LatestCard
                  img={item.img}
                  title={item.title}
                  price={item.price}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LatestProducts;
