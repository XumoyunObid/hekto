import React from "react";
import lamp from "../../../assets/Showcase/lamp.png";
import sofa from "../../../assets/Showcase/sofa.png";
import Button from "./../../../Components/Buttons/Button";

const Showcase = () => {
  return (
    <section className="bg-[#F2F0FF] h-lvh relative">
      <div>
        <img src={lamp} alt="" className="absolute left-[-80px]" />
        <img
          src={sofa}
          alt=""
          className="absolute right-[20px] top-[35px] bottom-[35px]"
        />
        <div className="pt-[200px] left-[200px] absolute">
          <h3 className="text-primaryPink text-base font-bold">
            Best Furniture For Your Castle....
          </h3>
          <h1 className="text-[53px] font-bold">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-[#8A8FB9] text-base font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Magna in est adipiscing in phasellus non in justo.
          </p>
          <Button type="button" variant="primary" className="my-7">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
