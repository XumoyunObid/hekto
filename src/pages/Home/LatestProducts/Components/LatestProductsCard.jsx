const LatestCard = ({ img, title, price }) => {
  return (
    <div className="shadow-lg w-[360px] h-[305px]">
      <div className="bg-[#F7F7F7] w-full h-[270px] flex items-center justify-center">
        <img src={img} />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-navyBlue text-base">{title}</p>
        <span className="text-navyBlue text-base">$ {price}</span>
      </div>
    </div>
  );
};

export default LatestCard;
