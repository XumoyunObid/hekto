const TrendingCard = ({ img, title, price }) => {
  return (
    <div className="shadow-2xl w-[270px] h-[350px] p-3 flex flex-col gap-3 items-center">
      <div className="bg-[#F6F7FB] p-[45px] flex items-center justify-center hover:scale-[0.9] w-full h-[244px]">
        <img src={img} />
      </div>
      <h4 className="text-primaryPink font-bold text-lg">{title}</h4>
      <span className="text-navyBlue text-sm">${price}</span>
    </div>
  );
};

export default TrendingCard;
