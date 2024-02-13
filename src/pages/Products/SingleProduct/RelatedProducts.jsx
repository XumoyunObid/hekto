import { related } from "../../../data/Main-Data/data";
import RelatedCard from "./RelatedCard";

const RelatedProducts = () => {
  return (
    <div>
      <div className="container max-w-1200 px-4 pt-[125px]">
        <h1 className="text-4xl text-navyBlue font-bold">Related Products</h1>
        <ul className="flex items-center gap-[30px] justify-between pt-[47px]">
          {related.map((item) => (
            <li key={item.id}>
              <RelatedCard
                img={item.img}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelatedProducts;
