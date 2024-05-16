import React, { useEffect } from "react";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import assets from "../assets/assets";
import CartCard from "../components/Cart/CartCard";
import { useAuth } from "../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart } from "../redux/actions/courseActions";

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

  return (
    <div className="w-screen h-auto flex flex-col items-center">
      <NavBar />
      <div className="w-[80%] min-h-screen">
        <h1 className="text-[2.5rem] font-semibold">Cart</h1>
        <div className="w-full h-full flex flex-col items-center justify-between mt-8 relative">
          <div className="w-[80%] h-auto flex flex-col gap-10">
            {data?.cart?.map((course, index) => (
              <CartCard data={course} key={index} />
            ))}
            {/* <CartCard /> */}
          </div>
          <div className="w-full h-[12rem] p-2 mt-8 border-t-2 border-black flex items-center justify-end">
            <div className="w-[35%] h-full flex flex-col justify-between">
              <div className="w-full h-[50%] flex justify-between">
                <div className="w-[40%] h-full flex flex-col justify-around">
                  <h1 className="text-[2.2rem] font-medium ">Sub Total </h1>
                  <h2 className="text-[1.5rem] font-medium text-gray-600">
                    {data?.cart?.length} Items
                  </h2>
                </div>
                <div className="w-50% h-full flex items-center justify-center">
                  <h1 className="text-[3rem] font-semibold">
                    $ {calculateTotal()}{" "}
                  </h1>
                </div>
              </div>
              <div className="w-full h-[40%] rounded-[10rem] bg-lime-400 flex items-center justify-center cursor-pointer shadow-lg">
                <h1 className="text-[2.2rem] font-semibold">Buy Now</h1>
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
