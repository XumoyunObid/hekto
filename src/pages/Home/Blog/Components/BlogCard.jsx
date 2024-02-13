import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, user, date, text, link, btn }) => {
  return (
    <div className="shadow-2xl">
      <div>
        <img className="rounded-t-xl" src={img} />
      </div>
      <div className="p-[20px] flex flex-col gap-[30px]">
        <div className="flex gap-[30px]">
          <p className="text-navyBlue text-sm">{user}</p>
          <p className="text-navyBlue text-sm">{date}</p>
        </div>
        <h2 className="text-lg text-navyBlue font-bold hover:text-primaryPink">
          {title}
        </h2>
        <p className="text-base text-[#72718F]">{text}</p>

        <Link
          className="text-base text-navyBlue hover:text-primaryPink underline"
          to={link}
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
