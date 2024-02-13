import React from "react";
import { useParams } from "react-router";
import { TrendingData } from "../../../../data/Main-Data/data";
import SinglePageBanner from "../../../Products/SingleProduct/SinglePageBanner";
import FaceBookIcon from "../../../../assets/icons/FaceBookIcon";
import InstaIcon from "../../../../assets/icons/InstaIcon";
import TwitterIcon from "../../../../assets/icons/TwitterIcon";
import Description from "../../../Products/SingleProduct/Description";
import RelatedProducts from "../../../Products/SingleProduct/RelatedProducts";
import Partners from "../../Partners/Partners";
import HeartIcon from "../../../../assets/icons/HeartIcon";

const SingleTranding = () => {
  const { id } = useParams();
  const product = TrendingData.find(
    (product) => product.id === parseInt(id)
  );
  console.log(product);
  return (
    <div>
      <SinglePageBanner />
      <div className="container max-w-1200 px-4 py-[135px]">
        <div className="shadow-2xl w-full flex gap-[40px] p-3">
          <div className="w-1/2 grid grid-cols-3 grid-rows-3 gap-3">
            <div className="bg-[#C4C4C4] flex items-center justify-center">
              <img src={product.img} alt="" />
            </div>
            <div className="col-span-2 row-span-3 bg-[#C4C4C4] flex items-center justify-center">
              <img src={product.img} alt="" />
            </div>
            <div className="bg-[#C4C4C4] flex items-center justify-center">
              <img src={product.img} alt="" />
            </div>
            <div className="bg-[#C4C4C4] flex items-center justify-center">
              <img src={product.img} alt="" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-[15px] items-start justify-center">
            <h1 className="text-4xl text-navyBlue font-bold">
              {product.title}
            </h1>
            <p className="text-base flex gap-3 items-center text-navyBlue">
              ${product.price}{" "}
              <span className="text-primaryPink line-through text-base">
                ${product.price}
              </span>
            </p>
            <p className="text-navyBlue text-base font-semibold">Color</p>
            <p className="text-base font-semibold text-[#A9ACC6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus <br /> porttitor purus, et volutpat sit.
            </p>
            <button className="text-base text-navyBlue capitalize ml-[70px]">
              Add to Card <HeartIcon />
            </button>
            <p className="text-base text-navyBlue font-semibold">Categories:</p>
            <p className="text-base text-navyBlue font-semibold">Tags</p>
            <p className="text-base text-navyBlue font-semibold flex items-center gap-3">
              Share
              <span className="flex gap-2">
                <FaceBookIcon />
                <InstaIcon />
                <TwitterIcon />
              </span>
            </p>
          </div>
        </div>
      </div>
      <Description />
      <RelatedProducts />
      <Partners />
    </div>
  );
};

export default SingleTranding;
