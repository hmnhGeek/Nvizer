import React from "react";

const NewsCard = ({ news, onHover, onLeave }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const formatDescription = (description, maxLines) => {
    const lines = description.split("\n");
    const truncated = lines.slice(0, maxLines).join("\n");
    if (lines.length > maxLines) {
      return truncated + "...";
    }
    return truncated;
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer m-2"
      onClick={() => window.open(news.url, "_blank")}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ height: "22.75rem" }} // Set a fixed height
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
        <h2
          className="font-bold text-xl mb-2 overflow-hidden whitespace-nowrap"
          title={news.title}
        >
          {truncateText(news.title, 50)}
        </h2>
        <p
          className="text-gray-700 text-base overflow-hidden"
          style={{
            maxHeight: "4.5em",
            lineHeight: "1.5em",
            whiteSpace: "pre-line",
          }}
        >
          {formatDescription(news.description, 3)}
        </p>
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
