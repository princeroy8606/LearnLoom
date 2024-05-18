import React, { useEffect, useState } from "react";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import { useSelector } from "react-redux";
import CourseCard from "../components/Courses/CourseCard";
import { useAuth } from "../contexts/AuthContext";

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCoursed] = useState([]);
  const { userData } = useAuth();
  const courses = useSelector((state) => state?.courseReducer?.allCourses);
  useEffect(() => {
    if (courses) {
      let enrolled = courses.filter((course) =>
        course?.enrolled?.includes(userData?._id)
      );
      setEnrolledCoursed(enrolled);
    }
  }, []);
  return (
    <div className="w-screen flex flex-col items-center">
      <NavBar />
      <div className="w-[80%] min-h-[90vh] ">
        <h1 className="text-[1.8rem] font-semibold">Enjoy Your Learing</h1>
        <div className="w-[100%] h-auto flex flex-wrap gap-8 mt-8 p-2 md:w-[85%]">
          {enrolledCourses.length > 0 &&
            enrolledCourses?.map((course, index) => (
              <CourseCard key={index} data={course} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCourses;
