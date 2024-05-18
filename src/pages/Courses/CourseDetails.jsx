import React, { useEffect } from "react";
import NavBar from "../../components/global/NavBar";
import Footer from "../../components/global/Footer";
import assets from "../../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { addCourseToCart, buyCourse } from "../../redux/actions/courseActions";
import { gsap } from "gsap";
import DetailsPgeTwo from "./DetailsPgeTwo";
import DetailsPageThree from "./DetailsPageThree";

const CourseDetails = () => {
  const { data } = useLocation()?.state;
  const { userData } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuy = () => {
    dispatch(buyCourse({ userId: userData?._id, CourseId: [data?._id] }));
  };

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.fromTo(".name", { x: 100 }, { x: 0 });
    t1.fromTo(
      ".features",
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
      },
      { y: 0, opacity: 1, stagger: 0.2 }
    );
    //   return ()=>
  }, []);

  const handleAddtoCart = (e) => {
    if (userData) {
      dispatch(addCourseToCart({ userId: userData?._id, courseId: data?._id }));
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="w-screen h-auto flex flex-col items-center">
      <NavBar />
      <div className="w-[100%] bg-slate-200  flex  items-center justify-center px-2 ">
        <div className="w-full h-auto flex relative md:h-screen ">
          <img
            src={data?.thubnail}
            className="w-full h-full absolute top-0 z-1 "
          />
          <div className="w-full h-full z-10 card-gradient flex flex-col items-end px-2 md:flex-row ">
            <div className="w-full h-[100%] px-2 flex flex-col justify-around md:w-[50%] md:h-[90vh]">
              <h1 className="text-[1.5rem] font-semibold text-white name opacity-100  w-full md:text-[2.5rem]">
                {data?.courseName}
              </h1>
              <h1 className="text-[1rem] font-medium text-white md:text-[1.5rem]">
                {data?.description}
              </h1>
              <div className="w-[90%] h-40 flex justify-between items-center">
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
                    {!userData?.cart?.includes(data?._id) && (
                      <div
                        className="w-[40%] h-12 bg-gray-700 rounded-[50rem] flex items-center justify-center cursor-pointer"
                        onClick={() => handleAddtoCart()}
                      >
                        <h2 className="text-white">Add to Cart</h2>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="w-[100%] h-full bg-white flex items-center justify-center lg:w-[35%] md:w-[50%] px-3">
              <div className="w-[100%] h-[80%] bg-lime-500  flex flex-col justify-start gap-8 items-center md:p-2 md:h-[70%]">
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
      <DetailsPageThree />
      <Footer />
    </div>
  );
};

export default CourseDetails;
