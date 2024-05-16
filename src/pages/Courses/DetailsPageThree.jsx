import React from "react";
import assets from "../../assets/assets";

const DetailsPageThree = () => {
  return (
    <div className="w-screen h-screen bottom-bg flex items-center px-[10%] relative">
      <img
        src={assets.Images.Man}
        alt="man"
        className="w-[80%] h-[80%] object-contain self-end z-10"
      />
      <div className="w-[50%] h-[50%]  absolute right-[5%] ">
        <h1 className="text-[5rem] font-medium text-white ">The New Courses Are Here  </h1>
      </div>
    </div>
  );
};

export default DetailsPageThree;
