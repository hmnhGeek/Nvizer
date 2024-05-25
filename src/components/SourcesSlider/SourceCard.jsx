import React from "react";

const SourceCard = ({ title, to }) => {
  return (
    <a href={to} target="_blank">
      <div className="flex flex-col min-w-48 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 p-5">
        <span className="text-[12px] md:text-[16px] font-semibold">
          {title}
        </span>
      </div>
    </a>
  );
};

export default SourceCard;
