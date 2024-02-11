const FeaturedCard = ({ img, title, price, code }) => {
  return (
    <div className="shadow-lg w-[270px] h-[360px] flex flex-col gap-3 items-center">
      <div className="bg-[#F6F7FB] p-[45px] w-full h-[235px]">
        <img src={img} />
      </div>
      <h4 className="text-primaryPink font-bold text-lg">{title}</h4>
      <ul className="flex items-center gap-[5px] justify-center">
        <li className="bg-[#05E6B7] w-[14px] h-[4px]"></li>
        <li className="bg-primaryPink w-[14px] h-[4px]"></li>
        <li className="bg-[#00009D] w-[14px] h-[4px]"></li>
      </ul>
      <p className="text-navyBlue text-sm">Code - {code}</p>
      <span className="text-navyBlue text-sm">${price}</span>
    </div>
  );
};

export default FeaturedCard;
