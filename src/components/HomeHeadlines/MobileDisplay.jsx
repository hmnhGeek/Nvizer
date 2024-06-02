import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const MobileDisplay = ({ articles }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-8 overflow-x:hidden">
        {articles.map((news, index) => (
          <div key={index}>
            <NewsCard news={news} className="w-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileDisplay;
