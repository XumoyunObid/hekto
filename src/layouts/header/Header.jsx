import React from "react";
import MailIcon from "./../../assets/icons/MailIcon";
import PhoneIcon from "./../../assets/icons/PhoneIcon";
import ChevronDownIcon from "./../../assets/icons/ChevronDownIcon";
import UserIcon from "./../../assets/icons/UserIcon";
import HeartIcon from "./../../assets/icons/HeartIcon";
import CartIcon from "./../../assets/icons/CartIcon";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="bg-violetPurple">
        <div className="container max-w-1200 py-4 flex items-center px-4 justify-between">
          <div className="flex items-center gap-12">
            <p className="text-base text-white flex items-center gap-1">
              <MailIcon /> mhhasanul@gmail.com
            </p>
            <p className="text-base text-white flex items-center gap-1">
              <PhoneIcon /> (12345)67890
            </p>
          </div>
          <ul className="flex gap-4">
            <li className="flex items-center gap-1 text-white">
              English <ChevronDownIcon />
            </li>
            <li className="flex items-center gap-1 text-white">
              USD <ChevronDownIcon />
            </li>
            <li className="flex items-center gap-1 text-white">
              Login <UserIcon />
            </li>
            <li className="flex items-center gap-1 text-white">
              Wishlist <HeartIcon />
            </li>
            <li className="flex items-center gap-1 text-white">
              <CartIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="container px-4 max-w-1200 py-4">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
