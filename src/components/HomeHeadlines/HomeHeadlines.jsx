import React, { useEffect, useState } from "react";
import Api from "../../Api/Api";
import { conf } from "../../conf/conf";
import Carousel from "./Carousel";
import MobileDisplay from "./MobileDisplay";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";

const fetchHomeHeadlines = async () => {
  return await Api(
    `/top-headlines?category=general&lang=en&apikey=${conf.apiKey}`,
    "get"
  );
};

const HomeHeadlines = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "home-headlines",
    fetchHomeHeadlines,
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) return <Spinner />;
  if (data.data.articles.length === 0) return null;
  return (
    <div
      id="general-headlines-container"
      className="flex flex-col overflow-x-hidden m-2"
    >
      <div id="companies-title" className="flex justify-center gap-2">
        <span className="font-medium">GENERAL HEADLINES</span>
      </div>
      <div className="lg:flex hidden justify-center items-center m-8 overflow-x:hidden">
        <Carousel articles={data.data.articles} />
      </div>
      <div className="lg:hidden flex justify-center items-center m-8 overflow-x:hidden">
        <MobileDisplay articles={data.data.articles} />
      </div>
    </div>
  );
};

export default HomeHeadlines;
