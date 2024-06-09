import React from "react";
import Api from "../../Api/Api";
import { conf } from "../../conf/conf";
import NewsCard from "../NewsCard/NewsCard";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";

const fetchTopHeadlinesOnTopic = async (category) => {
  return await Api(
    `/top-headlines?category=${category}&lang=en&apikey=${conf.apiKey}`,
    "get"
  );
};

const Template = ({ title, category }) => {
  const { isLoading, data } = useQuery(
    ["top-headlines", category],
    () => fetchTopHeadlinesOnTopic(category),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
      enabled: !!category,
    }
  );

  if (isLoading) return <Spinner />;
  if (data.data.articles.length === 0) return null;
  return (
    <div
      id="general-headlines-container"
      className="flex flex-col overflow-x-hidden m-2"
    >
      <div id="companies-title" className="flex justify-center gap-2 mt-5">
        <span className="font-medium">{title.toUpperCase()}</span>
      </div>
      <div className="flex flex-wrap justify-center items-center m-8 overflow-x:hidden">
        {data.data.articles.map((news, index) => (
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

export default Template;
