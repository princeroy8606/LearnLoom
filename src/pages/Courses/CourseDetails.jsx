import React, { useEffect } from "react";
import NavBar from "../../components/global/NavBar";
import Footer from "../../components/global/Footer";
import assets from "../../assets/assets";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { buyCourse } from "../../redux/actions/courseActions";
import { gsap } from "gsap";
import DetailsPgeTwo from "./DetailsPgeTwo";

const CourseDetails = () => {
  const { data } = useLocation()?.state;
  const { userData } = useAuth();
  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(buyCourse({ userId: userData?._id, CourseId: data?._id }));
  };

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.fromTo(".name", { x: 100 }, { x: 0 }, "+=1");

    t1.fromTo(
      ".features",
      {
        y: 100,
        opacity: 0,
        duration: 1,
      },
      { y: 0, opacity: 1, stagger: 0.2 }
    );
    //   return ()=>
  }, []);

  return (
    <div className="w-screen h-auto flex flex-col items-center">
      <NavBar />
      <div className="w-[100%] bg-slate-300  flex items-center justify-center px-2 ">
        <div className="w-full h-[90vh] flex relative ">
          <img
            src={data?.thubnail}
            className="w-full h-full absolute top-0 z-1 "
          />
          <div className="w-full h-full z-10 card-gradient flex items-end px-8 ">
            <div className="w-[60%] h-[80%] px-2 flex flex-col justify-around ">
              <h1 className="text-[3rem] font-semibold text-white name opacity-100">
                {data?.courseName}
              </h1>
              <h1 className="text-[1.5rem] font-medium  text-white">
                {data?.description}
              </h1>
              <div className="w-[60%] h-40 flex justify-between items-center">
                {data?.enrolled?.includes(userData?._id) ? (
                  <div
                    className="w-[40%] h-12 bg-black rounded-[50rem] flex items-center justify-center cursor-pointer"
                    onClick={handleBuy}
                  >
                    <h2 className="text-white"> Enter Course</h2>
                  </div>
                ) : (
                  <>
                    <div
                      className="w-[40%] h-12 bg-black rounded-[50rem] flex items-center justify-center cursor-pointer"
                      onClick={handleBuy}
                    >
                      <h2 className="text-white"> Buy Now</h2>
                    </div>
                    <h2>-or-</h2>
                    <div className="w-[40%] h-12 bg-gray-700 rounded-[50rem] flex items-center justify-center cursor-pointer">
                      <h2 className="text-white"> Add to cart </h2>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="w-[30%] h-full bg-white flex items-center justify-center">
              <div className="w-[90%] h-[80%] bg-lime-500 p-2 flex flex-col justify-start gap-8 items-center">
                <div className="h-16 flex flex-col w-[80%]">
                  <h1 className="text-[1.4rem] font-medium">Course Overview</h1>
                  <div className="w-20 h-1 bg-black rounded-xl"></div>
                </div>
                <div className="w-[80%] h-8 flex justify-between items-center features">
                  <img
                    src={assets.Images.Goal}
                    className="w-3rem h-[70%] object-contain"
                  />
                  <h3 className="w-[85%] text-[1.2rem] font-medium">
                    Beinner to Pro
                  </h3>
                </div>
                <div className="w-[80%] h-8 flex justify-between items-center features">
                  <img
                    src={assets.Images.Vedio}
                    className="w-3rem h-[70%] object-contain"
                  />
                  <h3 className="w-[85%] text-[1.2rem] font-medium">
                    12 hours of HD video
                  </h3>
                </div>
                <div className="w-[80%] h-8 flex justify-between items-center features">
                  <img
                    src={assets.Images.List}
                    className="w-3rem h-[70%] object-contain"
                  />
                  <h3 className="w-[85%] text-[1.2rem] font-medium">
                    210 lessons
                  </h3>
                </div>
                <div className="w-[80%] h-8 flex justify-between items-center features">
                  <img
                    src={assets.Images.Downloading}
                    className="w-3rem h-[70%] object-contain"
                  />
                  <h3 className="w-[85%] text-[1.2rem] font-medium">
                    Downloadable content
                  </h3>
                </div>
                <div className="w-[80%] h-8 flex justify-between items-center features">
                  <img
                    src={assets.Images.Terminal}
                    className="w-3rem h-[70%] object-contain"
                  />
                  <h3 className="w-[85%] text-[1.2rem] font-medium">
                    Hands-on exercises
                  </h3>
                </div>
                <div className="w-[80%] h-8 flex justify-between items-center features">
                  <img
                    src={assets.Images.Caption}
                    className="w-3rem h-[70%] object-contain"
                  />
                  <h3 className="w-[85%] text-[1.2rem] font-medium">
                    English Captions
                  </h3>
                </div>
                <div className="w-[80%] h-8 flex justify-between items-center features">
                  <img
                    src={assets.Images.Badge}
                    className="w-3rem h-[70%] object-contain"
                  />
                  <h3 className="w-[85%] text-[1.2rem] font-medium">
                    Certificate of completion
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsPgeTwo data={data} />
      <Footer />
    </div>
  );
};

export default CourseDetails;
