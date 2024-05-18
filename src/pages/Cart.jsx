import React, { useEffect } from "react";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import assets from "../assets/assets";
import CartCard from "../components/Cart/CartCard";
import { useAuth } from "../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { buyCourse, getAllCart } from "../redux/actions/courseActions";

const Cart = () => {
  const { userData } = useAuth();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.courseReducer?.carts);

  useEffect(() => {
    if (userData?._id) dispatch(getAllCart(userData?._id));
  }, [userData]);

  const calculateTotal = () => {
    if (data) {
      let total = 0;
      data?.cart.forEach((course) => {
        total += course?.fees;
      });
      return total;
    } else {
      return 0;
    }
  };
  const buyAll = () => {
    let courseIds = [];
    data?.cart?.map((item) => {
      courseIds.push(item._id)
    });
    console.log("Array", courseIds);
    dispatch(buyCourse({ userId: userData?._id, CourseId: courseIds }));
  };

  return (
    <div className="w-screen h-auto flex flex-col items-center">
      <NavBar />
      <div className="w-[80%] min-h-screen">
        <h1 className="text-[2.5rem] font-semibold">Cart</h1>
        <div className="w-full h-full flex flex-col items-center justify-between mt-8 relative">
          <div className="w-full h-auto flex flex-col gap-10 md:w-[80%]">
            {data?.cart?.map((course, index) => (
              <CartCard data={course} key={index} />
            ))}
            {/* <CartCard /> */}
          </div>
          <div className="w-full h-[9rem] p-2 mt-8 border-t-2 border-black flex items-center justify-end md:h-[12rem]">
            <div className="w-[65%] h-full flex flex-col justify-between md:w-[35%]">
              <div className="w-full h-[50%] flex justify-between">
                <div className="w-[60%] h-full flex flex-col justify-around md:w-[40%]">
                  <h1 className="text-[1.2rem] font-medium md:text-[2.2rem]">Sub Total </h1>
                  <h2 className="text-[1rem] font-medium text-gray-600 md:text-[1.5rem]">
                    {data?.cart?.length} Items
                  </h2>
                </div>
                <div className="w-50% h-full flex items-center justify-center">
                  <h1 className="text-[1.5rem] font-semibold md:text-[3rem]">
                    $ {calculateTotal()}{" "}
                  </h1>
                </div>
              </div>
              <div
                className="w-full h-[30%] rounded-[10rem] bg-lime-400 flex items-center justify-center cursor-pointer shadow-lg md:h-[40%]"
                onClick={() => buyAll()}
              >
                <h1 className="text-[1.2rem] font-semibold md:text-[2.2rem]">Buy Now</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
