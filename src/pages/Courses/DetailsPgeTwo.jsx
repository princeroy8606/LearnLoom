import React from "react";
import assets from "../../assets/assets";

const DetailsPgeTwo = ({ data }) => {
  return (
    <div className="w-[80%] h-screen">
      <div className="w-[40%] h-[8rem] flex flex-col justify-around mt-8">
        <img
          src={assets.Images.Lamb}
          alt="img"
          className="w-[5rem] h-[5rem] object-contain  rounded-full shadow-lg"
        />
        <h1 className="text-[1rem] font-bold text-[#FC573B]">
          Highly Practical
        </h1>
      </div>
      {data?.outcomes?.map((outcome) => (
        <div className="w-[80%] h-[2rem] flex justify-between items-center">
          <img
            src={assets.Images.Tick}
            className="w-[10%] h-[50%] object-contain"
          />
          <h1 className="w-[90%] ">{outcome}</h1>
        </div>
      ))}
    </div>
  );
};

export default DetailsPgeTwo;
