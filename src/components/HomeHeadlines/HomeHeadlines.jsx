import React, { useEffect, useState } from "react";
import Api from "../../Api/Api";
import { conf } from "../../conf/conf";
import Carousel from "./Carousel";

const HomeHeadlines = () => {
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
      <div id="companies-title" className="flex justify-center gap-2">
        <span className="font-medium">GENERAL HEADLINES</span>
      </div>
      <div className="flex justify-center items-center m-8 overflow-x:hidden">
        <Carousel articles={generalArticles} />
      </div>
    </div>
  );
};

export default HomeHeadlines;
