import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SecondaryHeader(props) {
  const [hamMenu, setHamMenu] = useState("hidden");
  const categories = [
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  return (
    <nav className="p-3 flex bg-gray-100 justify-center items-center">
      <div className="hidden md:flex gap-12">
        {categories.map((category) => (
          <NavLink
            to={`/top-headlines/${category}`}
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
            }
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </NavLink>
        ))}
      </div>
      <button className="flex md:hidden" onClick={() => setHamMenu("")}>
        <FontAwesomeIcon className="text-gray-600" icon={faBars} />
      </button>

      <div className={`fixed z-10 md:hidden ${hamMenu} bg-white inset-0 p-3`}>
        <div className="flex justify-between">
          <button
            className="flex md:hidden"
            onClick={() => setHamMenu("hidden")}
          >
            <FontAwesomeIcon className="text-gray-600" icon={faXmark} />
          </button>
        </div>
        <div className="mt-6 flex flex-col items-center">
          {categories.map((category) => (
            <NavLink
              to={`/top-headlines/${category}`}
              onClick={() => setHamMenu("hidden")}
              className={({ isActive }) =>
                `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default SecondaryHeader;
