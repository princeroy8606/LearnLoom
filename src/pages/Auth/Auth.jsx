import React, { useEffect, useState } from "react";
import assets from "../../assets/assets";
import NavBar from "../../components/global/NavBar";
import Footer from "../../components/global/Footer";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction, registerAcion } from "../../redux/actions/authActions";
import {
  isStrongPassword,
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
} from "../../utils/validityChecks";

const Auth = () => {
  const dispatch = useDispatch();
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [islogin, setIslogin] = useState(true);
  const [errorArray, setErrorArray] = useState([]);
  const [conformPassword, setConformPassword] = useState(true);
  const [formData, setFormData] = useState({
    email: null,
    name: null,
    phone: null,
    password: null,
  });

  useEffect(() => {
    console.log(userData);
    if (userData) navigate("/");
  }, [userData]);

  const handleValueChange = (e, key, condition) => {
    let newArray = [...errorArray];
    setFormData({ ...formData, [key]: e?.target?.value });
    if (!condition && !newArray?.includes(key)) {
      newArray.push(key);
      setErrorArray(newArray);
    } else if (condition && newArray?.includes(key)) {
      newArray = newArray.filter((value) => value !== key);
      setErrorArray(newArray);
    }
  };

  const handleAction = () => {
    let newArray = [...errorArray];
    !formData.email && newArray.push("email");
    !formData.password && newArray.push("password");
    setErrorArray(newArray);
    if (
      islogin &&
      formData.email &&
      formData.password &&
      !newArray.includes("email") &&
      !newArray.includes("password")
    ) {
      dispatch(
        loginAction({ Email: formData?.email, Password: formData?.password })
      );
    } else if (!islogin) {
      const hasNullValues = Object.values(formData).some(
        (value) => value === null
      );
      if (hasNullValues) {
        Object.keys(formData).forEach((key) => {
          if (formData[key] === null && !newArray.includes(key))
            newArray.push(key);
        });
        return setErrorArray(newArray);
      }
      if (!hasNullValues && newArray.length < 1)
        dispatch(registerAcion(formData));
    }
  };

  console.log(errorArray);

  return (
    <div className="w-screen h-auto flex flex-col items-center relative">
      <div className="absolute w-screen flex items-center h-auto justify-center">
        <NavBar />
      </div>
      <div className="auth-bg w-[100%] h-[100vh] flex items-end justify-around">
        <div className="h-[100%] w-[55%] flex justify-end relative">
          <h1 className="text-[15rem] font-semibold text-white text-left">
            Hurry Up Friends
          </h1>
          <img
            src={assets.Images.Girl}
            alt="girl"
            className="h-[90%] w-[100%] object-contain hidden lg:block absolute bottom-0"
          />
        </div>
        <div
          className={`w-[35%]  bg-white rounded-[2rem] flex flex-col justify-around items-center self-end shadow-2xl`}
          style={{
            borderRadius: "2rem 2rem 0 0",
            transition: "all 100ms ease-in-out",
            height: islogin ? "80%" : "92%",
          }}
        >
          {!islogin ? (
            <h1 className="text-[2rem] font-medium">Sign Up</h1>
          ) : (
            <div className="w-auto h-5rem flex flex-col items-center">
              <h1 className="text-[3rem] font-medium">Welcome Back</h1>
              <p>Lets Hurry The Skilla are waiting</p>
            </div>
          )}

          {!islogin && (
            <div className="w-[80%] h-[5.5rem] flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <h4 className="text-[1.2rem] font-medium ">Name :</h4>
                {errorArray.includes("name") && (
                  <p className="text-red-600 ">The Name is invalid</p>
                )}
              </div>
              <input
                type="text"
                className="w-full h-[60%] bg-slate-100 rounded-lg p-3 border-[0] outline-none text-[1.2rem] text-gray-600"
                onChange={(e) =>
                  handleValueChange(e, "name", isValidName(e.target.value))
                }
                value={formData?.name}
              />
            </div>
          )}
          {!islogin && (
            <div className="w-[80%] h-[5.5rem] flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <h4 className="text-[1.2rem] font-medium ">Phone Number :</h4>
                {errorArray.includes("phone") && (
                  <p className="text-red-600 ">
                    vaild phone number is required
                  </p>
                )}
              </div>
              <input
                type="number"
                className="w-full h-[60%] bg-slate-100 rounded-lg p-3 border-[0] outline-none text-[1.2rem] text-gray-600"
                onChange={(e) =>
                  handleValueChange(
                    e,
                    "phone",
                    isValidPhoneNumber(e.target.value)
                  )
                }
                value={formData?.phone}
              />
            </div>
          )}
          <div className="w-[80%] h-[5.5rem] flex flex-col justify-between">
            <div className="w-full flex justify-between">
              <h4 className="text-[1.2rem] font-medium ">Email :</h4>
              {errorArray.includes("email") && (
                <p className="text-red-600 ">Enter valid email</p>
              )}
            </div>
            <input
              type="text"
              className="w-full h-[60%] bg-slate-100 rounded-lg p-3 border-[0] outline-none text-[1.2rem] text-gray-600"
              onChange={(e) =>
                handleValueChange(e, "email", isValidEmail(e.target.value))
              }
              value={formData?.email}
            />
          </div>
          <div className="w-[80%] h-[5.5rem] flex flex-col justify-between">
            <div className="w-full flex justify-between">
              <h4 className="text-[1.2rem] font-medium ">Password :</h4>
              {errorArray.includes("password") && (
                <p className="text-red-600 ">
                  {islogin ? "Invalid password" : "Try a strong password"}
                </p>
              )}
            </div>
            <input
              type="password"
              className="w-full h-[60%] bg-slate-100 rounded-lg p-3 border-[0] outline-none text-[1.2rem] text-gray-600"
              onChange={(e) =>
                handleValueChange(
                  e,
                  "password",
                  isStrongPassword(e.target.value)
                )
              }
              value={formData?.password}
            />
          </div>
          {!islogin && (
            <div className="w-[80%] h-[5.5rem] flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <h4 className="text-[1.2rem] font-medium ">
                  Conform Password :
                </h4>{" "}
                {!conformPassword && (
                  <p className="text-red-600 ">password missmatch</p>
                )}
              </div>

              <input
                type="password"
                className="w-full h-[60%] bg-slate-100 rounded-lg p-3 border-[0] outline-none text-[1.2rem] text-gray-600"
                onChange={(e) =>
                  setConformPassword(formData.password === e?.target?.value)
                }
              />
            </div>
          )}
          <div
            className="w-[80%] h-[4rem] flex items-center justify-center cursor-pointer bg-black rounded-2xl"
            onClick={() => handleAction()}
          >
            <h1 className="text-[1.5rem] font-semibold text-white">
              {islogin ? "Login" : "SignUp"}
            </h1>
          </div>
          <div className="w-[80%] h-[2rem] flex items-center justify-center rounded-2xl ">
            <h1 className="text-[1rem] font-normal text-gray-600">
              - {islogin ? "New to LearnLoom " : "Already Have an Account "}
              <span
                className="text-lime-900 underline cursor-pointer"
                onClick={() => setIslogin(!islogin)}
              >
                {!islogin ? "Login" : "SignUp"}
              </span>
              -
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
