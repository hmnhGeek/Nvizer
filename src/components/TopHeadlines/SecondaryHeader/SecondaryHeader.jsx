import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SecondaryHeader(props) {
  const [hamMenu, setHamMenu] = useState("hidden");

  return (
    <nav className="p-3 flex bg-gray-100 justify-center items-center">
      <div className="hidden md:flex gap-12">
        <NavLink
          to="/top-headlines/general"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          General
        </NavLink>
        <NavLink
          to="/top-headlines/world"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          World
        </NavLink>
        <NavLink
          to="/top-headlines/nation"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Nation
        </NavLink>
        <NavLink
          to="/top-headlines/business"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Business
        </NavLink>
        <NavLink
          to="/top-headlines/technology"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Technology
        </NavLink>
        <NavLink
          to="/top-headlines/entertainment"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Entertainment
        </NavLink>
        <NavLink
          to="/top-headlines/sports"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Sports
        </NavLink>
        <NavLink
          to="/top-headlines/science"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Science
        </NavLink>
        <NavLink
          to="/top-headlines/health"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-primary" : ""} hover:text-primary`
          }
        >
          Health
        </NavLink>
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
          <NavLink
            to="/top-headlines/general"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            General
          </NavLink>
          <NavLink
            to="/top-headlines/world"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            World
          </NavLink>
          <NavLink
            to="/top-headlines/nation"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Nation
          </NavLink>
          <NavLink
            to="/top-headlines/business"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Business
          </NavLink>
          <NavLink
            to="/top-headlines/technology"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Technology
          </NavLink>
          <NavLink
            to="/top-headlines/entertainment"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Entertainment
          </NavLink>
          <NavLink
            to="/top-headlines/sports"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Sports
          </NavLink>
          <NavLink
            to="/top-headlines/science"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Science
          </NavLink>
          <NavLink
            to="/top-headlines/health"
            className={({ isActive }) =>
              `font-medium m-3 p-3 block rounded-lg hover:bg-gray-50 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Health
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default SecondaryHeader;
