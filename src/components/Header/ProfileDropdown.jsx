import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { oauthLogout } from "../../redux/actions/authActions";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = useSelector((state) => state.auth.username);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 bg-white rounded-full focus:outline-none"
      >
        {/* Profile Icon or Avatar can be placed here */}
        <FontAwesomeIcon icon={faUser} onClick={toggleDropdown} /> &nbsp;{" "}
        {email}
      </button>
      <div className={`dropdown-profile ${isOpen ? "show" : ""}`}>
        <ul className="flex flex-col gap-4">
          <li
            className="hover:text-red-600 cursor-pointer"
            onClick={() => dispatch(oauthLogout(token))}
          >
            <FontAwesomeIcon icon={faRightFromBracket} /> &nbsp; Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
