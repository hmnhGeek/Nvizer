import React from "react";

const NewsCard = ({ news, onHover, onLeave }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer m-2"
      onClick={() => window.open(news.url, "_blank")}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={news.image}
          alt={news.title}
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
          {news.source.name}
        </span>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{news.title}</h2>
        <p className="text-gray-700 text-base">{news.description}</p>
        <div className="mt-4 text-right">
          <span className="text-gray-600 text-sm">
            {new Date(news.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
