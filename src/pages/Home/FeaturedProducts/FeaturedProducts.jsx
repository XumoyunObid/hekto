import { featuredProducts } from "../../../data/Main-Data/data";
import FeaturedCard from "./Components/FeaturedCard";

const FeaturedProducts = () => {
  return (
    <div className="container max-w-1200 px-4 pb-[70px] pt-[130px] flex flex-col items-center gap-[50px]">
      <h1 className="text-5xl text-navyBlue font-bold">Featured Products</h1>
      <ul className="flex gap-[30px]">
        {featuredProducts.map((card) => (
          <li key={crypto.randomUUID()}>
            <FeaturedCard
              img={card.img}
              title={card.title}
              price={card.price}
              code={card.code}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
