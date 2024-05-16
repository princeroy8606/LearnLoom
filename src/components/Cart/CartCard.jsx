import React from "react";
import assets from "../../assets/assets";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { RemoveCourseFromCart } from "../../redux/actions/courseActions";

const CartCard = ({ data }) => {
  const { userData } = useAuth();
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.stopPropagation();
    console.log("start");
    if (userData)
      dispatch(
        RemoveCourseFromCart({ userId: userData?._id, courseId: data?._id })
      );
  };
  return (
    <div className="w-full h-[12rem] border-t-2 border-b-2 border-lime-400 flex items-center justify-between p-1">
      <img src={data?.thubnail} alt="cart" className="w-[25%] h-[100%]" />
      <div className="w-[60%] h-full flex flex-col justify-around">
        <h1 className="text-[1.5rem] font-medium">{data?.courseName}</h1>
        <h1 className="text-[1rem] font-normal w-full text-gray-500">
          {data?.description}
        </h1>
      </div>
      <div className="w-20% h-full flex flex-col justify-around items-end">
        <div className="w-[4rem] h-[2rem] rounded-[2rem] bg-lime-400  flex items-center justify-center">
          <h1 className="text-[1.1rem] font-semibold text-rose-400">2hr</h1>
        </div>
        <h1 className="text-[2.1rem] font-semibold text-gray-400">
          ₹ {data?.fees}
        </h1>
        <h1
          className="text-[1.2rem] font-semibold text-gray-600 bg-slate-100 py-1 cursor-pointer  px-4 rounded-[2rem]"
          onClick={(e) => handleRemove(e)}
        >
          Remove
        </h1>
      </div>
    </div>
  );
};

export default CartCard;
