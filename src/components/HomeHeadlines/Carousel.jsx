import React, { useEffect, useRef } from "react";
import NewsCard from "../NewsCard/NewsCard";

const Carousel = ({ articles }) => {
  const carouselRef = useRef(null);
  let scrollInterval = null; // Declare scrollInterval variable

  const startScroll = () => {
    scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Adjust the scroll speed as needed
      }
    }, 20); // Adjust the interval as needed
  };

  useEffect(() => {
    startScroll();

    return () => clearInterval(scrollInterval);
  }, []); // Empty dependency array to run only once

  const handleMouseEnter = () => {
    clearInterval(scrollInterval);
  };

  const handleMouseLeave = () => {
    startScroll();
  };

  return (
    <div
      className="flex overflow-x-auto whitespace-nowrap"
      ref={carouselRef}
      style={{ overflowX: "hidden" }} // Hide horizontal scrollbar
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {articles.map((news, index) => (
        <div key={index} className="inline-block">
          <NewsCard news={news} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
