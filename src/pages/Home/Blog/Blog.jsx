import React from "react";
import { BlogData } from "../../../data/Main-Data/data";
import BlogCard from "./Components/BlogCard";

const Blog = () => {
  return (
    <div className="container max-w-1200 px-4 pb-[70px] flex flex-col items-center gap-[50px]">
      <h1 className="text-5xl text-navyBlue font-bold">Latest Blog</h1>
      <ul className="flex items-center justify-between gap-[55px]">
        {BlogData.map((item) => (
          <li key={item.id}>
            <BlogCard
              img={item.img}
              title={item.title}
              user={item.user}
              date={item.date}
              text={item.text}
              link={item.link}
              btn={item.btn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
