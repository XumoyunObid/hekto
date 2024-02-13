import React from "react";
import Logo from "./../../assets/icons/Logo";
import Button from "../../Components/Buttons/Button";
import { FooterData } from "../../data/Footer-Data/Footer-Data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#EEEFFB]">
      <div className="container max-w-1200 flex justify-between pb-[100px] pt-[95px]">
        <div className="flex flex-col ">
          <Logo />
          <div className="flex py-[30px]">
            <input
              type="text"
              className="border"
              placeholder="Enter Email Address"
            />
            <Button className="rounded-lg" variant="primary">
              Sign up
            </Button>
          </div>
          <p className="text-base text-[#8A8FB9]">Contact Info</p>
          <p className="text-base text-[#8A8FB9]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div>
          <h1 className="text-black font-semibold text-xl mb-[40px]">
            Catagories
          </h1>
          <ul className="flex flex-col gap-[20px]">
            {FooterData.slice(0, 5).map((item) => (
              <li key={item.id}>
                <Link
                  className="text-[#8A8FB9] hover:text-primaryPink text-base"
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-black font-semibold text-xl mb-[40px]">
            Customer Care
          </h1>
          <ul className="flex flex-col gap-[20px]">
            {FooterData.slice(5, 10).map((item) => (
              <li key={item.id}>
                <Link className="text-[#8A8FB9] hover:text-primaryPink text-base" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-black font-semibold text-xl mb-[40px]">Pages</h1>
          <ul className="flex flex-col gap-[20px]">
            {FooterData.slice(10, 16).map((item) => (
              <li key={item.id}>
                <Link className="text-[#8A8FB9] hover:text-primaryPink text-base" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
