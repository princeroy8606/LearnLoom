import React from "react";

const Counts = () => {
  return (
    <div className=" w-[100%] h-[8rem] bg-black px-[10%] flex items-center justify-between text-white md:h-[10rem]">
      <div className="h-[60%] w-[20%] border-r-2 border-gray-600 flex flex-col items-center justify-around">
        <h1 className=" text-[1.2rem] font-semibold md:text-[3rem]">10+</h1>
        <p className="text-gray-300 font-medium text-[.5rem] md:text-[1rem]">Years Experience </p>
      </div>
      <div className="h-[60%] w-[20%] border-r-2 border-gray-600 flex flex-col items-center justify-around">
        <h1 className="text-[1.2rem] font-semibold md:text-[3rem]">90%</h1>
        <p className="text-gray-300 font-medium text-[.5rem] md:text-[1rem]">Accuracy Rate</p>
      </div>
      <div className="h-[60%] w-[20%] border-r-2 border-gray-600 flex flex-col items-center justify-around">
        <h1 className="text-[1.2rem] font-semibold md:text-[3rem]">500+</h1>
        <p className="text-gray-300 font-medium text-[.5rem] md:text-[1rem]">Positive Reviews</p>
      </div>
      <div className="h-[60%] w-[20%] flex flex-col items-center justify-around">
        <h1 className="text-[1.2rem] font-semibold md:text-[3rem]">600+</h1>
        <p className="text-gray-300 font-medium text-[.5rem] md:text-[1rem]">Trusted Partners</p>
      </div>
    </div>
  );
};

export default Counts;
