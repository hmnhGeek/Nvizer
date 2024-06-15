import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useSelector } from "react-redux";

const MobileDisplay = ({ articles }) => {
  const saved = useSelector((state) => state.news.favs);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-8 overflow-x:hidden">
        {articles.map((news, index) => (
          <div key={index}>
            <NewsCard
              news={news}
              className="w-full"
              isFavourite={() =>
                saved.filter((x) => {
                  return x.article.url === news.url;
                })?.length >= 1
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileDisplay;
