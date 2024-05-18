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
    <div className="w-full h-[6rem] border-t-2 border-b-2 border-lime-400 flex items-center justify-between p-1 md:h-[12rem]">
      <img src={data?.thubnail} alt="cart" className="w-[30%] h-[100%]" />
      <div className="w-[49%] h-full flex flex-col justify-around md:w-[60%]">
        <h1 className="text-[.8rem] font-medium md:text-[1.5rem]">{data?.courseName}</h1>
        <h1 className="text-[8px] font-normal w-full text-gray-500 md:text-[1rem]">
          {data?.description?.slice(0,80)}
        </h1>
      </div>
      <div className="w-[20%] h-full flex flex-col justify-around items-end md:w-[20%]">
        <div className="w-[1.5rem] h-[1rem] rounded-[2rem] bg-lime-400  flex items-center justify-center md:w-[4rem] md:h-[2rem]">
          <h1 className="text-[8px] font-semibold text-rose-400 md:text-[1.1rem]">2hr</h1>
        </div>
        <h1 className="text-[1rem] font-semibold text-gray-400 md:text-[2.1rem]">
          ₹ {data?.fees}
        </h1>
        <h1
          className="text-[.7rem] font-semibold text-gray-600 bg-slate-100 px-[3px] py-[3px] md:py-1 cursor-pointer  md:px-4 rounded-[2rem] md:text-[1.2rem]"
          onClick={(e) => handleRemove(e)}
        >
          Remove
        </h1>
      </div>
    </div>
  );
};

export default CartCard;
