import React from "react";
import { useNavigate } from "react-router-dom";
import nothing from "../../images/nothing.png";

const NoSavedArticles = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/top-headlines/general");
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-74px)]">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl">
        <div className="relative">
          <img
            src={nothing}
            alt="No Favourites"
            className="w-full h-48 md:h-64 rounded-t-2xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14 text-center">
          <span className="mb-3 text-4xl font-bold">No Favourites Yet</span>
          <span className="font-light text-gray-400 mb-4">
            You have not added any articles to your favourites yet.
          </span>
          <p className="font-light text-gray-400 mb-8">
            Start exploring and add some articles to your favourites!
          </p>
          <button
            onClick={goToHomePage}
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Explore News!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoSavedArticles;
