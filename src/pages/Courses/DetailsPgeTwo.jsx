import React from "react";
import assets from "../../assets/assets";

const DetailsPgeTwo = ({ data }) => {
  return (
    <div className="w-[80%] h-full pb-8">
      <div className="w-[40%] h-[8rem] flex flex-col justify-around mt-8 ">
        <img
          src={assets.Images.Lamb}
          alt="img"
          className="w-[5rem] h-[5rem] object-contain  rounded-full shadow-lg"
        />
        <h1 className="text-[1rem] font-bold text-[#FC573B]">
          Highly Practical
        </h1>
      </div>
      <h1 className="text-[2rem] font-semibold md:text-[3rem]">
        What You'll Learn
      </h1>
      {data?.outcomes?.map((outcome) => (
        <div className="w-[90%] flex justify-between items-center mt-8 md:h-[2rem] md:w-[80%]">
          <img
            src={assets.Images.Tick}
            className="w-[8%] h-[1.2rem] object-contain md:h-[50%]"
          />
          <h1 className="w-[90%] font-medium text-[.8rem] md:text-[1rem]">
            {outcome}
          </h1>
        </div>
      ))}
      <div className="w-[40%] h-[8rem] flex flex-col justify-around mt-8">
        <img
          src={assets.Images.ProfileIcon}
          alt="img"
          className="w-[5rem] h-[5rem] object-contain  rounded-full shadow-lg"
        />

        <h1 className="text-[1rem] font-bold text-[#502670]">
          Target Students
        </h1>
      </div>
      <h1 className="text-[2rem] font-semibold md:text-[3rem]">
        Who This Is For
      </h1>
      {data?.target?.map((outcome) => (
        <div className="w-[90%] flex justify-between items-center mt-8 md:h-[2.5rem] md:w-[80%]">
          <img
            src={assets.Images.Tick}
            className="w-[8%] h-[50%] object-contain"
          />
          <h1 className="w-[90%] font-medium text-[.8rem] md:text-[1rem]">
            {outcome}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default DetailsPgeTwo;
