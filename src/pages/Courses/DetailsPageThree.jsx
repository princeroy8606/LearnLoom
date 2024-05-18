import React from "react";
import assets from "../../assets/assets";

const DetailsPageThree = () => {
  return (
    <div className="w-screen h-[60vh] bottom-bg flex items-center px-[10%] relative md:h-screen">
      <img
        src={assets.Images.Man}
        alt="man"
        className="w-[80%] h-[40%] object-contain self-end z-10 md:h-[80%]"
      />
      <div className="w-[80%] h-[50%]  absolute right-[5%] md:w-[50%]">
        <h1 className="text-[3rem] font-medium text-white md:text-[5rem]">The New Courses Are Here  </h1>
      </div>
    </div>
  );
};

export default DetailsPageThree;
