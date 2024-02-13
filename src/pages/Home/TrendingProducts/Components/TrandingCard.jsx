import { Link } from "react-router-dom";
const TrandingCard = ({ title, img, link }) => {
  return (
    <div className="py-[35px] px-[25px] w-[420px] h-[270px] bg-[#EEEFFB] relative">
      <h1 className="text-navyBlue text-semibold text-lg">{title}</h1>
      <Link className="text-primaryPink underline" to={link}>
        Shop Now
      </Link>
      <img className="absolute right-0 bottom-2" src={img} alt="" />
    </div>
  );
};

export default TrandingCard;
