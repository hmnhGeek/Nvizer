import React, { useEffect, useState } from "react";
import Api from "../../Api/Api";
import { conf } from "../../conf/conf";
import toast, { Toaster } from "react-hot-toast";

const NewsSearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const {
    parentSearchResultsStateSetter,
    searchQuerySetter,
    clearSearch,
    clearSearchSetter,
  } = props;

  const beginSearch = () => {
    parentSearchResultsStateSetter([]);
    searchQuerySetter(searchValue);
    clearSearchSetter(false);

    if (searchValue.trim() !== "") {
      Api(`/search?q=${searchValue}&apikey=${conf.apiKey}`)
        .then((response) => {
          parentSearchResultsStateSetter(response.data.articles);

          if (response.data.articles.length === 0)
            toast.error(`Could not find any results for ${searchValue}.`);
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    if (clearSearch) {
      setSearchValue("");
      parentSearchResultsStateSetter([]);
      searchQuerySetter("");
    }
  }, [
    clearSearch,
    setSearchValue,
    parentSearchResultsStateSetter,
    searchQuerySetter,
  ]);

  return (
    <>
      <Toaster />
      <div className="flex relative bg-transparent p-2 rounded border-2 justify-center items-center border-gray-400">
        <input
          type="text"
          className="ml-2 bg-transparent w-full focus:outline-none"
          placeholder="Search for news..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={beginSearch}
          className="flex gap-2 items-center border border-gray-600 px-3 py-2 rounded-lg hover:border-gray-800 bg-gray-600 text-white"
        >
          <svg
            className="h-5 w-5 absolute left-0 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          Search
        </button>
      </div>
    </>
  );
};

export default NewsSearchBar;
