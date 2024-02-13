import { Link } from "react-router-dom";
import { TrendingData } from "../../../data/Main-Data/data";
import TrandingCard from "./Components/TrandingCard";
import TrendingCard from "./Components/TrendingCard";
import RightSideCards from "./Components/RightSideCards";

const TrendingProducts = () => {
  return (
    <div className="container max-w-1200 px-4 pb-[70px] pt-[130px] flex flex-col items-center gap-[50px]">
      <h1 className="text-5xl text-navyBlue font-bold">Trending Products</h1>
      <ul className="flex gap-[30px]">
        {TrendingData.slice(0, 4).map((card) => (
          <li key={crypto.randomUUID()}>
            <Link to={`trandingproduct/${card.id}`}>
              <TrendingCard
                img={card.img}
                title={card.title}
                price={card.price}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-[25px] w-full">
        <div className="flex gap-[30px]">
          {TrendingData.slice(4, 6).map((item) => (
            <TrandingCard
              key={item.id}
              img={item.img}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[23px]">
          {TrendingData.slice(6, 9).map((item) => (
            <RightSideCards
              key={item.id}
              img={item.img}
              price={item.price}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
