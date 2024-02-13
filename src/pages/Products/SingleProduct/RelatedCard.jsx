const RelatedCard = ({ img, rating: Rating, title, price }) => {
  return (
    <div className="p-2 w-[265px] h-[385px] ">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col pt-2 gap-3">
        <h3 className="flex justify-between items-center text-navyBlue text-base font-bold">
          {title} <Rating />
        </h3>
        <p className="text-sm text-navyBlue">$ {price}</p>
      </div>
    </div>
  );
};

export default RelatedCard;
