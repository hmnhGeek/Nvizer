import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { oauthLogin } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  const dispatch = useDispatch();

  /**
   * Logic to be added wherever you want to check logged in state of a user
   */
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/favourites");
    }
  }, [token]);

  const login = () => {
    dispatch(oauthLogin(credentials));
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-74px)]">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome Back!</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your credentials.
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="Enter your email"
              onChange={(e) =>
                setCredentials((x) => ({ ...x, email: e.target.value }))
              }
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              onChange={(e) =>
                setCredentials((x) => ({ ...x, password: e.target.value }))
              }
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <button
            onClick={login}
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Log In
          </button>
          <div className="text-center text-gray-400">
            Don't have an account? &nbsp;
            <span className="font-bold text-black">Sign up for free</span>
          </div>
        </div>
        <div className="relative">
          <img
            src={logo}
            alt="logo"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
