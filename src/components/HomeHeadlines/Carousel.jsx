import React, { useEffect, useRef } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useSelector } from "react-redux";

const Carousel = ({ articles }) => {
  const carouselRef = useRef(null);
  let scrollInterval = null; // Declare scrollInterval variable
  let direction = 1; // Direction of scrolling

  const saved = useSelector((state) => state.news.favs);

  const startScroll = () => {
    scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += direction; // Adjust the scroll speed as needed
        // Check if reached end of the carousel
        if (
          direction === 1 &&
          carouselRef.current.scrollLeft >=
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          direction = -1; // Change direction to scroll back
        } else if (direction === -1 && carouselRef.current.scrollLeft === 0) {
          direction = 1; // Change direction to scroll forward
        }
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
          <NewsCard
            news={news}
            isFavourite={() =>
              saved.filter((x) => {
                return x.article.url === news.url;
              })?.length >= 1
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
