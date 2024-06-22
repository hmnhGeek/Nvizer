import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { oauthLogin, oauthSignup } from "../redux/actions/authActions";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  clearAuthSuccessMsgIfAny,
  clearLoginErrorIfAny,
} from "../redux/features/authSlice";

const SignupPage = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });

  const dispatch = useDispatch();

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

  // Check if there is any error related to signup. If yes, show it & clear the message from store.
  useEffect(() => {
    if (authError) toast.error(authError);
    dispatch(clearLoginErrorIfAny());
  }, [authError]);

  useEffect(() => {
    if (authSuccess) {
      // providing a hardcoded id to prevent duplicate toasts
      toast.success(authSuccess, { id: 2 });

      // login the new user as the signup was successful
      dispatch(oauthLogin(credentials));
    }
    dispatch(clearAuthSuccessMsgIfAny());
  }, [authSuccess]);

  const signup = () => {
    let { password, confirmPassword } = credentials;
    if (password === confirmPassword) dispatch(oauthSignup(credentials));
    else
      toast.error(
        "Confirm password is not same as entered password. Please check!"
      );
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-74px)]">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome!</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome! Please enter an email and password.
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="Enter an email"
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
              placeholder="Enter a password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Confirm Password</span>
            <input
              type="password"
              onChange={(e) =>
                setCredentials((x) => ({
                  ...x,
                  confirmPassword: e.target.value,
                }))
              }
              placeholder="Confirm password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <button
            onClick={signup}
            disabled={isSubmitting}
            className="w-full disabled:opacity-50 bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            {!isSubmitting ? "Signup" : "Please wait..."}
          </button>
          <div className="text-center text-gray-400">
            Already have an account? &nbsp;
            <NavLink to={"/login"}>
              <span className="font-bold text-black">Login here!</span>
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

export default SignupPage;
