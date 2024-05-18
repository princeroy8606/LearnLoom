import React, { useEffect } from "react";
import assets from "../../assets/assets";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const HomeScreenOne = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.fromTo(
      ".ani-text",
      { y: 500, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.3 }
    );
    t1.fromTo(
      [".ani-img ", ".ani-circle", ".ani-block"],
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    );
    t1.fromTo(".stroke", { opacity: 0 }, { opacity: 1, duration: 0.2 });
  },[]);
  return (
    <div className="w-[80%] h-[90vh] flex justify-between ">
      <div className="w-full h-[98%]  flex flex-col justify-around relative md:w-[50%]">
        <div className="w-fit h-10 bg-[rgb(211,243,107)] rounded-[50rem] flex items-center justify-center px-3 min-w-[10rem]">
          <h2 className="font-semibold">#1 Onine Course 2024</h2>
        </div>
        <img
          src={assets.Images.Stroke}
          alt="stroke"
          className=" absolute z-1 left-[0%] top-[30%] w-[80%] stroke "
        />
        <img
          src={assets.Images.Stroke}
          alt="stroke"
          className=" absolute z-1 left-0 bottom-[35%] w-[50%] stroke md:bottom-[30%] md:w-[70%] "
        />
        <div className="w-[100%] h-[70%] flex flex-col justify-between relative md:h-[60%]">
          <h1 className="text-[3rem] font-medium ani-text md:text-[4.5rem]">
            Latest Technical Skills .Yours For The Taking
          </h1>
          <p className="font-medium text-gray-600 ani-text text-[.8rem] md:text-[1.2rem]">
            Sharpen your edge with the best project based online courses and
            expert feedback you wont find in any other platform
          </p>
        </div>
        <div
          className="w-fit h-12 bg-black rounded-[50rem] flex items-center justify-center cursor-pointer ani-text max-w-[25%]:"
          onClick={() => navigate("/courses")}
        >
          <h2 className="text-white w-full px-3">Get Started →</h2>
        </div>
      </div>
      <div className="w-[45%] h-[98%]  hidden items-end relative overflow-x-visible md:flex">
        <img
          src={assets.Images.HomeLeftImage}
          alt="homeLeft"
          className="w-[100%] h-[90%] object-contain ani-img"
        />
        <div className=" absolute w-[50%] h-[20%] bg-black rounded-lg top-[12rem] left-10 z-10 ani-block"></div>
        <div className=" absolute w-[10rem] h-[10rem] bg-[rgb(211,243,107)] rounded-[50%] bottom-[2rem] left-[-5rem] z-10 ani-circle"></div>
      </div>
    </div>
  );
};

export default HomeScreenOne;
