import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import assets from "../../assets/assets";
import gsap from "gsap";

const NavBar = () => {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const location = useLocation();
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useEffect(() => {
    const t1 = gsap.timeline();
    if (openMobileNav) {
      t1.to(".mobile-menu", {
        xPercent: -100,
        duration: 0.3,
        ease: "power3.inOut",
        scale: 1,
      });
      t1.to(".mobile-nav-item", {
        x: 10,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      });
    } else {
      t1.to(".mobile-nav-item", {
        x: 100,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
      });
      t1.to(".mobile-menu", {
        x: "100%",
        duration: 0.3,
        ease: "power3.inOut",
        scale: 0,
      });
    }
  }, [openMobileNav]);

  return (
    <div className="w-[80%] h-16 bg-transparent flex items-center justify-between font-medium">
      <div
        className="w-fit h-[90%] bg-transparent flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1>LearnLoom</h1>
      </div>
      <div className="hidden md:flex w-[50%] h-[90%] bg-transparent items-center justify-between text-gray-600 md:w-[60%] lg:w-[50%]">
        <NavItem
          label="Home"
          path="/"
          location={location}
          navigate={navigate}
        />
        <NavItem
          label="Courses"
          path="/courses"
          location={location}
          navigate={navigate}
        />
        {userData && (
          <NavItem
            label="My Courses"
            path="/mycourses"
            location={location}
            navigate={navigate}
          />
        )}
        <div
          className="w-[20%] h-10 bg-black rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => navigate(userData ? "/profile" : "/auth")}
        >
          <h2 className="text-white font-medium">
            {userData ? userData.name : "Login"}
          </h2>
        </div>
      </div>
      <div className="md:hidden" onClick={() => setOpenMobileNav(true)}>
        Menu =
      </div>
      {window.screen.width <= 738 && (
        <div className="absolute w-full h-screen bg-slate-200 top-0 right-0 z-50 flex flex-col items-center justify-start py-11 mobile-menu gap-16">
          <div className="w-[90%] h-[3rem] flex items-center justify-between">
            <h1 className="text-[1.2rem] text-lime-800 font-semibold">
              LearnLoom
            </h1>
            <div
              className="w-[2rem] h-[2rem] rounded-full bg-black flex items-center justify-center cursor-pointer"
              onClick={() => setOpenMobileNav(false)}
            >
              <span className="text-white">X</span>
            </div>
          </div>
          <MobileNavItem label="Home" path="/" navigate={navigate} />
          <MobileNavItem label="Courses" path="/courses" navigate={navigate} />
          {userData && (
            <MobileNavItem
              label="My Courses"
              path="/mycourses"
              navigate={navigate}
            />
          )}
          <MobileNavItem
            label={userData ? userData.name : "Login"}
            path={userData ? "/profile" : "/auth"}
            navigate={navigate}
          />
        </div>
      )}
    </div>
  );
};

const NavItem = ({ label, path, location, navigate }) => (
  <h1
    className="cursor-pointer hover:text-black px-3 py-1 rounded-full"
    style={{
      color: location.pathname === path ? "black" : null,
      backgroundColor: location.pathname === path ? "#BDE148" : null,
    }}
    onClick={() => navigate(path)}
  >
    {label}
  </h1>
);

const MobileNavItem = ({ label, path, navigate }) => (
  <div
    className="w-[50%] h-[3rem] flex flex-col items-start justify-around cursor-pointer mobile-nav-item"
    onClick={() => navigate(path)}
  >
    <h1 className="text-[1.5rem] font-medium">{label}</h1>
    <div
      className="w-full h-1 bg-black rounded-full"
      style={{ backgroundColor: location.pathname === path ? "#BDE148" : null }}
    ></div>
  </div>
);

export default NavBar;
