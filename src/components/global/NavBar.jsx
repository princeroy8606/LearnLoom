import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import assets from "../../assets/assets";

const NavBar = () => {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const location = useLocation();
  return (
    <div className="w-[80%] h-16 bg-transparent flex items-center justify-between font-medium">
      <div className="w-fit h-[90%] bg-transparent flex items-center cursor-pointer">
        <h1>LearnLoom</h1>
      </div>
      <div className="w-[50%] h-[90%] bg-transparent flex items-center justify-between text-gray-600 ">
        <h1
          className="cursor-pointer  hover:text-black px-3 py-1 rounded-full"
          style={{
            color: location.pathname == "/" ? "black" : null,
            backgroundColor: location.pathname == "/" && "#BDE148",
          }}
          onClick={() => navigate("/")}
        >
          Home
        </h1>
        <h1
          className="cursor-pointer  hover:text-black px-3 py-1 rounded-full"
          style={{
            color: location.pathname == "/courses" ? "black" : null,
            backgroundColor: location.pathname == "/courses" && "#BDE148",
          }}
          onClick={() => navigate("/courses")}
        >
          Courses
        </h1>
        <h1
          className="cursor-pointer  hover:text-black px-3 py-1 rounded-full"
          style={{
            color: location.pathname == "/mycourses" ? "black" : null,
            backgroundColor: location.pathname == "/mycourses" && "#BDE148",
          }}
          onClick={() => navigate("/mycourses")}
        >
          My Courses
        </h1>
        {/* <img
          src={assets.Images.ShopingCart}
          alt="cart"
          className="w-[2rem] h-[3rem] object-contain cursor-pointer"
        /> */}
        {/* <h1 className="cursor-pointer  hover:text-black">Cart</h1> */}

        {userData ? (
          <div
            className="w-[20%] h-10 bg-black rounded-[50rem] flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <h2 className="text-white font-medium">{userData?.name}</h2>
          </div>
        ) : (
          <div
            className="w-[20%] h-10 bg-black rounded-[50rem] flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/auth")}
          >
            <h2 className="text-white font-medium">Login</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
