import React, { useEffect, useRef, useState } from "react";
import SourceCard from "./SourceCard";
import AnimatedBanner from "./AnimatedBanner";
import Api from "../../Api/Api";
import { conf } from "../../conf/conf";

const SourcesSlider = (props) => {
  const [sources, setSources] = useState([]);
  const [sourceLinks, setSourceLinks] = useState([]);

  function divideArrayIntoKParts(arr, k) {
    const result = [[], [], [], []];
    const partSize = Math.ceil(arr.length / k);

    for (let i = 0; i < k; i++) {
      result[i] = arr.slice(i * partSize, (i + 1) * partSize);
    }

    return result;
  }

  useEffect(() => {
    Api(`/top-headlines/sources?apiKey=${conf.apiKey}`, "get").then(
      (response) => {
        setSources(
          divideArrayIntoKParts(
            response.data.sources.map((x) => x.name),
            5
          )
        );
        setSourceLinks(
          divideArrayIntoKParts(
            response.data.sources.map((x) => x.url),
            5
          )
        );
      }
    );
  }, []);

  if (sources.length === 0) return null;
  return (
    <div
      id="companies-container"
      className="flex flex-col gap-8 overflow-x-hidden m-20 md:mt-8 md:ml-5 md:mr-5 md:mb-5"
    >
      <div id="companies-title" className="flex justify-center gap-2">
        <span className="font-medium">NEWS SUPPORTED BY THESE SOURCES</span>
      </div>
      <div id="companies-lines-group" className="flex flex-col gap-4">
        {sources.map((source, index) => (
          <AnimatedBanner
            divId={source}
            sources={source}
            reverseScroll={index % 2 === 0}
            to={sourceLinks[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default SourcesSlider;
