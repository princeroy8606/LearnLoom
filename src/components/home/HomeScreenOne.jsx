import React from "react";
import assets from "../../assets/assets";

const HomeScreenOne = () => {
  return (
    <div className="w-[80%] h-[90vh] flex justify-between ">
      <div className="w-[50%] h-[98%]  flex flex-col justify-around relative">
        <div className="w-[30%] h-10 bg-[rgb(211,243,107)] rounded-[50rem] flex items-center justify-center">
          <h2 className="font-semibold">#1 Onine Course 2024</h2>
        </div>
        <img
          src={assets.Images.Stroke}
          alt="stroke"
          className=" absolute z-1 left-[40%] top-[26%] w-[50%]"
        />
        <img
          src={assets.Images.Stroke}
          alt="stroke"
          className=" absolute z-1 left-0 bottom-[28%] w-[70%]"
        />
        <div className="w-[100%] h-[60%] flex flex-col justify-between relative">
          <h1 className="text-[4.5rem] font-medium">
            Latest Technical Skills .Yours For The Taking
          </h1>
          <p className="font-medium text-gray-600">
            Sharpen your edge with the best project based online courses and
            expert feedback you wont find in any other platform
          </p>
        </div>
        <div className="w-[25%] h-12 bg-black rounded-[50rem] flex items-center justify-center cursor-pointer">
          <h2 className="text-white">Get Started →</h2>
        </div>
      </div>
      <div className="w-[45%] h-[98%]  flex items-end relative overflow-x-visible">
        <img
          src={assets.Images.HomeLeftImage}
          alt="homeLeft"
          className="w-[100%] h-[90%] object-contain"
        />
        <div className=" absolute w-[50%] h-[20%] bg-black rounded-lg top-[12rem] left-10 z-10"></div>
        <div className=" absolute w-[10rem] h-[10rem] bg-[rgb(211,243,107)] rounded-[50%] bottom-[2rem] left-[-5rem] z-10"></div>
      </div>
    </div>
  );
};

export default HomeScreenOne;
