import React, { useEffect } from "react";
import NavBar from "../../components/global/NavBar";
import HomeScreenOne from "../../components/home/HomeScreenOne";
import HomeScreenTwo from "../../components/home/HomeScreenTwo";
import Counts from "../../components/home/Counts";
import HomeScreenThree from "../../components/home/HomeScreenThree";
import Footer from "../../components/global/Footer";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/actions/courseActions";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state?.courseReducer?.allCourses);

  useEffect(() => {
    if (!courses) dispatch(fetchCourses());
  }, []);

  console.log(courses);
  return (
    <div className="w-[100vw]   flex flex-col items-center">
      <img
        className="fixed w-[3rem] h-[3rem] object-contain shadow-md right-2 bottom-2 rounded-[50%] shadow-lime-900 cursor-pointer md:w-[5rem] md:h-[5rem] p-2"
        src={assets.Images.ShopingCart}
        onClick={() => navigate("/cart")}
      />
      <NavBar />
      <HomeScreenOne />
      <Counts />
      <HomeScreenTwo />
      {/* <HomeScreenThree /> */}
      <Footer />
    </div>
  );
};

export default Landing;
