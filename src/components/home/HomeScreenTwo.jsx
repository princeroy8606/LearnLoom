import React, { useEffect } from "react";
import assets from "../../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HomeScreenTwo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".c", {
      ScrollTrigger: {
        target: ".ani-img",
        start: "top top",
        end: "bottom center",
      },
      x: 500,
    });
  }, []);
  return (
    <div className="w-[80%] h-auto flex justify-between py-[4rem] lg:h-screen">
      <div className="w-[100%] h-[100%]  flex flex-col justify-between relative md:w-[60%]">
        <img
          src={assets.Images.Stroke}
          alt="stroke"
          className=" absolute z-1 left-[30%] top-[4%] w-[50%] ani-img"
        />
        <div className="w-[100%] h-[40%] z-10">
          <h1 className="text-[2rem] font-medium md:text-[3.5rem]">
            Talent Transformation Suite For Coursins
          </h1>
          <p className="text-gray-500 font-normal text-[0.7rem]  md:text-[1rem] md:font-medium">
            Explore our LearnLoom, offering expert-led programming courses for
            all skill levels. Learn at your own pace with interactive lessons
            and flexible options. Start advancing your tech skills today and
            unlock a world of possibilities in the fast-paced world of
            technology.
          </p>
        </div>
        <div className="w-[100%] h-[50%] flex flex-wrap gap-8 mt-2 md:mt-0">
          <div className="w-[20rem] h-[40%] rounded-[1rem] border-[2px] border-black hover:bg-black hover:text-white p-4 flex flex-col justify-around">
            <h2 className="text-[1.5rem] font-semibold  ">WorkShop</h2>
            <p className="text-[14px] ">
              Asess the talent gap to accurately measure innovation projects
            </p>
          </div>
          <div className="w-[20rem] h-[40%] rounded-[1rem] border-[2px] border-black hover:bg-black hover:text-white p-4 flex flex-col justify-around">
            <h2 className="text-[1.5rem] font-semibold  ">PlatForm</h2>
            <p className="text-[14px] ">
              Optimize our platform to enable and empower job ready digital
              chalenge
            </p>
          </div>
          <div className="w-[20rem] h-[40%] rounded-[1rem] border-[2px] border-black hover:bg-black hover:text-white p-4 flex flex-col justify-around">
            <h2 className="text-[1.5rem] font-semibold  ">Targeting</h2>
            <p className="text-[14px] ">
              Research on the program to get core of the problem
            </p>
          </div>
          <div className="w-[20rem] h-[40%] rounded-[1rem] border-[2px] border-black hover:bg-black hover:text-white p-4 flex flex-col justify-around">
            <h2 className="text-[1.5rem] font-semibold ">Impact </h2>
            <p className="text-[14px] ">
              use our proven guidelines to meet targeted result
            </p>
          </div>
        </div>
      </div>
      <div className="w-[35%] h-[100%] hidden items-center justify-cente md:flex">
        <img
          src={assets.Images.Page2}
          alt="home"
          className="w-[90%] h-[90%] object-cover rounded-[1rem] border-[2px] border-black"
          style={{ borderBottomRightRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default HomeScreenTwo;
