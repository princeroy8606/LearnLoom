import React, { useEffect } from "react";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { addCourseToCart, getAllCart } from "../../redux/actions/courseActions";

const CourseCard = ({ data }) => {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const dispatch = useDispatch();

  const handleAddtoCart = (e) => {
    e.stopPropagation();
    if (userData)
      dispatch(addCourseToCart({ userId: userData?._id, courseId: data?._id }));
  };
  console.log(userData);

  const checkcartStatus = () => {
    if (data?.enrolled?.includes(userData?._id)) return null;
    if (userData?.cart?.includes(data?._id)) return "Added to cart";
    if (!userData?.cart?.includes(data?._id))
      return (
        <img
          src={assets.Images.AddtoCart}
          className="w-[4rem] h-[2rem] bg-gray-300 object-contain rounded-full p-1 cursor-pointer shadow-sm hover:w-[5rem]"
          onClick={(e) => handleAddtoCart(e)}
        />
      );
  };

  return (
    <div
      className="w-[20rem] h-[25rem] rounded-2xl shadow-md shadow-lime-200 relative cursor-pointer hover:shadow-lime-600 hover:shadow-xl transition-all"
      onClick={() => navigate("/courses/details", { state: { data: data } })}
    >
      <img src={data?.thubnail} className="w-full h-[60%]" />
      <div className=" w-full h-[40%] p-4 flex flex-col justify-between">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[1.2rem] font-medium">{data?.courseName}</h1>
          <div className="w-[20%] h-[1.5rem] rounded-2xl flex items-center justify-center bg-lime-100">
            <h1 className="font-semibold text-gray-500">2hr</h1>
          </div>
        </div>
        {/* <p className="text-[.8rem] font-normal text-lime-800">
          {data?.description}
        </p> */}
        <div className="w-full flex justify-between">
          <h1 className="text-[1.5rem] font-medium text-lime-900">
            {data?.enrolled?.includes(userData?._id)
              ? "Enrolled 🚀"
              : `₹ ${data?.fees}`}
          </h1>
          {checkcartStatus()}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
