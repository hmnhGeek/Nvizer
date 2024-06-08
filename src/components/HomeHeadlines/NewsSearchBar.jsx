import React from "react";

const NewsSearchBar = () => {
  return (
    <div className="flex relative bg-transparent p-2 rounded border-2 justify-center items-center border-gray-400">
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
      <input
        type="text"
        className="ml-2 bg-transparent w-full focus:outline-none"
        placeholder="Search for news..."
      />
    </div>
  );
};

export default NewsSearchBar;
