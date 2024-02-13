const FeaturedCard = ({ img, title, price, code }) => {
  return (
    <div className="shadow-lg w-[270px] h-[355px] flex flex-col">
      <div className="bg-[#F6F7FB] p-[45px] flex items-center justify-center w-full h-[235px] hover:scale-[0.9]">
        <img src={img} />
      </div>
      <div className="flex flex-col gap-3 text-center hover:bg-hoverBlue hover:text-white">
        <h4 className="text-primaryPink font-bold text-lg">{title}</h4>
        <ul className="flex items-center gap-[5px] justify-center">
          <li className="bg-[#05E6B7] w-[14px] h-[4px]"></li>
          <li className="bg-primaryPink w-[14px] h-[4px]"></li>
          <li className="bg-[#00009D] w-[14px] h-[4px]"></li>
        </ul>
        <p className="text-navyBlue text-sm">Code - {code}</p>
        <span className="text-navyBlue text-sm">${price}</span>
      </div>
    </div>
  );
};

export default FeaturedCard;
