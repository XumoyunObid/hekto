import Button from "./../../../Components/Buttons/Button";
import discountSofa from "../../../assets/data-images/discountSofa.png";

const DiscountItems = () => {
  return (
    <div className="container max-w-1200 px-4 pb-[70px] pt-[130px] flex flex-col items-center gap-[33px]">
      <h1 className="text-5xl text-navyBlue font-bold">Discount Items</h1>
      <ul className="flex gap-[26px] items-center">
        <li className="text-navyBlue text-lg">Wood Chair</li>
        <li className="text-navyBlue text-lg">Plastic Chair</li>
        <li className="text-navyBlue text-lg">Sofa Collection</li>
      </ul>
      <div className="w-full flex">
        <div className="w-1/2 flex flex-col items-start justify-center gap-[20px]">
          <h1 className="text-navyBlue font-bold text-4xl">
            20% Discount Of All Products
          </h1>
          <h3 className="text-primaryPink text-sm">Eams Sofa Compact</h3>
          <p className="text-base text-[#B7BACB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget{" "}
            <br />
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="flex gap-[40px]">
            <div className="flex flex-col gap-[10px]">
              <p className="text-base text-[#B8B8DC]">
                Material expose like metals
              </p>
              <p className="text-base text-[#B8B8DC]">
                Clear lines and geomatric figures
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-base text-[#B8B8DC]">
                Material expose like metals
              </p>
              <p className="text-base text-[#B8B8DC]">
                Clear lines and geomatric figures
              </p>
            </div>
          </div>
          <Button variant="primary">Shop Now</Button>
        </div>
        <div className="w-1/2">
          <img src={discountSofa} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DiscountItems;
