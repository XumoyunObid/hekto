const TopCard = ({ img, title, price }) => {
  return (
    <div>
      <div className="rounded-full flex w-[270px] h-[270px] items-center justify-center p-[55px] bg-[#F6F7FB]">
        <img src={img} />
      </div>
      <div className="pt-[27px] flex flex-col items-center justify-center">
        <h1 className="text-navyBlue text-xl">{title}</h1>
        <p className="text-navyBlue text-base">${price}</p>
      </div>
    </div>
  );
};

export default TopCard;
