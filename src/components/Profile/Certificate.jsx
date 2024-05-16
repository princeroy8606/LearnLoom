import React from "react";
import assets from "../../assets/assets";

const Certificate = ({color}) => {
  return (
    <div className={`w-[20rem] h-[25rem] rounded-2xl shadow-md bg-[#EA64AD] shadow-rose-300 relative cursor-pointer`}>
      <img
        src={assets.Images.Certification}
        alt="certi"
        className="w-full h-[60%] object-contain"
      />
      <div className=" w-full h-[40%] p-4 flex flex-col justify-between ">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[1.5rem] font-medium text-white">
            Advanced Ui/Ux
          </h1>
          <div className="w-[20%] h-[1.5rem] rounded-2xl flex items-center justify-center bg-lime-100">
            <h1 className="font-semibold text-gray-500">2hr</h1>
          </div>
        </div>
        <p className="text-[1rem] font-normal text-white">
          Completed The Advanced Ui/Ux Sesions
        </p>
        <h1 className="text-[1.5rem] font-medium text-gray-300">
          Completed 🥳
        </h1>
      </div>
    </div>
  );
};

export default Certificate;
