import { Top } from "../../../data/Main-Data/data";
import TopCard from "./Components/TopCard";
import { Link } from 'react-router-dom';

const TopCategories = () => {
  return (
    <div className="container max-w-1200 px-4 pb-[70px] pt-[130px] flex flex-col items-center gap-[50px]">
      <h1 className="text-5xl text-navyBlue font-bold">Top Categories</h1>
      <ul className="flex items-center gap-[40px]">
        {Top.map((item) => (
          <li key={item.id}>
            <Link to={`topcategory/${item.id}`}>
            <TopCard price={item.price} img={item.img} title={item.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
