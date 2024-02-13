const RightSideCards = ({ title, price, img }) => {
  return (
    <div className="w-[367px] h-[74px] flex gap-3">
      <div className="flex items-center justify-center w-[107px] h-full bg-[#F5F6F8]">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-base font-semibold text-navyBlue">{title}</h2>
        <p className="line-through text-navyBlue text-xs">${price}</p>
      </div>
    </div>
  );
};

export default RightSideCards;
