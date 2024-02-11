const ServiceCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="py-[45px] px-[30px] flex flex-col text-center items-center shadow-2xl">
      <Icon />
      <h1 className="pt-[40px] pb-[20px] text-navyBlue text-[22px] font-semibold">
        {title}
      </h1>
      <p className="text-[#1A0B5B4D] font-bold text-base">{text}</p>
    </div>
  );
};

export default ServiceCard;
