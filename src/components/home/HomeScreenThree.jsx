import React from "react";
import assets from "../../assets/assets";

const HomeScreenThree = () => {
  return (
    <div className="w-[100%] h-screen flex justify-around flex-col items-center bg-black relative ">
      <img
        src={assets.Images.StrokeBlack}
        alt="stroke"
        className=" absolute z-1 left-[55%] top-[17%] w-[20%]"
      />
      <div className="w-[90%] h-[30%] flex flex-col justify-around items-center z-10">
        <h1 className="text-[3rem] font-semibold text-white">
          Why Should Choose LearnLoom
        </h1>
      </div>
      <div className="w-[90%] h-[60%] bg-slate-100"></div>
    </div>
  );
};

export default HomeScreenThree;
