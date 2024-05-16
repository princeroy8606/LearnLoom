import React from "react";

const Counts = () => {
  return (
    <div className=" w-[100%] h-[10rem] bg-black px-[10%] flex items-center justify-between text-white">
      <div className="h-[60%] w-[20%] border-r-2 border-gray-600 flex flex-col items-center justify-around">
        <h1 className=" text-[3rem] font-semibold">10+</h1>
        <p className="text-gray-300 font-medium">Years Experience </p>
      </div>
      <div className="h-[60%] w-[20%] border-r-2 border-gray-600 flex flex-col items-center justify-around">
        <h1 className=" text-[3rem] font-semibold">90%</h1>
        <p className="text-gray-300 font-medium">Accuracy Rate</p>
      </div>
      <div className="h-[60%] w-[20%] border-r-2 border-gray-600 flex flex-col items-center justify-around">
        <h1 className=" text-[3rem] font-semibold">500+</h1>
        <p className="text-gray-300 font-medium">Positive Reviews</p>
      </div>
      <div className="h-[60%] w-[20%] flex flex-col items-center justify-around">
        <h1 className=" text-[3rem] font-semibold">600+</h1>
        <p className="text-gray-300 font-medium">Trusted Partners</p>
      </div>
    </div>
  );
};

export default Counts;
