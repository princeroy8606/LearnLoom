import React from "react";
import NavBar from "../../components/global/NavBar";
import Footer from "../../components/global/Footer";
import assets from "../../assets/assets";
import { useAuth } from "../../contexts/AuthContext";
import CourseCard from "../../components/Courses/CourseCard";
import Certificate from "../../components/Profile/Certificate";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/auth");
  };
  return (
    <div className="w-screnn h-auto flex flex-col items-center justify-center">
      <NavBar />
      <div className="w-[80%] h-auto flex flex-col justify-between items-center md:flex-row md:h-[90vh]">
        <div className="w-full h-[50vh] flex flex-col items-center justify-around border-b-2 md:border-r-2 md:w-[80%] md:h-full">
          <div className="w-[35%] h-[25%] flex items-center justify-center md:w-[15rem] md:h-[15rem] ">
            <img
              src={assets.Images.Profile}
              alt="profile"
              className="w-full h-full rounded-full object-contain bg-[#D3F36B] md:h-[15rem]"
            />
          </div>
          <div className="w-full h-[35%] flex flex-col items-center justify-around md:h-[25%]">
            <h1 className="text-[2rem] font-semibold ">{userData?.name}</h1>
            <h1 className="text-[1.3rem] font-semibold ">{userData?.email}</h1>
            <h1 className="text-[1.3rem] font-semibold ">{userData?.phone}</h1>
          </div>

          <div className=" w-[50%] h-16">
            <h1
              className="text-[1.2rem] font-semibold cursor-pointer text-center"
              onClick={() => handleLogout()}
            >
              Log Out
            </h1>
          </div>
        </div>
        <div className="w-full h-[90%] flex flex-col relative md:px-8">
          <img
            src={assets.Images.Stroke}
            alt="stroke"
            className=" absolute z-1 left-[10%] top-[3%] w-[25%]"
          />
          <h1 className="text-[1.5rem] font-medium  z-10 md:text-[2rem]">
            Your Certificates
          </h1>
          <div className="w-full h-[80%] flex mt-3 gap-6 flex-wrap md:gap-6 ">
            <Certificate />
            {/* <Certificate color={"#000000"} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
