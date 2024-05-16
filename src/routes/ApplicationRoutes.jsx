import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Auth from "../pages/Auth/Auth";
import Courses from "../pages/Courses/Courses";
import Profile from "../pages/Profile/Profile";
import Cart from "../pages/Cart";
import CourseDetails from "../pages/Courses/CourseDetails";
import MyCourses from "../pages/MyCourses";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/courses/details" element={<CourseDetails/>} />
      <Route path="/mycourses" element={<MyCourses/>} />
    </Routes>
  );
};

export default ApplicationRoutes;
