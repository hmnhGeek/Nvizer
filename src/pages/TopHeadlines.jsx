import React from "react";
import SecondaryHeader from "../components/TopHeadlines/SecondaryHeader/SecondaryHeader";
import { Outlet } from "react-router-dom";

const TopHeadlines = () => {
  return (
    <>
      <SecondaryHeader />
      <div className="flex overflow-x-auto whitespace-nowrap">
        <Outlet />
      </div>
    </>
  );
};

export default TopHeadlines;
