import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";

function Header(props) {
  const [hamMenu, setHamMenu] = useState("hidden");
  const location = useLocation();
  const isTopHeadlinesActive = location.pathname.startsWith("/top-headlines");

  return (
    <nav className="p-3 flex bg-white justify-between items-center">
      <NavLink to="/" id="brand" className="flex gap-2 items-center">
        <img
          src={logo}
          alt="brand-logo"
          className="object-cover max-w-12 max-h-12"
        />
        <span className="text-lg font-medium font-display">Nvizer</span>
      </NavLink>
      <div className="hidden md:flex gap-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/top-headlines/general"
          className={() =>
            `font-medium ${
              isTopHeadlinesActive ? "text-primary" : ""
            } hover:text-primary`
          }
        >
          Top Headlines
        </NavLink>
        {/* <NavLink
          to="/weather"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Weather
        </NavLink> */}
      </div>
      <div className="flex gap-2">
        <button className="hidden md:flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          Login
        </button>
        <button className="hidden md:flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          Sign Up
        </button>
      </div>
      <button className="flex md:hidden" onClick={() => setHamMenu("")}>
        <FontAwesomeIcon className="text-gray-600" icon={faBars} />
      </button>

      <div className={`fixed z-10 md:hidden ${hamMenu} bg-white inset-0 p-3`}>
        <div className="flex justify-between">
          <NavLink
            to="/"
            onClick={() => setHamMenu("hidden")}
            id="brand"
            className="flex gap-2 items-center"
          >
            {/* <img className="object-cover max-w-12 max-h-12" /> */}
            <span className="text-lg font-medium font-display">Nvizer</span>
          </NavLink>
          <button
            className="flex md:hidden"
            onClick={() => setHamMenu("hidden")}
          >
            <FontAwesomeIcon className="text-gray-600" icon={faXmark} />
          </button>
        </div>
        <div className="mt-6">
          <NavLink
            to="/"
            onClick={() => setHamMenu("hidden")}
            className={({ isActive }) =>
              `font-medium m-3 p-3 ${
                isActive ? "text-primary" : ""
              } hover:bg-gray-50 block rounded-lg`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/top-headlines/general"
            onClick={() => setHamMenu("hidden")}
            className={() =>
              `font-medium m-3 p-3 ${
                isTopHeadlinesActive ? "text-primary" : ""
              } hover:bg-gray-50 block rounded-lg`
            }
          >
            Top Headlines
          </NavLink>
          {/* <a
            href="#"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            Weather
          </a> */}
        </div>
        <div className="h-[1px] bg-gray-300"></div>
        <button className="mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50">
          Login
        </button>
        <button className="mt-2 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Header;
