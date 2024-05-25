import React from "react";
import SourceCard from "./SourceCard";

const AnimatedBanner = ({ divId, sources, reverseScroll }) => {
  if (sources.length === 0) return null;
  return (
    <div className="flex overflow-hidden space-x-5">
      <div
        id={divId}
        className={
          reverseScroll
            ? "flex gap-4 w-screen animate-loop-scroll-rev"
            : "flex gap-4 w-screen animate-loop-scroll"
        }
      >
        {sources.map((source) => (
          <SourceCard title={source} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBanner;
