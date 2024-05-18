import React, { useEffect, useState } from "react";
import NavBar from "../../components/global/NavBar";
import Footer from "../../components/global/Footer";
import CourseCard from "../../components/Courses/CourseCard";
import assets from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/actions/courseActions";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector((state) => state?.courseReducer?.allCourses);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const handleSearch = (e) => {
    if (courses?.length > 0) {
      let filtered = courses.filter((course) =>
        course?.courseName
          ?.toLowerCase()
          ?.includes(e?.target?.value?.toLowerCase())
      );
      setFilter(filtered);
    }
  };

  return (
    <div className="w-screen h-auto flex flex-col items-center relative">
      <img
        className="fixed w-[5rem] h-[5rem] object-contain shadow-xl right-2 bottom-2 rounded-[50%] shadow-lime-300 cursor-pointer"
        src={assets.Images.ShopingCart}
        onClick={() => navigate("/cart")}
      />
      <NavBar />
      <div className=" w-[95%] min-h-screen flex flex-col items-center justify-center md:w-[80%]">
        <h1 className="text-[1.5rem] font-semibold text-[#bde148] z-10 mt-12 text-center  md:text-[2.5rem] lg:text-[4rem]">
          Level Up Your Coding Skills
        </h1>
        <div className="w-full h-[3rem] flex justify-center items-center mt-8 md:h-[4rem]">
          <div className="w-[90%] h-[100%] rounded-[10rem]  bg-slate-600 flex justify-between items-center sticky top-5 z-20 md:w-[60%]">
            <input
              type="text"
              className="w-[85%] h-[100%] rounded-[10rem] p-5 px-5 md:px-10 bg-transparent outline-none text-[1.3rem] font-medium text-white"
              placeholder="Search Course"
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>
        <div className="w-[85%] h-auto flex flex-wrap gap-8 mt-8 p-2">
          {!filter
            ? courses?.map((course) => (
                <CourseCard key={course?._d} data={course} />
              ))
            : filter?.map((course) => (
                <CourseCard key={course?._d} data={course} />
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
