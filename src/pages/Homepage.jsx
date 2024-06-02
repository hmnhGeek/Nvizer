import React from "react";
import SourcesSlider from "../components/SourcesSlider/SourcesSlider";
import HomeHeadlines from "../components/HomeHeadlines/HomeHeadlines";

const Homepage = () => {
  return (
    <>
      <SourcesSlider />
      <div className="h-[1px] bg-gray-300 m-8"></div>
      <HomeHeadlines />
    </>
  );
};

export default Homepage;
