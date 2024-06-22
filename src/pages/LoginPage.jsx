import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { oauthLogin } from "../redux/actions/authActions";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  clearAuthSuccessMsgIfAny,
  clearLoginErrorIfAny,
} from "../redux/features/authSlice";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Logic to be added wherever you want to check logged in state of a user
   */
  const token = useSelector((state) => state.auth.token);
  const authError = useSelector((state) => state.auth.error);
  const authSuccess = useSelector((state) => state.auth.successMsg);
  const isSubmitting = useSelector((state) => state.auth.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/favourites");
    }
  }, [token]);

  // Check if there is any error related to login. If yes, show it & clear the message from store.
  useEffect(() => {
    if (authError) toast.error(authError);
    dispatch(clearLoginErrorIfAny());
  }, [authError]);

  useEffect(() => {
    if (authSuccess) {
      // providing a hardcoded id to prevent duplicate toasts
      toast.success(authSuccess, { id: 1 });
    }
    dispatch(clearAuthSuccessMsgIfAny());
  }, [authSuccess]);

  const login = (formData) => {
    dispatch(oauthLogin(formData));
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-74px)]">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Log In</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your credentials.
          </span>
          <form onSubmit={handleSubmit(login)} noValidate>
            <div className="py-1">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email ID is required!",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email ID!",
                  },
                })}
              />
            </div>
            <p className="mt-1 text-red-500">{errors?.email?.message}</p>
            <div className="py-1">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long!",
                  },
                  maxLength: {
                    value: 128,
                    message: "Password must be less than 128 characters long!",
                  },
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must contain at least one uppercase letter!",
                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must contain at least one lowercase letter!",
                    hasDigit: (value) =>
                      /\d/.test(value) ||
                      "Password must contain at least one digit!",
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                      "Password must contain at least one special character!",
                  },
                })}
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
              <p className="mt-1 text-red-500">{errors?.password?.message}</p>
            </div>
            <button
              disabled={isSubmitting}
              className="w-full mt-3 disabled:opacity-50 bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              {!isSubmitting ? "Log In" : "Please wait..."}
            </button>
          </form>
          <div className="text-center text-gray-400">
            Don't have an account? &nbsp;
            <NavLink to={"/signup"}>
              <span className="font-bold text-black">Sign up for free</span>
            </NavLink>
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
