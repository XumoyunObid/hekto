import ServiceCard from "./Components/ServiceCard";
import { ServicesData } from './../../../data/Main-Data/data';

const Service = () => {
  return (
    <div className="container max-w-1200 px-4 pb-[70px] pt-[130px] flex flex-col items-center gap-[50px]">
      <h1 className="text-5xl text-navyBlue font-bold">What Shopex Offer!</h1>
      <ul className="flex gap-[30px]">
        {ServicesData.map((card) => (
          <li key={crypto.randomUUID()}>
            <ServiceCard icon={card.icon} title={card.title} text={card.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
