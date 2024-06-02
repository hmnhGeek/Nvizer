import React from "react";
import GeneralHeadlines from "../components/TopHeadlines/GeneralHeadlines";
import ScienceHeadlines from "../components/TopHeadlines/ScienceHeadlines";

const TopHeadlines = () => {
  return (
    <>
      <div className="flex overflow-x-auto whitespace-nowrap">
        <GeneralHeadlines />
      </div>
      <div className="flex overflow-x-auto whitespace-nowrap">
        <ScienceHeadlines />
      </div>
    </>
  );
};

export default TopHeadlines;
