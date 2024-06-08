import React from "react";
import SourcesSlider from "../components/SourcesSlider/SourcesSlider";
import HomeHeadlines from "../components/HomeHeadlines/HomeHeadlines";
import NewsSearchBar from "../components/HomeHeadlines/NewsSearchBar";

const Homepage = () => {
  return (
    <>
      {/* <SourcesSlider /> */}
      <div className="w-full px-8 pt-8 lg:px-96">
        <NewsSearchBar />
      </div>
      <div className="h-[1px] bg-gray-300 m-8"></div>
      {/* <HomeHeadlines /> */}
    </>
  );
};

export default Homepage;
