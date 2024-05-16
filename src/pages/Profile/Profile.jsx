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
      <div className="w-[80%] h-[90vh] flex justify-between items-center ">
        <div className="w-[50%] h-full flex flex-col items-center justify-around border-r-2">
          <div className="w-full h-[35%] flex items-center justify-center ">
            <img
              src={assets.Images.Profile}
              alt="profile"
              className="w-[15rem] h-[15rem] rounded-full object-contain bg-[#D3F36B]"
            />
          </div>
          <div className="w-full h-[25%] flex flex-col items-center justify-around">
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
        <div className="w-full h-[90%] flex flex-col relative px-8">
          <img
            src={assets.Images.Stroke}
            alt="stroke"
            className=" absolute z-1 left-[10%] top-[3%] w-[25%]"
          />
          <h1 className="text-[2rem] font-medium h-28 z-10 ">
            Your Certificates
          </h1>
          <div className="w-full h-[80%] flex flex-wrap gap-6">
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
