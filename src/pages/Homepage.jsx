import React, { useState } from "react";
import SourcesSlider from "../components/SourcesSlider/SourcesSlider";
import HomeHeadlines from "../components/HomeHeadlines/HomeHeadlines";
import NewsSearchBar from "../components/HomeHeadlines/NewsSearchBar";
import NewsCard from "../components/NewsCard/NewsCard";

const Homepage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="w-full px-8 pt-8 lg:px-96">
        <NewsSearchBar
          parentSearchResultsStateSetter={setSearchResults}
          searchQuerySetter={setSearchQuery}
        />
      </div>
      <div className="h-[1px] bg-gray-300 m-8"></div>
      {searchResults.length === 0 ? (
        <HomeHeadlines />
      ) : (
        <div
          id="general-headlines-container"
          className="flex flex-col overflow-x-hidden m-2"
        >
          <div id="companies-title" className="flex justify-center gap-2 mt-5">
            <span className="font-medium">
              Showing results for <i>{searchQuery}</i>
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center m-8 overflow-x:hidden">
            {searchResults.map((news, index) => (
              <div key={index}>
                <NewsCard
                  news={news}
                  className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <SourcesSlider /> */}
    </>
  );
};

export default Homepage;
