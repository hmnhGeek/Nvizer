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
    <div className="flex justify-center items-center m-8 overflow-x:hidden bg-gray-100">
      <Carousel articles={generalArticles} />
    </div>
  );
};

export default HomeHeadlines;
