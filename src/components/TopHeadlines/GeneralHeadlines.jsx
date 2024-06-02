import React, { useEffect, useState } from "react";
import Api from "../../Api/Api";
import { conf } from "../../conf/conf";
import NewsCard from "../NewsCard/NewsCard";

const GeneralHeadlines = () => {
  const [generalArticles, setGeneralArticles] = useState([]);

  useEffect(() => {
    Api(`/top-headlines?category=general&lang=en&apikey=${conf.apiKey}`, "get")
      .then((response) => {
        console.log(response.data.articles);
        setGeneralArticles(response.data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  if (generalArticles.length === 0) return null;
  return (
    <div
      id="general-headlines-container"
      className="flex flex-col overflow-x-hidden m-2"
    >
      <div id="companies-title" className="flex justify-center gap-2 mt-5">
        <span className="font-medium">GENERAL HEADLINES</span>
      </div>
      <div className="flex flex-wrap justify-center items-center m-8 overflow-x:hidden">
        {generalArticles.map((news, index) => (
          <div key={index}>
            <NewsCard
              news={news}
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralHeadlines;
